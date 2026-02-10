import React from 'react';
import { Target, Search, Rocket } from 'lucide-react';

const pillars = [
    {
        id: "internal",
        icon: Target,
        title: "Internal Judgement",
        subtitle: "Decision-bound coaching",
        desc: "Clarify assumptions, trade-offs and internal noise so the decision can be made deliberately and owned fully."
    },
    {
        id: "external",
        icon: Search,
        title: "External Signal",
        subtitle: "Decision-led research",
        desc: "Research scoped to the decision frame, delivering insight that informs commitment rather than information volume."
    },
    {
        id: "execution",
        icon: Rocket,
        title: "Execution Reality",
        subtitle: "Advisory without authority",
        desc: "Test decisions against organisational reality and protect intent as execution begins."
    }
];

const ClarityFramework: React.FC = () => {
    return (
        <section className="py-32 bg-brand-navy space-y-24">
            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4">THE DECISION SYSTEM</span>
                    <h2 className="text-4xl md:text-5xl font-technical mb-8">Three dimensions of clarity.<br className="hidden md:block" />{" "}One anchored decision.</h2>
                    <p className="text-white/60 text-lg max-w-2xl font-light leading-relaxed">
                        We integrate internal judgement, external signal and execution reality to preserve authority while improving judgement.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12">
                    {pillars.map((pillar, index) => (
                        <div key={pillar.id} className="flex-1 flex flex-col group p-8 bg-white/1 border border-white/5 rounded-3xl hover:bg-white/3 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-500">
                                    <pillar.icon className="w-6 h-6 text-brand-gold" />
                                </div>
                                <div className="h-px flex-1 bg-white/10 group-hover:bg-brand-gold/30 transition-colors" />
                            </div>

                            <span className="text-xs font-technical text-brand-gold uppercase tracking-widest mb-2 opacity-60">Pillar {index + 1}</span>
                            <h3 className="text-2xl font-technical mb-2">{pillar.title}</h3>
                            <p className="text-[0.65rem] font-technical text-white/40 uppercase mb-6 tracking-widest">{pillar.subtitle}</p>
                            <p className="text-white/50 font-light leading-relaxed text-[0.95rem]">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ClarityFramework;

