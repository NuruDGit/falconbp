import { useEffect, useCallback } from 'react';

type Recaptcha = {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

type WindowWithRecaptcha = Window & {
  grecaptcha?: Recaptcha;
};

/**
 * Hook to load reCAPTCHA script and provide token generation function
 */
export function useRecaptcha() {
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaWindow = window as WindowWithRecaptcha;
    if (!siteKey) {
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-recaptcha="true"]');

    // Load reCAPTCHA script
    if (typeof window !== 'undefined' && !recaptchaWindow.grecaptcha && !existingScript) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.setAttribute('data-recaptcha', 'true');
      document.head.appendChild(script);
    }
  }, []);

  const getRecaptchaToken = useCallback(async (): Promise<string | null> => {
    try {
      const recaptchaWindow = window as WindowWithRecaptcha;
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

      if (!siteKey) {
        console.error('Missing reCAPTCHA site key');
        return null;
      }

      if (!recaptchaWindow.grecaptcha) {
        console.error('reCAPTCHA not loaded');
        return null;
      }

      const token = await new Promise<string>((resolve, reject) => {
        recaptchaWindow.grecaptcha?.ready(async () => {
          try {
            const generatedToken = await recaptchaWindow.grecaptcha?.execute(siteKey, { action: 'submit' });
            if (!generatedToken) {
              reject(new Error('Empty reCAPTCHA token'));
              return;
            }
            resolve(generatedToken);
          } catch (executeError) {
            reject(executeError);
          }
        });
      });

      return token;
    } catch (error) {
      console.error('Error getting reCAPTCHA token:', error);
      return null;
    }
  }, []);

  return { getRecaptchaToken };
}
