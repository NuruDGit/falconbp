import React from 'react';
import { ChevronRight } from 'lucide-react';
import PricingCalculator from '@/components/PricingCalculator';
import TrustAndFinalCTA from '@/components/sections/TrustAndFinalCTA';
import howWeWorkImage from '@/assets/images/how-we-work.png';
import falconbridgeFrostedUI from '../../images/falconbridge_frosted_ui.png';

const methodPillars = [
    {
        id: "internal",
        number: "1",
        title: "Internal Judgement",
        subtitle: "Coaching within the system",
        description: "Internal judgement is examined with discipline so the decision-maker can see assumptions, trade-offs, and pressure distortions clearly.",
        details: [
            "Clarify what decision is actually being made",
            "Surface assumptions treated as facts",
            "Stabilise clarity under pressure"
        ],
        insight: "Coaching is decision support, not personal development. The aim is coherence, not certainty."
    },
    {
        id: "external",
        number: "2",
        title: "External Signal",
        subtitle: "Decision-led research",
        description: "Research is scoped tightly to the decision frame so insight can be used at the point of commitment.",
        details: [
            "Test assumptions that shape the decision",
            "Expose blind spots and second-order effects",
            "Clarify trade-offs before commitment"
        ],
        insight: "Decision-grade insight, not information volume. Research informs judgement; it does not replace it."
    },
    {
        id: "execution",
        number: "3",
        title: "Execution Reality",
        subtitle: "Advisory without authority",
        description: "Execution pressure is tested before decisions are locked in, and clarity is protected as action begins.",
        details: [
            "Test options against organisational reality",
            "Anticipate second-order consequences",
            "Maintain intent during implementation"
        ],
        insight: "We advise without taking authority. The decision remains with the leader."
    }
];

const engagementFlow = [
    "Clarifying the decision",
    "Framing success, risk, and constraints",
    "Integrating internal judgement and external signal",
    "Pressure-testing options",
    "Commitment and transition into execution"
];

const coachingFormats = [
    "Pre-research decision clarity session",
    "Post-research decision integration session",
    "Multi-session decision support (4, 6, or 8 sessions)"
];

const WaysWeWork: React.FC = () => {
    return (
        <main className="bg-brand-navy min-h-screen">
            {/* INTRO SECTION */}
            <section className="relative min-h-screen w-full flex items-center justify-center bg-brand-navy pt-48 pb-0 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={howWeWorkImage} alt="" className="w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-linear-to-b from-brand-navy/20 via-brand-navy/60 to-brand-navy" />
                </div>

                <div className="max-w-300 mx-auto px-6 relative z-10 pb-32">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">HOW WE WORK</span>
                        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-technical mb-10 leading-[1.05]">
                            Decision-led,<br /><span className="text-brand-gold italic font-light">not topic-led.</span>
                        </h1>
                        <p className="text-white/70 text-xl font-light leading-relaxed max-w-3xl">
                            The work is anchored to a specific decision at all times—protecting clarity, constraining scope, and ensuring every conversation strengthens judgement. We do not take authority away from leaders. We make the thinking sharper so the decision can be owned, defended, and executed with&nbsp;confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* DECISION SYSTEM */}
            <section className="pt-32 pb-32">
                <div className="max-w-300 mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">THE DECISION SYSTEM</span>
                            <h2 className="text-4xl md:text-5xl font-technical leading-tight">The FalconBridge Decision&nbsp;System™</h2>
                            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
                                <p>
                                    A disciplined approach designed for uncertainty, pressure, and incomplete information—without diluting&nbsp;authority.
                                </p>
                                <p>
                                    Internal judgement, external signal, and execution reality are bound together and kept anchored to the decision throughout the&nbsp;engagement.
                                </p>
                                <p className="text-brand-gold italic font-light">
                                    The system strengthens judgement without prescribing&nbsp;outcomes.
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-8 bg-brand-gold/10 blur-[140px] opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                            <div className="relative overflow-hidden rounded-4xl border border-white/10 backdrop-blur-sm">
                                <img 
                                    src={falconbridgeFrostedUI} 
                                    alt="FalconBridge Decision System Interface" 
                                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/30 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE METHOD */}
            <section className="py-32">
                <div className="max-w-300 mx-auto px-6">
                    <div className="mb-20">
                        <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">THE SYSTEM IN PRACTICE</span>
                        <h2 className="text-4xl md:text-5xl font-technical mb-8 leading-tight">Three dimensions that shape every real&nbsp;decision.</h2>
                        <p className="text-white/60 text-xl font-light max-w-2xl leading-relaxed">
                            Each dimension can stand alone, but the system is built to integrate them when stakes are&nbsp;high.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {methodPillars.map((pillar) => (
                            <div key={pillar.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 bg-white/2 border border-white/5 rounded-3xl hover:border-brand-gold/30 hover:bg-white/3 transition-all duration-500">
                                <div className="lg:col-span-3">
                                    <div className="flex items-baseline gap-4 mb-6">
                                        <span className="text-5xl font-technical text-brand-gold/40 font-light">{pillar.number}</span>
                                        <div className="h-px flex-1 bg-brand-gold/30" />
                                    </div>
                                    <h3 className="text-3xl font-technical mb-2">{pillar.title}</h3>
                                    <p className="text-brand-gold/60 font-technical text-sm uppercase tracking-widest">{pillar.subtitle}</p>
                                </div>

                                <div className="lg:col-span-5 border-l border-white/5 lg:pl-12">
                                    <p className="text-white/70 font-light leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>
                                    <div className="space-y-3">
                                        <p className="text-white/40 text-xs font-technical uppercase tracking-widest">Focus areas:</p>
                                        <ul className="space-y-3">
                                            {pillar.details.map((detail) => (
                                                <li key={detail} className="flex items-start gap-3 text-white/70 font-light">
                                                    <ChevronRight className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:col-span-4 border-l border-white/5 lg:pl-12 space-y-6">
                                    <div>
                                        <p className="text-white/40 text-xs font-technical uppercase tracking-widest mb-3">Key Insight</p>
                                        <p className="text-white/80 font-light leading-relaxed whitespace-pre-line">
                                            {pillar.insight}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COACHING FORMATS */}
            <section className="py-32">
                <div className="max-w-300 mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">COACHING</span>
                            <h2 className="text-4xl md:text-5xl font-technical mb-8 leading-tight">Internal judgement in the&nbsp;room.</h2>
                            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
                                <p>
                                    Coaching is decision-bound. It is not therapy, and it is not a space for endless reflection. The goal is clarity that survives scrutiny from boards, investors, and&nbsp;stakeholders.
                                </p>
                                <p className="text-white/80 italic">
                                    The decision remains with the leader. We sharpen the judgement behind&nbsp;it.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/2 border border-white/5 p-12 rounded-3xl">
                            <h3 className="text-2xl font-technical mb-8 text-brand-gold">Coaching formats</h3>
                            <div className="space-y-6">
                                {coachingFormats.map((item, index) => (
                                    <div key={item} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.07] transition-all duration-500">
                                        <p className="text-sm font-technical uppercase tracking-widest text-brand-gold mb-2">Option {index + 1}</p>
                                        <p className="text-white/70 font-light">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENGAGEMENT FLOW */}
            <section className="py-32">
                <div className="max-w-300 mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">ENGAGEMENT FLOW</span>
                            <h2 className="text-4xl md:text-5xl font-technical mb-8 leading-tight">How engagements typically&nbsp;unfold.</h2>
                            <p className="text-white/60 text-lg font-light leading-relaxed">
                                Each engagement is decision-specific. Some leaders engage us across multiple cycles, but every engagement remains anchored to the&nbsp;decision.
                            </p>
                        </div>
                        <div className="bg-white/2 border border-white/5 p-12 rounded-3xl space-y-4">
                            {engagementFlow.map((step) => (
                                <div key={step} className="flex items-start gap-4">
                                    <ChevronRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                                    <p className="text-white/70 font-light">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="py-32">
                <div className="max-w-300 mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                        <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">PRICING</span>
                        <h2 className="text-4xl md:text-5xl font-technical mb-6 leading-tight">Pricing as a signal of&nbsp;seriousness.</h2>
                        <p className="text-white/60 text-lg font-light leading-relaxed">
                            You are not purchasing time. You are purchasing judgement support delivered with discretion and&nbsp;discipline.
                        </p>
                    </div>
                    <PricingCalculator />
                </div>
            </section>

            {/* WHAT WE ARE AND ARE NOT */}
            <section className="py-32">
                <div className="max-w-300 mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-technical mb-12 leading-tight max-w-3xl">What we are. What we are&nbsp;not.</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="group p-12 bg-white/2 border border-white/5 rounded-3xl hover:border-white/10 hover:bg-white/3 transition-all duration-500">
                            <p className="text-2xl font-technical text-brand-gold mb-8 italic">What we are NOT</p>
                            <div className="space-y-4">
                                <p className="text-white/70 font-light leading-relaxed">
                                    FalconBridge is not a consultancy delivering recommendations to adopt or&nbsp;defend.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Not outsourced leadership",
                                        "Not coaching detached from consequence",
                                        "Not research without a decision attached",
                                        "Not a substitute for accountability"
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-white/60 font-light">
                                            <span className="text-brand-gold mt-1">×</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="group p-12 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl hover:border-brand-gold/30 hover:bg-brand-gold/[0.07] transition-all duration-500">
                            <p className="text-2xl font-technical text-brand-gold mb-8 italic">What we ARE</p>
                            <div className="space-y-4">
                                <p className="text-white/80 font-light leading-relaxed">
                                    We inform, challenge, and support decision-makers while preserving authority and&nbsp;accountability.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Decision-led, not topic-led",
                                        "Disciplined, not formulaic",
                                        "Time-bound and outcome-bound"
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-white/80 font-light">
                                            <span className="text-brand-gold font-semibold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustAndFinalCTA />
        </main>
    );
};

export default WaysWeWork;
