"use client";

import React, { useEffect, useRef, useState } from 'react';

type TurnstileInstance = {
    render: (
        container: HTMLElement,
        options: {
            sitekey: string;
            callback: (token: string) => void;
            'expired-callback'?: () => void;
            'error-callback'?: () => void;
            theme?: 'light' | 'dark' | 'auto';
        }
    ) => string;
    remove: (widgetId: string) => void;
};

declare global {
    interface Window {
        turnstile?: TurnstileInstance;
    }
}

interface TurnstileWidgetProps {
    onTokenChange: (token: string | null) => void;
}

const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({ onTokenChange }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const widgetIdRef = useRef<string | null>(null);
    const [isReady, setIsReady] = useState(false);
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    useEffect(() => {
        if (!siteKey) return;

        const existingScript = document.querySelector<HTMLScriptElement>('script[data-turnstile="true"]');
        if (window.turnstile) {
            setIsReady(true);
            return;
        }

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.setAttribute('data-turnstile', 'true');
            script.onload = () => setIsReady(true);
            document.head.appendChild(script);
            return;
        }

        const timer = window.setInterval(() => {
            if (window.turnstile) {
                setIsReady(true);
                window.clearInterval(timer);
            }
        }, 100);

        return () => window.clearInterval(timer);
    }, [siteKey]);

    useEffect(() => {
        if (!siteKey || !isReady || !window.turnstile || !containerRef.current) return;
        if (widgetIdRef.current) return;

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => onTokenChange(token),
            'expired-callback': () => onTokenChange(null),
            'error-callback': () => onTokenChange(null),
            theme: 'dark',
        });

        return () => {
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [isReady, onTokenChange, siteKey]);

    if (!siteKey) {
        return <p className="text-xs text-red-300/80">Missing Turnstile site key.</p>;
    }

    return <div ref={containerRef} className="min-h-[65px]" />;
};

export default TurnstileWidget;
