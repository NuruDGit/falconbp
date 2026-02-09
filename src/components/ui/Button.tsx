import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    asChild?: boolean;
    href?: string;
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ 
        className, 
        variant = 'primary', 
        size = 'md', 
        icon: Icon,
        iconPosition = 'right',
        children,
        asChild,
        href,
        ...props 
    }, ref) => {
        const baseStyles = "inline-flex items-center justify-center gap-3 font-semibold uppercase tracking-widest transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed group";
        
        const variants = {
            primary: "bg-brand-gold text-brand-navy hover:bg-brand-gold/90 hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20",
            secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
            ghost: "text-white/60 hover:text-white hover:bg-white/5",
            link: "text-brand-gold/60 hover:text-brand-gold underline-offset-4 hover:underline"
        };

        const sizes = {
            sm: "px-5 py-2.5 text-[0.65rem] md:px-6 md:py-3 md:text-xs",
            md: "px-6 py-3.5 text-xs md:px-10 md:py-5 md:text-sm",
            lg: "px-7 py-4 text-sm md:px-12 md:py-6 md:text-base"
        };

        const iconStyles = iconPosition === 'right' 
            ? "group-hover:translate-x-1 transition-transform" 
            : "group-hover:-translate-x-1 transition-transform";

        const content = (
            <>
                {Icon && iconPosition === 'left' && <Icon className={cn("w-4 h-4", iconStyles)} />}
                {children}
                {Icon && iconPosition === 'right' && <Icon className={cn("w-4 h-4", iconStyles)} />}
            </>
        );

        if (href) {
            return (
                <a
                    href={href}
                    className={cn(
                        baseStyles,
                        variants[variant],
                        sizes[size],
                        className
                    )}
                >
                    {content}
                </a>
            );
        }

        return (
            <button
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
