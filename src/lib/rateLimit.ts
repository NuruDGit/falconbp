/**
 * Simple in-memory rate limiter
 * Tracks requests per identifier (IP or email)
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Check if a request should be rate limited
 * @param identifier - Usually IP address or email
 * @param limit - Max requests allowed
 * @param windowMs - Time window in milliseconds (default: 1 hour)
 * @returns true if request should be allowed, false if rate limited
 */
export function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 60 * 60 * 1000 // 1 hour
): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || entry.resetTime < now) {
    // New entry or window expired
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return true; // Allow first request
  }

  if (entry.count < limit) {
    entry.count++;
    return true; // Allow request
  }

  return false; // Rate limited
}

/**
 * Get remaining requests for an identifier
 */
export function getRemainingRequests(
  identifier: string,
  limit: number = 5
): number {
  const entry = rateLimitStore.get(identifier);
  if (!entry || entry.resetTime < Date.now()) {
    return limit;
  }
  return Math.max(0, limit - entry.count);
}
