import React from 'react';

const dimensions = [
    {
        id: "1",
        title: "Internal Judgement",
        label: "COACHING WITHIN THE SYSTEM",
        mainText: "Internal judgement is examined with discipline so the decision-maker can see assumptions, trade-offs, and pressure distortions clearly.",
        focusAreas: [
            "Clarify what decision is actually being made",
            "Surface assumptions treated as facts",
            "Stabilise clarity under pressure"
        ],
        insight: "Coaching is decision support, not personal development. The aim is coherence, not certainty."
    },
    {
        id: "2",
        title: "External Signal",
        label: "DECISION-LED RESEARCH",
        mainText: "Research is scoped tightly to the decision frame so insight can be used at the point of commitment.",
        focusAreas: [
            "Test assumptions that shape the decision",
            "Expose blind spots and second-order effects",
            "Clarify trade-offs before commitment"
        ],
        insight: "Decision-grade insight, not information volume. Research informs judgement; it does not replace it."
    },
    {
        id: "3",
        title: "Execution Reality",
        label: "ADVISORY WITHOUT AUTHORITY",
        mainText: "Execution pressure is tested before decisions are locked in, and clarity is protected as action begins.",
        focusAreas: [
            "Test options against organisational reality",
            "Anticipate second-order consequences",
            "Maintain intent during implementation"
        ],
        insight: "We advise without taking authority. The decision remains with the leader."
    }
];

const ThreeDimensions: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy">
            <div className="container-editorial">
                <div className="mb-24 text-center">
                    <span className="label-tech mb-8 inline-block">THE SYSTEM IN PRACTICE</span>
                    <h2 className="mb-10 lg:text-[4rem]">
                        Three dimensions that shape<br />
                        <span className="text-brand-gold italic font-cinzel opacity-90">every real decision.</span>
                    </h2>
                    <p className="max-w-3xl mx-auto">
                        Each dimension can stand alone, but the system is built to integrate them when
                        stakes are high.
                    </p>
                </div>

                <div className="space-y-6">
                    {dimensions.map((dim) => (
                        <div key={dim.id} className="group frosted-glass rounded-[2rem] p-10 md:p-12 transition-all duration-1000 hover:bg-white/[0.04] hover:border-brand-gold/30 hover:-translate-y-1">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                {/* Left Side: Number, Title, Label */}
                                <div className="lg:col-span-4">
                                    <div className="flex items-center gap-6 mb-10">
                                        <span className="text-3xl font-technical text-brand-gold/40">0{dim.id}</span>
                                        <div className="accent-divider" />
                                    </div>
                                    <h3 className="text-2xl md:text-[2rem] font-technical uppercase tracking-tight mb-4 text-white group-hover:text-brand-gold transition-colors duration-500 leading-none">
                                        {dim.title}
                                    </h3>
                                    <p className="label-tech lowercase tracking-widest">
                                        {dim.label}
                                    </p>
                                </div>

                                {/* Middle: Main Text and Focus Areas */}
                                <div className="lg:col-span-5 lg:border-l lg:border-brand-gold/10 lg:pl-12">
                                    <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-12">
                                        {dim.mainText}
                                    </p>

                                    <div className="space-y-6">
                                        <span className="text-white/30 font-technical text-[0.55rem] uppercase tracking-[0.4em] block">FOCUS AREAS:</span>
                                        <ul className="space-y-4">
                                            {dim.focusAreas.map((area, i) => (
                                                <li key={i} className="flex gap-4 text-white/40 group-hover:text-white/60 transition-colors items-start">
                                                    <span className="text-brand-gold text-lg -mt-1 opacity-40 font-technical">›</span>
                                                    <span className="text-sm md:text-[0.95rem] font-light leading-snug">{area}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Side: Key Insight */}
                                <div className="lg:col-span-3 lg:border-l lg:border-brand-gold/10 lg:pl-12">
                                    <span className="text-white/30 font-technical text-[0.55rem] uppercase tracking-[0.4em] block mb-6">KEY INSIGHT</span>
                                    <p className="text-white/50 text-base font-light leading-relaxed group-hover:text-white/80 transition-colors">
                                        {dim.insight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeDimensions;
