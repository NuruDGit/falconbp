import React from 'react';
import { ChevronRight } from 'lucide-react';

const Research: React.FC = () => {
    return (
        <main className="bg-brand-navy min-h-screen pt-40 pb-32">
            <div className="max-w-300 mx-auto px-6">
                <header className="max-w-3xl mb-24">
                    <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">CAPABILITIES</span>
                    <h1 className="text-5xl md:text-6xl font-technical mb-10 leading-tight">Decision support, not outsourced authority.</h1>
                    <p className="text-white/60 text-xl font-light leading-relaxed">
                        The FalconBridge Decision System™ integrates internal judgement, external signal, and execution reality to strengthen decisions under consequence.
                    </p>
                </header>

                <div className="space-y-12">
                    <section className="p-12 bg-white/2 border border-white/5 rounded-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-brand-gold font-technical text-xs uppercase tracking-widest">Internal Judgement</span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <h2 className="text-3xl font-technical mb-6">Coaching within the Decision System™</h2>
                        <p className="text-white/60 font-light leading-relaxed mb-8">
                            Internal judgement is examined with intent and discipline. This is not therapy or personal development—it is practical clarity in service of a decision that must be made.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Clarify the decision, constraints, and trade-offs",
                                "Expose assumptions treated as facts",
                                "Stabilise clarity when pressure distorts thinking"
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 text-white/70 font-light">
                                    <ChevronRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="p-12 bg-white/2 border border-white/5 rounded-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-brand-gold font-technical text-xs uppercase tracking-widest">External Signal</span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <h2 className="text-3xl font-technical mb-6">Research as a core capability</h2>
                        <p className="text-white/60 font-light leading-relaxed mb-8">
                            Research is decision-led, not topic-led. We define what must be known to decide responsibly, then structure signal so it can be used at the point of commitment.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Test assumptions that shape the decision",
                                "Expose blind spots and second-order consequences",
                                "Clarify trade-offs before commitment"
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 text-white/70 font-light">
                                    <ChevronRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="p-12 bg-white/2 border border-white/5 rounded-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-brand-gold font-technical text-xs uppercase tracking-widest">Execution Reality</span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <h2 className="text-3xl font-technical mb-6">Advisory without taking authority</h2>
                        <p className="text-white/60 font-light leading-relaxed mb-8">
                            Execution reality is where good decisions succeed or fail. We test decisions against organisational dynamics, pace, and second-order effects before commitment and during execution.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Pressure-test options against organisational reality",
                                "Anticipate unintended consequences",
                                "Protect decision intent during implementation"
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 text-white/70 font-light">
                                    <ChevronRight className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Research;
