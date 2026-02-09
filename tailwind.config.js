/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-navy': '#151C2F',
                'brand-navy-dark': '#010614',
                'brand-gold': '#C7A975',
                'brand-grey': '#C5C6CB',
            },
            fontFamily: {
                technical: ['var(--font-technical)', 'sans-serif'],
                primary: ['var(--font-primary)', 'sans-serif'],
                cinzel: ['var(--font-cinzel)', 'serif'],
            },
            spacing: {
                'section': 'clamp(6rem, 10vh, 12rem)',
                'gutter': 'clamp(3rem, 5vh, 6rem)',
            },
            transitionDuration: {
                '500': '500ms',
                '1000': '1000ms',
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'stagger-fade': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
