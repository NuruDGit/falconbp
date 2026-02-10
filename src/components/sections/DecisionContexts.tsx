import React from 'react';
import { Briefcase, Gavel, BarChart3, ShieldCheck } from 'lucide-react';

const contexts = [
    {
        icon: BarChart3,
        title: "Capital Allocation",
        desc: "Decisions that shape capital deployment, risk tolerance and long-term return."
    },
    {
        icon: Briefcase,
        title: "Strategic Direction",
        desc: "Commitments that define market posture, growth trajectory and competitive position."
    },
    {
        icon: Gavel,
        title: "Leadership Credibility",
        desc: "Moments where the decision itself affects authority, trust and reputation."
    },
    {
        icon: ShieldCheck,
        title: "Timing & Execution Capacity",
        desc: "Choices that cannot be delayed without cost and cannot be rushed without consequence."
    }
];

const DecisionContexts: React.FC = () => {
    return (
        <section className="py-32 bg-brand-navy relative overflow-hidden">
            <div className="max-w-300 mx-auto px-6">
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-technical mb-8 leading-tight">
                        Built for leaders who<br className="hidden md:block" />{" "}
                        <span className="text-brand-gold italic font-light">cannot delegate responsibility.</span>
                    </h2>
                    <p className="text-white/60 text-xl font-light leading-relaxed">
                        Our clients are accountable for outcomes, not opinions. They operate where uncertainty is costly and delay creates risk.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {contexts.map((context, index) => (
                        <div key={index} className="group p-10 bg-white/2 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 rounded-3xl hover:bg-white/3">
                            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold/20 transition-all">
                                <context.icon className="w-7 h-7 text-brand-gold" />
                            </div>
                            <h3 className="text-xl font-technical mb-4 group-hover:text-brand-gold transition-colors">{context.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                {context.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default DecisionContexts;

