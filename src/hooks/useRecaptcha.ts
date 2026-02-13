import { useEffect, useCallback } from 'react';

/**
 * Hook to load reCAPTCHA script and provide token generation function
 */
export function useRecaptcha() {
  useEffect(() => {
    // Load reCAPTCHA script
    if (typeof window !== 'undefined' && !(window as any).grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const getRecaptchaToken = useCallback(async (): Promise<string | null> => {
    try {
      if (!(window as any).grecaptcha) {
        console.error('reCAPTCHA not loaded');
        return null;
      }

      const token = await (window as any).grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
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
