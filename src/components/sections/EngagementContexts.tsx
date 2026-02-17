import React from 'react';

const contexts = [
    'When external signal conflicts with internal conviction and a decision still must be made.',
    'When a board or investor group needs a decision that is defensible, not just plausible.',
    'When reputational downside is asymmetric and second-order effects matter.',
    'When execution capacity is constrained and trade-offs cannot be avoided.'
];

const EngagementContexts: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy">
            <div className="container-editorial">
                <div className="max-w-3xl mb-14">
                    <span className="label-tech mb-4">ENGAGEMENT CONTEXTS</span>
                    <h2 className="mb-6">When leaders bring FalconBridge in.</h2>
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                        We are usually engaged when the decision is irreversible, the timeline is compressed and the signal is noisy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contexts.map((context, index) => (
                        <div key={index} className="frosted-glass rounded-3xl p-8 md:p-10">
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 shrink-0" />
                                <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
                                    {context}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-white/50 text-base md:text-lg font-light leading-relaxed">
                    We do not publish client names. We describe the decision environment.
                </p>
            </div>
        </section>
    );
};

export default EngagementContexts;
