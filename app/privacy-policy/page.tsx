import React from 'react';
import Image from 'next/image';
import heroBg from '@/assets/images/how-we-work.png';

export default function PrivacyPolicyPage() {
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
                    <span className="text-brand-gold font-technical text-[0.6rem] tracking-[0.4em] uppercase mb-10 block opacity-80">PRIVACY POLICY</span>
                    <h1 className="text-5xl md:text-7xl font-technical mb-12 leading-[1.1] tracking-tight">
                        <span className="text-white">Privacy and</span><br className="hidden md:block" />{" "}
                        <span className="text-brand-gold italic font-cinzel opacity-90">discretion.</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                            FalconBridge Partners respects the privacy and confidentiality of all visitors and clients.
                            This policy explains how we collect, use and protect personal information.
                        </p>
                    </div>
                </div>

                <div className="space-y-10 max-w-3xl text-left mx-auto mt-16">
                    <div className="text-white/50 text-sm font-light">
                        FalconBridge Partners FZ-LLC
                        <span className="mx-2 text-white/30">•</span>
                        Last updated: February 10, 2026
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">1. Information We Collect</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            We may collect limited personal information including name, email address and any information
                            voluntarily shared during enquiries or engagements.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            We do not collect unnecessary data and we do not engage in behavioural profiling or data monetisation.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">2. How Information Is Used</h2>
                        <p className="text-white/60 font-light leading-relaxed">Information is used solely for:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>Responding to enquiries</li>
                            <li>Delivering agreed services</li>
                            <li>Maintaining professional communication</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            We do not sell, rent or trade personal information.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">3. Confidentiality and Discretion</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge Partners operates on a high-discretion, low-volume engagement model. Client
                            information is accessed only by the partners directly involved in service delivery.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Confidentiality is a baseline expectation, not an add-on.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">4. Use of Technology and AI</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            We use AI-assisted tools to support research and synthesis. All outputs are human-reviewed,
                            curated and contextualised.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Client data is not used to train AI models. Sensitive or identifying information is not
                            uploaded to external systems where avoidable.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Technology is used to accelerate insight, not replace judgement.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">5. Data Security</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Reasonable technical and organisational measures are in place to protect information from
                            unauthorised access, misuse or disclosure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">6. Data Retention</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Information is retained only for as long as necessary to fulfil its purpose or meet legal requirements.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">7. Your Rights</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            You may request access to or deletion of your personal information by contacting us directly.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}
