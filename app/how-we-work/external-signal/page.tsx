import React from 'react';
import Image from 'next/image';
import WorkFinalCTA from '@/components/sections/WorkFinalCTA';
import bgImage from '@/assets/images/golden_line_in_the_dark_sky.png';

export default function ExternalSignalPage() {
    return (
        <div className="min-h-screen bg-brand-navy">
            <section className="relative pt-48 pb-28 overflow-hidden bg-brand-navy">
                <div className="absolute inset-0">
                    <Image src={bgImage} alt="" fill className="object-cover opacity-35" />
                    <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-brand-navy/60 to-brand-navy" />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-transparent to-brand-navy/80" />
                </div>

                <div className="max-w-300 mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="label-tech mb-8 inline-block">EXTERNAL SIGNAL</span>
                        <h1 className="mb-8">Research as a core capability.</h1>
                        <p className="text-white/65 text-lg md:text-xl font-light leading-relaxed">
                            FalconBridge research is decision-led, not topic-led. It exists to improve judgement at the point of commitment.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <span className="label-tech">FOUNDATION</span>
                            <h2 className="mt-4">Decision-led research</h2>
                        </div>
                        <p>
                            Research at FalconBridge is not a standalone product. It is a core capability within the FalconBridge Decision System. Research is only undertaken when it serves a real decision and improves judgement.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            Our research is scoped tightly, delivered with speed and discretion and structured to surface insight, implications and consequences rather than raw analysis. Research outputs are designed to be read by decision-makers, not analysts.
                        </p>
                        <p>
                            Access to sample research is intentionally controlled. Engagements are governed by strict confidentiality and client identities are never disclosed. Trust and discretion are not features of our work. They are foundational.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="label-tech mb-6">SIGNAL PRINCIPLES</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-brand-gold/60 text-xl">01</span>
                                    <p className="text-white/60 text-sm leading-relaxed">Decision frame first, evidence second.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-brand-gold/60 text-xl">02</span>
                                    <p className="text-white/60 text-sm leading-relaxed">Signal is structured for commitment, not volume.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-brand-gold/60 text-xl">03</span>
                                    <p className="text-white/60 text-sm leading-relaxed">Confidentiality is non-negotiable.</p>
                                </div>
                            </div>
                            <div className="mt-8 accent-divider" />
                            <p className="mt-6 text-brand-gold italic font-cinzel text-xl opacity-90">
                                Signal without authority transfer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="label-tech">WHY MOST RESEARCH FAILS</span>
                        <h2>Why most research fails leaders</h2>
                        <p>
                            Most research fails because it is topic-led rather than decision-led. It produces information volume and analysis density, then expects the decision-maker to translate that into clarity under time pressure. This often increases noise rather than reducing uncertainty.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            FalconBridge research is built differently. We begin with the decision frame. We define what must be known to decide responsibly. We then collect, synthesise and structure signal so it can be used at the point of commitment.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="text-white/60 text-sm leading-relaxed">
                                Decision-grade research is not more information. It is clearer consequence mapping.
                            </p>
                            <div className="mt-8 grid grid-cols-1 gap-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Scope is tight. Relevance is high.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Assumptions are tested, not protected.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Trade-offs are made explicit before commitment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial">
                    <div className="mb-10">
                        <span className="label-tech">DELIVERABLES</span>
                        <h2 className="mt-4">What FalconBridge research delivers</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="frosted-glass rounded-3xl p-6">
                            <p className="text-white/70 text-sm leading-relaxed">Test assumptions that are being treated as facts.</p>
                        </div>
                        <div className="frosted-glass rounded-3xl p-6">
                            <p className="text-white/70 text-sm leading-relaxed">Expose blind spots and second-order consequences.</p>
                        </div>
                        <div className="frosted-glass rounded-3xl p-6">
                            <p className="text-white/70 text-sm leading-relaxed">Reduce decision regret by clarifying trade-offs before commitment.</p>
                        </div>
                    </div>
                    <p className="mt-10">
                        We are explicit about what is knowable, what remains uncertain and where judgement must still be applied. Research informs judgement. It does not replace it.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="label-tech">INTEGRATION</span>
                        <h2>How research integrates with coaching</h2>
                        <p>
                            Research and coaching are designed to work together without dependency. Research brings external signal and structured insight. Coaching brings internal integration and decisional ownership.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            The result is not answers but decision-grade clarity that the leader can defend because authority has not been outsourced.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="text-brand-gold italic font-cinzel text-xl opacity-90">
                                External signal strengthens judgement. It does not replace it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WorkFinalCTA />
        </div>
    );
}

