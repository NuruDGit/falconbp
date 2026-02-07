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
                        <span className="text-white">Engagement</span><br />
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
                        Last updated: February 7, 2026
                    </div>

                    <p className="text-white/60 font-light leading-relaxed">
                        These Terms of Engagement govern all professional interactions between FalconBridge Partners
                        FZ-LLC ("FalconBridge", "we", "us", "our") and any individual or organisation ("Client", "you",
                        "your") seeking or receiving advisory, coaching or research services.
                    </p>
                    <p className="text-white/60 font-light leading-relaxed">
                        FalconBridge operates exclusively as a private strategic advisory firm providing decision
                        support in moments of consequence.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">1. Nature of our services</h2>
                        <p className="text-white/60 font-light leading-relaxed">FalconBridge provides:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>decision support</li>
                            <li>executive and leadership advisory</li>
                            <li>decision-led research</li>
                            <li>coaching within a structured decision system</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">Our work is designed to:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>inform judgement</li>
                            <li>challenge assumptions</li>
                            <li>strengthen decision quality</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">We do not:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>make decisions on behalf of clients</li>
                            <li>assume operational, managerial or fiduciary responsibility</li>
                            <li>act as an executive, officer, director or agent of the client</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            Authority and accountability remain entirely with the client.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">2. No outsourcing of leadership</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge is not engaged to replace leadership, governance, or management functions.
                            Our role is to support decision-makers while preserving their authority, ownership and
                            responsibility for outcomes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">3. Engagement formation</h2>
                        <p className="text-white/60 font-light leading-relaxed">An engagement is formed only when:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>a written engagement letter or agreement has been executed by both parties; or</li>
                            <li>FalconBridge confirms acceptance of a defined engagement in writing.</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            Informal discussions, exploratory conversations or sample research access do not constitute
                            an engagement.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">4. Scope of work</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Each engagement is governed by a clearly defined scope covering the decision context,
                            objectives, deliverables, timeframes, and professional boundaries. FalconBridge does not
                            provide open-ended or standing advisory without an agreed scope. Any extension of scope
                            must be agreed in writing.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">5. Decision-led research and advisory boundaries</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Research delivered by FalconBridge is decision-led, context-specific, and designed to
                            support a defined decision frame. Research outputs are not intended to be relied upon
                            outside the specific decision context for which they were produced.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">6. No professional substitutions</h2>
                        <p className="text-white/60 font-light leading-relaxed">FalconBridge does not provide:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>legal advice</li>
                            <li>tax advice</li>
                            <li>accounting advice</li>
                            <li>regulated financial advice</li>
                            <li>medical or psychological services</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            Clients remain responsible for obtaining appropriate professional advice from licensed or
                            regulated practitioners where required.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">7. Confidentiality</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Confidentiality is a foundational condition of all FalconBridge engagements. Unless
                            otherwise agreed in writing: client identities are not disclosed, engagement details are
                            not referenced publicly, and outputs are not used as marketing material. Both parties agree
                            to maintain the confidentiality of all non-public information exchanged during the
                            engagement. Separate non-disclosure agreements may apply.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">8. Controlled access to research and materials</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Any sample research, illustrative material or gated content provided remains the property
                            of FalconBridge, is shared solely for evaluation or professional review, and may not be
                            redistributed, published, or disclosed without written permission. FalconBridge reserves
                            the right to withdraw access at any time.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">9. Intellectual property</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Unless otherwise agreed in writing, FalconBridge retains intellectual property rights in
                            its frameworks, methodologies, systems and tools, including the FalconBridge Decision
                            System. Clients are granted a non-exclusive, non-transferable licence to use engagement
                            outputs for their internal decision-making purposes only.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">10. Fees and payment</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Fees, billing schedules and payment terms are defined in the engagement agreement. Unless
                            otherwise stated, invoices are payable within the stated payment period, fees are exclusive
                            of applicable taxes or government charges, and FalconBridge reserves the right to suspend
                            work in the event of overdue payment.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">11. No guarantees</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Decision-making involves uncertainty. FalconBridge does not guarantee business outcomes,
                            financial performance, operational results, market behaviour, or regulatory outcomes. Our
                            obligation is to provide disciplined, professional decision support - not to assure outcomes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">12. Limitation of responsibility</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge is not responsible for decisions made by the client, actions taken by the
                            client or third parties, implementation failures, or operational, legal or financial
                            consequences arising from decisions. Clients retain full responsibility for execution and
                            governance.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">13. Termination</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Either party may terminate an engagement in accordance with the termination provisions
                            contained in the engagement agreement. Upon termination, outstanding fees remain payable
                            and confidentiality obligations continue indefinitely.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">14. Non-solicitation</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            During an engagement and for a defined period thereafter (as specified in the engagement
                            agreement), neither party shall solicit for employment the personnel directly involved in
                            the engagement without prior written consent.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">15. Data protection</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Personal information is processed in accordance with our Privacy Policy.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">16. Referral and introduction model</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge operates on a private, referral and introduction basis. We reserve the right
                            to decline engagements where the decision context is not suitable for our model,
                            confidentiality or professional boundaries cannot be maintained, or conflicts of interest
                            may arise.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">17. Governing law</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            These Terms of Engagement are governed by the laws of the United Arab Emirates. The courts
                            of the United Arab Emirates shall have exclusive jurisdiction.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">18. Contact</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            For engagement enquiries:
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge Partners FZ-LLC
                            <br />
                            Email: <span className="text-white/80">engagements@falconbp.com</span>
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Website: <span className="text-white/80">www.falconbp.com</span>
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge provides clarity for leaders making high-stakes decisions. Authority remains
                            with those who must own the outcome.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}
