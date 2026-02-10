import React from 'react';
import Image from 'next/image';
import heroBg from '@/assets/images/how-we-work.png';

export default function TermsOfEngagementPage() {
    return (
        <section className="relative pt-48 pb-24 overflow-hidden bg-brand-navy">
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt=""
                    fill
                    className="object-cover opacity-40 grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-brand-navy/40 to-brand-navy" />
                <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-transparent to-brand-navy opacity-80" />
            </div>

            <div className="max-w-300 mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-brand-gold font-technical text-[0.6rem] tracking-[0.4em] uppercase mb-10 block opacity-80">
                        TERMS OF ENGAGEMENT
                    </span>
                    <h1 className="text-5xl md:text-7xl font-technical mb-12 leading-[1.1] tracking-tight">
                        <span className="text-white">Engagement</span><br className="hidden md:block" />{" "}
                        <span className="text-brand-gold italic font-cinzel opacity-90">and boundaries.</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                            These Terms of Engagement govern professional interactions between FalconBridge Partners
                            and any individual or organisation seeking or receiving advisory, coaching or research services.
                        </p>
                    </div>
                </div>

                <div className="space-y-10 max-w-3xl text-left mx-auto mt-16">
                    <div className="text-white/50 text-sm font-light">
                        FalconBridge Partners FZ-LLC
                        <span className="mx-2 text-white/30">•</span>
                        Last updated: February 10, 2026
                    </div>

                    <p className="text-white/60 font-light leading-relaxed">
                        FalconBridge Partners provides decision support services to founders, executives, boards and
                        investors operating in high-pressure environments. Our services include business research,
                        executive coaching and strategic advisory.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">1. Nature of Services</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            All services provided by FalconBridge Partners are advisory and supportive in nature. We
                            do not act as decision-makers, fiduciaries or authorised representatives on behalf of clients.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            The responsibility for all decisions, actions and outcomes remains entirely with the client at all times.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Our role is to support clarity, judgement and execution through structured insight, reflection and advisory input.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">2. Decision Responsibility</h2>
                        <p className="text-white/60 font-light leading-relaxed">Clients acknowledge that:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>FalconBridge Partners does not make decisions on their behalf</li>
                            <li>All decisions are taken by the client using their own judgement</li>
                            <li>Any action taken following our work is at the client's sole discretion</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            We support decision quality. We do not assume decision ownership.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">3. Research Scope</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Any research provided is based on secondary information, publicly available sources and
                            professional synthesis. Research outputs are not guarantees of outcome and should not be
                            treated as exhaustive, predictive or primary data collection.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Research is intended to inform thinking, not replace due diligence, professional advice or independent verification.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">4. Coaching Scope</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Executive coaching services are professional development services only. Coaching is not therapy,
                            counselling, medical treatment, legal advice or financial advice.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Clients remain responsible for their mental, emotional and physical wellbeing and for seeking
                            appropriate professional support where required.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">5. Advisory Scope</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Strategic advisory services support problem structuring, option evaluation and execution thinking.
                            FalconBridge Partners does not assume responsibility for implementation unless explicitly agreed in writing.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">6. Limitation of Liability</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            To the fullest extent permitted by law, FalconBridge Partners shall not be liable for any loss,
                            damage or outcome arising directly or indirectly from decisions made by the client.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            All services are provided on a best-efforts basis without warranty of specific outcomes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">7. Confidentiality</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            All client engagements are treated as confidential. Information shared is used solely for the
                            purposes of service delivery unless disclosure is required by law.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">8. Governing Law</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            These Terms are governed by the laws of the United Arab Emirates.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}

