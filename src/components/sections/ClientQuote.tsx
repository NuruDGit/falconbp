import React from 'react';

const ClientQuote: React.FC = () => {
    return (
        <section className="relative bg-brand-navy py-24 overflow-hidden">
            <div className="max-w-350 mx-auto px-6">
                <div className="relative">
                    {/* Massive Quote Text */}
                    <blockquote className="text-center">
                        <p className="font-technical text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] text-white/90 font-light tracking-tight max-w-6xl mx-auto">
                            Our clients are not looking for opinions.{' '}
                            <span className="text-brand-gold font-cinzel italic font-normal">
                                They are looking for clarity they can trust.
                            </span>
                        </p>
                    </blockquote>

                    {/* Subtle Decorative Element */}
                    <div className="flex justify-center mt-12">
                        <div className="w-16 h-0.5 bg-brand-gold/30" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientQuote;
