import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
    return (
        <main className="bg-brand-navy min-h-screen pt-40 pb-32">
            <div className="max-w-300 mx-auto px-6">
                <header className="max-w-3xl mb-32">
                    <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">WHO WE ARE</span>
                    <h1 className="text-5xl md:text-6xl font-technical mb-10 leading-tight">A firm built for consequence.</h1>
                    <p className="text-white/60 text-xl font-light leading-relaxed">
                        FalconBridge Partners exists to support leaders at moments that define their next stage of growth—when capital is committed, timing matters, and responsibility cannot be delegated.
                    </p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
                    <div className="space-y-12">
                        <h2 className="text-3xl font-technical border-l-2 border-brand-gold pl-6">The partnership</h2>
                        <p className="text-white/70 font-light leading-relaxed text-lg">
                            Joel Arcus is Co-Founder and Managing Partner. His work focuses on sharpening judgement, reducing distortion, and helping leaders think clearly under pressure.
                        </p>
                        <p className="text-white/70 font-light leading-relaxed text-lg">
                            Quincy Beukes is Co-Founder and Research Partner. His work focuses on transforming complex external signal into decision-grade clarity that can be used at the point of commitment.
                        </p>
                        <p className="text-white/70 font-light leading-relaxed text-lg">
                            Together, we apply the FalconBridge Decision System™ to decisions that matter, without diluting authority or adding noise.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="bg-white/2 border border-white/5 p-12 rounded-3xl relative z-10">
                            <Quote className="w-12 h-12 text-brand-gold/20 mb-8" />
                            <p className="text-2xl font-technical italic text-white/80 leading-relaxed mb-8">
                                "We operate quietly. There is no performance, no theatre, and no unnecessary process."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-8 bg-brand-gold/40" />
                                <span className="text-xs font-technical uppercase tracking-widest text-brand-gold">THE FALCONBRIDGE STANCE</span>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/5 blur-[120px] -z-1" />
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                    <div className="p-10 bg-white/2 border border-white/5 rounded-3xl">
                        <h3 className="text-xl font-technical mb-6">Trust and discretion</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Our clients operate in competitive and sensitive environments. Discretion is essential. We do not publish client names, showcase public case studies, or discuss engagements outside strict boundaries.
                        </p>
                        <p className="text-white/80 font-light italic mt-6">Trust is not a by-product of our work. It is the product.</p>
                    </div>
                    <div className="p-10 bg-white/2 border border-white/5 rounded-3xl">
                        <h3 className="text-xl font-technical mb-6">Operating environment</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            We are built for environments where reputational risk is real, decision cycles are compressed, and the cost of indecision is often invisible until it becomes irreversible.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="p-12 bg-white/2 border border-white/5 rounded-3xl">
                        <p className="text-2xl font-technical text-brand-gold mb-8 italic">Who we are NOT</p>
                        <ul className="space-y-3">
                            {[
                                "Not a consultancy delivering recommendations",
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

                    <div className="p-12 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl">
                        <p className="text-2xl font-technical text-brand-gold mb-8 italic">What we do</p>
                        <p className="text-white/80 font-light leading-relaxed">
                            We strengthen the thinking that precedes commitment so leaders can decide deliberately, own the decision fully, and defend it with confidence.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
