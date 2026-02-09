import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import boardroomBg from '@/assets/images/falcon-bridge-boardroom.png';

const WorkFinalCTA: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy relative overflow-hidden">
            {/* Background Image with Blending */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={boardroomBg}
                    alt=""
                    fill
                    className="object-cover opacity-30 grayscale blur-[2px]"
                />
                {/* Immersive Masks */}
                <div className="absolute inset-0 bg-radial-at-c from-transparent via-brand-navy/60 to-brand-navy" />
                <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-transparent to-brand-navy" />
            </div>

            {/* Ambient Background Lights */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-gold/10 blur-[200px] rounded-full" />
            </div>

            <div className="container-editorial relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="lg:text-7xl mb-16 leading-tight">
                        What decision are you<br className="hidden md:block" />{" "}actually being asked to make?
                    </h2>

                    <p className="mb-20 max-w-4xl mx-auto italic font-cinzel opacity-90 text-2xl">
                        When that question feels harder than it should, clarity is already being compromised.
                        That is usually the moment FalconBridge Partners is engaged.
                    </p>

                    <div className="flex flex-col items-center gap-10">
                        <Button href="/contact" variant="primary" size="lg" icon={ArrowRight}>
                            Book A Clarity Call
                        </Button>
                        <div className="flex items-center gap-6 opacity-40">
                            <div className="accent-divider" />
                            <p className="label-tech lowercase tracking-widest whitespace-nowrap">Discreet • Rigorous • Referral-only</p>
                            <div className="accent-divider" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkFinalCTA;
