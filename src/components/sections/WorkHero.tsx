import React from 'react';
import Image from 'next/image';
import heroBg from '@/assets/images/how-we-work.png';

const WorkHero: React.FC = () => {
    return (
        <section className="relative pt-48 pb-24 overflow-hidden bg-brand-navy">
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt=""
                    fill
                    className="object-cover opacity-40 grayscale"
                    priority
                />
                {/* Complex Gradient Mask for Seamless Blending */}
                <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-brand-navy/40 to-brand-navy" />
                <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-transparent to-brand-navy opacity-80" />
            </div>

            <div className="max-w-300 mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-brand-gold font-technical text-[0.6rem] tracking-[0.4em] uppercase mb-10 block opacity-80">HOW WE WORK</span>
                    <h1 className="text-5xl md:text-7xl font-technical mb-12 leading-[1.1] tracking-tight">
                        <span className="text-white">Decision-led,</span><br className="hidden md:block" />{" "}
                        <span className="text-brand-gold italic font-cinzel opacity-90">not topic-led.</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                            The work is anchored to a specific decision at all times—protecting clarity, constraining
                            scope and ensuring every conversation strengthens judgement. We do not take authority
                            away from leaders. We make the thinking sharper so the decision can be owned,
                            defended and executed with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkHero;

