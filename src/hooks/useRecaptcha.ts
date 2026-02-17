import { useEffect, useCallback } from 'react';

type Recaptcha = {
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
    const recaptchaWindow = window as WindowWithRecaptcha;
    // Load reCAPTCHA script
    if (typeof window !== 'undefined' && !recaptchaWindow.grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
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

      const token = await recaptchaWindow.grecaptcha.execute(
        siteKey,
        { action: 'submit' }
      );
      return token;
    } catch (error) {
      console.error('Error getting reCAPTCHA token:', error);
      return null;
    }
  }, []);

  return { getRecaptchaToken };
}
