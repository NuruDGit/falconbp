import React from 'react';

const moments = [
    {
        id: "I",
        label: "Pre-research decision clarity",
        desc: "Clarifying the decision question before any research is commissioned. Defining constraints and isolating the question."
    },
    {
        id: "II",
        label: "Post-research decision integration",
        desc: "Integrating research with internal judgement and organizational reality to convert insight into commitment."
    },
    {
        id: "III",
        label: "Multi-session decision support",
        desc: "For high-stakes decisions with reputational exposure or deep internal conflict that require sustained integration."
    }
];

const CoachingMoments: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy">
            <div className="container-editorial">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="lg:sticky lg:top-40 max-w-xl">
                        <span className="label-tech mb-6">COACHING</span>
                        <h2 className="mb-6">
                            Internal judgement<br />
                            <span className="text-brand-gold italic font-cinzel opacity-90">in the room.</span>
                        </h2>
                        <div className="space-y-6 max-w-lg">
                            <p>
                                Internal judgement is the foundation of every decision, influenced by logic, experience, identity, and fear of consequence at senior levels.
                            </p>
                            <div className="pt-4">
                                <p className="text-brand-gold italic font-cinzel text-xl md:text-2xl opacity-90">
                                    Strengthening judgement, not replacing it.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5 relative">
                        <h3 className="label-tech mb-10">Coaching interaction points</h3>
                        {moments.map((moment) => (
                            <div key={moment.id} className="group p-10 frosted-glass rounded-[2rem] hover:border-brand-gold/30 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-1000">
                                <div className="flex gap-6 items-center mb-6">
                                    <span className="text-brand-gold/40 font-technical text-xl group-hover:text-brand-gold transition-colors duration-500">Moment {moment.id}</span>
                                    <div className="accent-divider" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-technical uppercase tracking-tight mb-4 group-hover:text-brand-gold transition-colors duration-500">{moment.label}</h4>
                                <p className="text-white/40 text-base font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">{moment.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoachingMoments;
