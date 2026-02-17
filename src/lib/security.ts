import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  // Remove any HTML tags and scripts
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] }).trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Cloudflare Turnstile response
 */
export async function verifyTurnstile(token: string, secretKey: string, remoteIp?: string): Promise<boolean> {
  if (!token || !secretKey) return false;

  try {
    const formData = new URLSearchParams();
    formData.set('secret', secretKey);
    formData.set('response', token);
    if (remoteIp) {
      formData.set('remoteip', remoteIp);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const data = await response.json();
    if (!data?.success) {
      console.error('Turnstile verification unsuccessful:', {
        success: data?.success,
        errorCodes: data?.['error-codes'],
        action: data?.action,
        hostname: data?.hostname,
      });
      return false;
    }

    if (data?.action && data.action !== 'submit') {
      console.error('Turnstile action mismatch:', {
        expectedAction: 'submit',
        actualAction: data.action,
      });
      return false;
    }

    return true;
  } catch (error) {
    console.error('Turnstile verification failed:', error);
    return false;
  }
}
