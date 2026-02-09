import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Zap, Shield, Microscope, Rocket, Target } from 'lucide-react';

const props = [
    {
        icon: Target,
        title: "Clarity without loss of authority",
        desc: "We inform, challenge, and support - but the decision remains yours.",
        size: "lg:col-span-7 lg:row-start-1",
        dominant: true,
        cta: "Explore the decision system"
    },
    {
        icon: Microscope,
        title: "Integration over fragmentation",
        desc: "Internal judgement, external signal, and execution reality are bound together around one decision.",
        size: "lg:col-span-5 lg:row-start-1"
    },
    {
        icon: Zap,
        title: "Speed without sacrificing rigour",
        desc: "We help leaders decide responsibly under pressure, not wait for impossible certainty.",
        size: "lg:col-span-4 lg:row-start-2"
    },
    {
        icon: Shield,
        title: "Discretion as a baseline",
        desc: "Client identities are not disclosed and engagements remain within strict boundaries.",
        size: "lg:col-span-4 lg:row-start-2"
    },
    {
        icon: Rocket,
        title: "Decisions that can be owned",
        desc: "Clarity that can be defended to boards, investors, and stakeholders.",
        size: "lg:col-span-4 lg:row-start-2"
    }
];

const ValueProp: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy">
            <div className="container-editorial">
                <div className="max-w-3xl mb-20">
                    <span className="label-tech mb-4">THE EDGE</span>
                    <h2 className="mb-6">
                        Designed for decisions that<br className="hidden md:block" />{" "}
                        <span className="text-brand-gold italic font-cinzel opacity-90">cannot afford mistakes.</span>
                    </h2>
                </div>

                <div className="relative">
                    <div
                        className="pointer-events-none absolute -inset-6 opacity-[0.035]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                            backgroundSize: "220px 220px"
                        }}
                    />
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 lg:auto-rows-fr gap-6">
                    {props.map((prop, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden p-10 frosted-glass hover:bg-white/[0.04] hover:-translate-y-[2px] transition-all duration-700 rounded-4xl ${prop.size} ${
                                prop.dominant ? "border-[1.5px] border-brand-gold/25" : "border border-white/10"
                            }`}
                            style={{
                                backgroundImage:
                                    "radial-gradient(80% 80% at 12% 18%, rgba(199,169,117,0.08), rgba(21,28,47,0) 60%)"
                            }}
                        >
                            <div
                                className="absolute inset-0 opacity-[0.12]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(199,169,117,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,169,117,0.18) 1px, transparent 1px)",
                                    backgroundSize: "140px 140px"
                                }}
                            />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br from-brand-gold/5 via-transparent to-brand-navy/40" />
                            <div className={`relative z-20 ${prop.dominant ? "lg:grid lg:grid-cols-[1fr,220px] lg:gap-10 lg:items-start" : ""}`}>
                                <div>
                                    <div className="w-14 h-14 bg-white/3 shadow-[inset_0_0_0_1px_rgba(199,169,117,0.18)] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white/5 transition-all duration-500">
                                        <prop.icon className="w-6 h-6 text-brand-gold transition-transform duration-500 group-hover:scale-[1.05]" />
                                    </div>
                                    <h3 className="text-lg font-technical mb-4 group-hover:text-brand-gold transition-colors duration-500 uppercase tracking-wide leading-tight">
                                        {prop.title}
                                    </h3>
                                    <p className="text-white/40 text-[0.85rem] leading-relaxed font-light">
                                        {prop.desc}
                                    </p>
                                </div>
                                {prop.dominant && (
                                    <div className="mt-6 lg:mt-0 lg:text-right">
                                        <Button
                                            href="/how-we-work"
                                            variant="link"
                                            size="sm"
                                            icon={ArrowRight}
                                            className="!px-0 !py-0 text-[0.65rem] tracking-[0.2em] lg:justify-end"
                                        >
                                            {prop.cta}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
