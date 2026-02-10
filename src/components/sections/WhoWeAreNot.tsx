import React from 'react';
import { Check, X } from 'lucide-react';

const WhoWeAreNot: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy">
            <div className="container-editorial">
                <div className="mb-20 text-center">
                    <h2>
                        What we are. What we <span className="text-brand-gold italic font-cinzel opacity-90">are not.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* What we are NOT */}
                    <div className="lg:col-span-5 p-10 md:p-14 frosted-glass bg-brand-navy/40 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-1000">
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(199,169,117,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,169,117,0.16) 1px, transparent 1px)",
                                backgroundSize: "160px 160px"
                            }}
                        />
                        <div className="relative z-10">
                            <h3 className="label-tech italic mb-10">
                                What we are NOT
                            </h3>

                            <p className="mb-10 max-w-sm text-white/60">
                                FalconBridge is not a consultancy delivering recommendations to adopt or defend.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    "Not outsourced leadership",
                                    "Not coaching detached from consequence",
                                    "Not research without a decision attached",
                                    "Not a substitute for accountability"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-white/40 font-light items-start">
                                        <X className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base font-technical tracking-wide group-hover:text-white/60 transition-colors duration-500">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* What we ARE */}
                    <div className="lg:col-span-7 p-10 md:p-14 frosted-glass bg-brand-navy/40 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-1000 border border-brand-gold/20">
                        <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(199,169,117,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,169,117,0.18) 1px, transparent 1px)",
                                backgroundSize: "160px 160px"
                            }}
                        />
                        <div className="relative z-10">
                            <h3 className="label-tech italic mb-10">
                                What we ARE
                            </h3>

                            <p className="text-white/70 mb-10 max-w-md">
                                We inform, challenge and support decision-makers while preserving authority and accountability.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    "Decision-led, not topic-led",
                                    "Disciplined, not formulaic",
                                    "Time-bound and outcome-bound"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-white/70 font-light items-start">
                                        <Check className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5 opacity-80" />
                                        <span className="text-sm md:text-base font-technical tracking-wide group-hover:text-white transition-colors duration-500">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreNot;

