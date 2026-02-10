import React from 'react';
import Image from 'next/image';
import WorkFinalCTA from '@/components/sections/WorkFinalCTA';
import EngagementDiscipline from '@/components/sections/EngagementDiscipline';
import heroBg from '@/assets/images/c-suite-executives.png';

export default function InternalJudgementPage() {
    return (
        <div className="min-h-screen bg-brand-navy">
            <section className="relative pt-48 pb-28 overflow-hidden bg-brand-navy">
                <div className="absolute inset-0">
                    <Image src={heroBg} alt="" fill className="object-cover opacity-45" />
                    <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-brand-navy/50 to-brand-navy" />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-transparent to-brand-navy/80" />
                </div>

                <div className="max-w-300 mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="label-tech mb-8 inline-block">INTERNAL JUDGEMENT</span>
                        <h1 className="mb-8">Coaching within the FalconBridge Decision System.</h1>
                        <p className="text-white/65 text-lg md:text-xl font-light leading-relaxed">
                            Internal judgement is the foundation of every decision. We examine it with intent and discipline so clarity can be owned by the decision-maker.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <span className="label-tech">FOUNDATION</span>
                            <h2 className="mt-4">Internal judgement under pressure</h2>
                        </div>
                        <p>
                            Internal judgement is influenced by logic and experience and by pressure, identity, organisational dynamics, stakeholder expectations, personal history and fear of consequence. At senior levels, these forces often operate quietly, shaping decisions without being examined directly.
                        </p>
                        <p>
                            Within the FalconBridge Decision System, internal judgement is examined with intent and discipline. This is not introspection for its own sake and it is not therapeutic work. It is practical clarity in service of a decision that must be made.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            We work with leaders to clarify what decision is actually being made, why it matters now, what success would look like and what constraints are real rather than assumed. We surface assumptions treated as facts, identify trade-offs being avoided or deferred and reduce cognitive and emotional noise that distorts clarity under pressure.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="label-tech mb-6">THE AIM</p>
                            <p className="text-brand-gold italic font-cinzel text-xl md:text-2xl opacity-90">
                                The aim is not certainty. The aim is coherence.
                            </p>
                            <div className="mt-8 accent-divider" />
                            <p className="mt-6 text-white/60 text-sm leading-relaxed">
                                Coaching is decision support, not personal development. Authority remains with the leader.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="label-tech">WHAT COACHING IS</span>
                        <h2 className="text-pretty">What FalconBridge coaching is</h2>
                        <p>
                            FalconBridge coaching is decision-bound. It exists to strengthen judgement at moments where responsibility cannot be delegated and clarity must be owned by the decision-maker.
                        </p>
                        <p>
                            It is not coaching as personal development detached from outcome. It is not therapy. It is not a space for endless reflection. It is a disciplined environment where a leader examines what is influencing judgement so they can decide with eyes open.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            Coaching within FalconBridge is designed to do three things. First, it stabilises clarity when pressure distorts thinking. Second, it exposes internal conflict that blocks commitment. Third, it creates decisional ownership that can withstand scrutiny from boards, investors and senior stakeholders.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="label-tech mb-6">OUTCOMES</p>
                            <div className="space-y-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Clarity stabilised under pressure.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Internal conflict exposed and resolved.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-white/70 text-sm">Decisional ownership built to withstand scrutiny.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial">
                    <div className="mb-10">
                        <span className="label-tech">SESSION TYPES</span>
                        <h2 className="mt-4">Two one-hour coaching session types</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="frosted-glass rounded-3xl p-8">
                            <h3 className="text-2xl font-technical mb-3">Pre-research question clarity session</h3>
                            <p>
                                This session clarifies the question before any research is commissioned. We isolate the decision, define the constraints and articulate the question in a way that can guide research without expanding into noise.
                            </p>
                            <p className="mt-4 text-white/60">
                                A leader leaves with a clear decision frame and a clean research brief direction, even if FalconBridge is not conducting the research.
                            </p>
                        </div>
                        <div className="frosted-glass rounded-3xl p-8">
                            <h3 className="text-2xl font-technical mb-3">Post-research decision integration session</h3>
                            <p>
                                This session is for after research or external insight is available, but clarity has not yet translated into commitment. We integrate the research with internal judgement and execution reality, pressure-test options, surface sources of hesitation and reduce psychological noise.
                            </p>
                            <p className="mt-4 text-white/60">
                                A leader leaves with a committed decision, a committed decision direction, or a precise statement of what must be resolved before commitment is responsible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial">
                    <div className="mb-10">
                        <span className="label-tech">DECISION SUPPORT</span>
                        <h2 className="mt-4">Multi-session decision support</h2>
                    </div>
                    <p className="max-w-3xl">
                        Some decisions cannot responsibly be resolved in a single session. This is particularly true where reputational exposure is high, leadership credibility is on the line, board or investor pressure is present, multiple plausible options carry meaningful trade-offs, or avoidance and over-analysis are distorting clarity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <div className="frosted-glass rounded-3xl p-6">
                            <h3 className="text-xl font-technical mb-2">Four sessions</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Best for moderate complexity where clarity is present but commitment is blocked by hesitation, stakeholder pressure, or option overload.
                            </p>
                        </div>
                        <div className="frosted-glass rounded-3xl p-6">
                            <h3 className="text-xl font-technical mb-2">Six sessions</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Best for high-stakes decisions with competing stakeholder agendas, deeper internal conflict, or second-order impacts that require careful integration.
                            </p>
                        </div>
                        <div className="frosted-glass rounded-3xl p-6">
                            <h3 className="text-xl font-technical mb-2">Eight sessions</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Best for decisions embedded in wider context such as governance tension, founder transition, organisational politics, or repeated failure to commit over time.
                            </p>
                        </div>
                    </div>
                    <p className="mt-8">These packages are time-bound and decision-bound. The goal is closure, not dependency.</p>
                </div>
            </section>

            <section className="section-padding bg-brand-navy">
                <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="label-tech">BOUNDARIES</span>
                        <h2>Boundaries and engagement discipline</h2>
                        <p>
                            FalconBridge coaching happens in the room. There are no follow-ups between sessions. If a client requests follow-up support we can discuss it explicitly, but it is not part of the default offer.
                        </p>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <p>
                            This protects quality, discretion and the integrity of the coaching. It also ensures that the leader remains responsible for implementation and accountability, rather than outsourcing discipline to the coach.
                        </p>
                        <div className="frosted-glass rounded-[2rem] p-8 md:p-10">
                            <p className="text-brand-gold italic font-cinzel text-xl opacity-90">
                                The work is disciplined, time-bound and decision-led.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <EngagementDiscipline />
            <WorkFinalCTA />
        </div>
    );
}

