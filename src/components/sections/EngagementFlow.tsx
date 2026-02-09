import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import goldenLine from '@/assets/images/golden_line_in_the_dark_sky.png';

const EngagementFlow: React.FC = () => {
    const steps = [
        {
            title: "Clarifying the decision",
            desc: "Identifying the core question that requires resolution before movement is possible."
        },
        {
            title: "Framing success, risk, and constraints",
            desc: "Mapping the boundaries of the decision to ensure all variables are visible."
        },
        {
            title: "Integrating judgement and signal",
            desc: "Synthesizing internal intuition with external data for a balanced perspective."
        },
        {
            title: "Pressure-testing options",
            desc: "Stress-testing potential paths against worst-case scenarios and second-order effects."
        },
        {
            title: "Commitment and transition",
            desc: "Moving from deliberation to ownership, ensuring a clean hand-off to execution."
        }
    ];

    return (
        <section className="section-padding bg-brand-navy relative overflow-hidden">
            <div className="container-editorial relative z-10 space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-7 h-fit">
                        <span className="label-tech mb-8">ENGAGEMENT FLOW</span>
                        <h2 className="mb-10 lg:text-5xl leading-tight">
                            How engagements<br className="hidden md:block" />{" "}typically unfold.
                        </h2>
                        <p className="max-w-md">
                            Each engagement is structured to protect the decision-maker while exposing
                            the decision to a disciplined system of clarity. We move from ambiguity to ownership.
                        </p>
                    </div>

                    <div className="lg:col-span-5 flex items-start lg:justify-end">
                        <div className="frosted-glass bg-brand-navy/40 rounded-[2rem] p-8 md:p-10 w-full max-w-md">
                            <p className="label-tech mb-6">THE DECISION RHYTHM</p>
                            <p className="text-white/60 text-sm leading-relaxed mb-8">
                                A disciplined cadence that moves from clarity to commitment without diluting authority.
                            </p>
                            <Button href="/contact" variant="primary" size="md" icon={ArrowRight}>
                                Book A Clarity Call
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="frosted-glass bg-brand-navy/40 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none opacity-35">
                        <Image src={goldenLine} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/70 via-brand-navy/40 to-brand-navy/85" />
                    </div>
                    <h3 className="label-tech lowercase tracking-widest mb-12 relative z-10">The decision rhythm</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:p-8 transition-all duration-700 hover:-translate-y-[2px] hover:border-brand-gold/30 ${
                                    i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                                }`}
                            >
                                <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(to right, rgba(199,169,117,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,169,117,0.18) 1px, transparent 1px)",
                                        backgroundSize: "140px 140px"
                                    }}
                                />
                                <div className="relative">
                                    <span className="label-tech mb-4 block text-white/40">0{i + 1}</span>
                                    <h4 className="text-base md:text-lg font-technical uppercase tracking-tight text-white/70 group-hover:text-brand-gold transition-all duration-500 leading-tight">
                                        {step.title}
                                    </h4>
                                    <p className="mt-3 text-white/35 group-hover:text-white/55 font-light leading-relaxed transition-all duration-500">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngagementFlow;
