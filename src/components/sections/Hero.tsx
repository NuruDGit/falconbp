import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import csuiteImage from '@/assets/images/c-suite-executives.png';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-brand-navy pt-48 pb-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image src={csuiteImage} alt="" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-linear-to-b from-brand-navy/20 via-brand-navy/50 to-brand-navy/90" />
            </div>

            <div className="max-w-300 mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <h1 className="font-technical text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] text-white font-medium tracking-tight mb-10 animate-fade-in-up">
                        Sharper thinking when<br />
                        <span className="text-brand-gold font-technical italic font-normal">the decision stays with you.</span>
                    </h1>

                    <p className="text-[clamp(1.1rem,1.5vw,1.35rem)] text-white/70 max-w-3xl font-light leading-relaxed mb-12 animate-fade-in-up [animation-delay:0.2s]">
                        FalconBridge Partners supports CEOs and founders at moments where decisions carry real consequence and responsibility cannot be delegated.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-fade-in-up [animation-delay:0.4s] w-full sm:w-auto">
                        <Button
                            href="/contact"
                            variant="primary"
                            size="md"
                            icon={ArrowRight}
                            className="w-full sm:w-auto max-w-md text-center"
                        >
                            Request a Confidential Conversation
                        </Button>
                        <Button href="/how-we-work" variant="ghost" size="md" icon={ArrowRight} className="w-full sm:w-auto max-w-md text-center">
                            How We Work
                        </Button>
                    </div>

                    <p className="mt-8 text-[0.7rem] font-technical text-white/20 uppercase tracking-[0.2em] animate-fade-in-up [animation-delay:0.5s]">
                        A professional exchange, not a sales discussion.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
