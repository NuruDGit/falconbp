import React from 'react';
import Image from 'next/image';
import systemVisual from '@/assets/images/falconbridge_frosted_ui.png';

const DecisionSystemOverview: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy overflow-hidden">
            <div className="container-editorial">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="label-tech mb-8">THE DECISION SYSTEM</span>
                        <h2 className="mb-10">
                            The FalconBridge<br className="hidden md:block" />{" "}Decision System™
                        </h2>
                        <div className="space-y-8 max-w-xl">
                            <p>
                                A disciplined approach designed for uncertainty, pressure, and
                                incomplete information—without diluting authority.
                            </p>
                            <p>
                                Internal judgement, external signal, and execution reality are bound
                                together and kept anchored to the decision throughout
                                the engagement.
                            </p>
                            <div className="pt-6">
                                <p className="text-brand-gold italic font-cinzel text-xl md:text-2xl opacity-90">
                                    The system strengthens judgement without prescribing outcomes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-[2rem] group transition-all duration-1000">
                            <Image
                                src={systemVisual}
                                alt="FalconBridge Decision System"
                                className="w-full h-auto scale-[1.02] opacity-85 group-hover:scale-[1] transition-transform duration-1000"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand-navy/35 via-brand-navy/10 to-brand-navy/70" />
                            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-brand-navy/40" />
                            <div className="pointer-events-none absolute -inset-10 bg-brand-navy/70 blur-2xl opacity-70" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DecisionSystemOverview;
