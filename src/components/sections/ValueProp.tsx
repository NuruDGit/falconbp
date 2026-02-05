import React from 'react';
import { Zap, Shield, Microscope, Rocket, Target } from 'lucide-react';
const props = [
    {
        icon: Target,
        title: "Clarity without loss of authority",
        desc: "We inform, challenge, and support—but the decision remains yours."
    },
    {
        icon: Microscope,
        title: "Integration over fragmentation",
        desc: "Internal judgement, external signal, and execution reality are bound together around one decision."
    },
    {
        icon: Zap,
        title: "Speed without sacrificing rigour",
        desc: "We help leaders decide responsibly under pressure, not wait for impossible certainty."
    },
    {
        icon: Shield,
        title: "Discretion as a baseline",
        desc: "Client identities are not disclosed and engagements remain within strict boundaries."
    },
    {
        icon: Rocket,
        title: "Decisions that can be owned",
        desc: "Clarity that can be defended to boards, investors, and stakeholders."
    }
];

const ValueProp: React.FC = () => {
    return (
        <section className="py-32 bg-brand-navy">
            <div className="max-w-300 mx-auto px-6">
                <div className="max-w-3xl mb-20">
                    <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">THE EDGE</span>
                    <h2 className="text-4xl md:text-5xl font-technical leading-tight mb-6">
                        Designed for decisions that<br />cannot afford mistakes.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {props.map((prop, index) => (
                        <div key={index} className="group p-10 bg-white/2 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 rounded-3xl hover:bg-white/3">
                            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold/20 transition-all">
                                <prop.icon className="w-6 h-6 text-brand-gold" />
                            </div>
                            <h3 className="text-xl font-technical mb-4 group-hover:text-brand-gold transition-colors">{prop.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                {prop.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ValueProp;
