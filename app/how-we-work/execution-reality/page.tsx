import React from 'react';
import Image from 'next/image';
import WorkFinalCTA from '@/components/sections/WorkFinalCTA';
import boardroomImage from '@/assets/images/falcon-bridge-boardroom.png';

export default function ExecutionRealityPage() {
    return (
        <div className="min-h-screen bg-brand-navy">
            <section className="relative pt-48 pb-28 overflow-hidden bg-brand-navy">
                <div className="absolute inset-0">
                    <Image src={boardroomImage} alt="" fill className="object-cover opacity-40 grayscale" />
                    <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-brand-navy/60 to-brand-navy" />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-transparent to-brand-navy/80" />
                </div>

                <div className="max-w-300 mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="label-tech mb-8 inline-block">EXECUTION REALITY</span>
                        <h1 className="mb-8">Advisory within the FalconBridge Decision System.</h1>
                        <p className="text-white/65 text-lg md:text-xl font-light leading-relaxed">
                            Execution reality is where good decisions succeed or fail. We test decisions against real-world pressure before commitment is locked in.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <span className="label-tech">FOUNDATION</span>
                            <h2 className="mt-4">Execution reality before commitment</h2>
                        </div>
                        <p>
                            Many decisions appear sound in theory and fail in practice. Execution introduces timing constraints, organisational dynamics, cultural resistance, resource limitations, and unintended consequences that are easy to underestimate before commitment.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            FalconBridge examines execution reality before decisions are locked in and supports clarity as execution applies pressure.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="label-tech mb-6">EXECUTION LENS</p>
                            <p className="text-brand-gold italic font-cinzel text-xl opacity-90">
                                The goal is realism, not risk avoidance.
                            </p>
                            <div className="mt-8 accent-divider" />
                            <p className="mt-6 text-white/60 text-sm leading-relaxed">
                                We surface second-order consequences before decisions are locked in.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="label-tech">SECOND-ORDER EFFECTS</span>
                        <h2>Second-order and unintended consequences</h2>
                        <p>
                            One of the most common sources of regret in high-stakes decisions is not the primary outcome, but the second-order effects that were not fully considered.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            FalconBridge deliberately examines downstream implications across execution, culture, capability, and stakeholder response. This is not an exercise in risk avoidance. It is an exercise in realism.
                        </p>
                        <p>
                            By surfacing these effects early, leaders are better positioned to decide with eyes open, allocate attention appropriately, and respond deliberately rather than reactively once execution begins.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="label-tech mb-6">IMPLICATIONS</p>
                            <div className="space-y-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Operational load and capability gaps.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Cultural resistance and stakeholder pushback.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Unintended reputational or governance pressure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="label-tech">PACE AND TIMING</span>
                        <h2>The role of pace and timing</h2>
                        <p>
                            FalconBridge pays close attention to timing, not just in terms of deadlines, but in terms of decision readiness.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            Some decisions fail because they are made too slowly and opportunity is lost. Others fail because they are made too quickly, before sufficient integration has occurred.
                        </p>
                        <p>
                            Part of our role is to help leaders sense when to slow the process because clarity is degrading, and when to accelerate because alignment is sufficient and hesitation is creating unnecessary risk. This calibration of pace is a core element of the FalconBridge Decision System.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="text-brand-gold italic font-cinzel text-xl opacity-90">
                                The right pace protects judgement under pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="label-tech">ADVISORY</span>
                        <h2>What FalconBridge advisory is</h2>
                        <p>
                            FalconBridge advisory is not execution management. It is execution clarity. It supports leaders to maintain alignment, protect original intent, and respond to real-world pressure without reverting to reactive decision-making.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            Advisory engagements can include structured decision follow-through, risk and consequence mapping during implementation, stakeholder alignment preparation, and decision integrity support when execution introduces distortion.
                        </p>
                        <p>
                            Authority remains with the leader. Advisory does not replace leadership.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="label-tech mb-6">ADVISORY SUPPORT</p>
                            <div className="space-y-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Decision follow-through and integrity mapping.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Stakeholder alignment preparation.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Execution pressure testing before commitment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WorkFinalCTA />
        </div>
    );
}
