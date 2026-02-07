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
                        <span className="text-white">Privacy and</span><br />
                        <span className="text-brand-gold italic font-cinzel opacity-90">discretion.</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                        FalconBridge Partners operates with strict confidentiality. This policy outlines how we
                        collect, use, and protect information shared with us through this site.
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
                        FalconBridge Partners ("FalconBridge", "we", "our", "us") is committed to protecting the
                        privacy, confidentiality, and security of personal information entrusted to us.
                    </p>
                    <p className="text-white/60 font-light leading-relaxed">
                        This Privacy Policy explains how we collect, use, store and protect personal data when you
                        visit our website, request a conversation, request access to sample research, or otherwise
                        interact with us.
                    </p>
                    <p className="text-white/60 font-light leading-relaxed">
                        Our approach to data protection reflects the same principles that guide our work:
                        discretion, discipline and accountability.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">1. Scope</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            This Privacy Policy applies to the following groups:
                        </p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>visitors to the FalconBridge website</li>
                            <li>individuals who submit enquiry or request forms</li>
                            <li>individuals who request access to gated or sample research</li>
                            <li>professional contacts who communicate with us electronically</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            This policy does not replace any confidentiality or data protection terms contained in
                            engagement agreements or NDAs.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">2. Information we collect</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            We collect only information that is necessary to support professional engagement and
                            controlled access.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">This may include:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>Name</li>
                            <li>Organisation name</li>
                            <li>Job title or role</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Reason for contact or request</li>
                            <li>Any information you choose to include in a message or request</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            When requesting gated research or sample material, we may also request:
                        </p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>professional context relevant to the request</li>
                            <li>intended use of the material</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">Information collected automatically:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>IP address</li>
                            <li>device and browser type</li>
                            <li>pages viewed and navigation activity</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            This information is used only to maintain performance, security and reliability of the
                            website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">3. How we use your information</h2>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>responding to enquiries and conversation requests</li>
                            <li>evaluating and processing requests for gated research access</li>
                            <li>maintaining professional correspondence</li>
                            <li>managing security, integrity and availability of our systems</li>
                            <li>complying with legal and regulatory obligations</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            We do not use personal information for mass marketing, advertising networks or data
                            profiling.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">4. Gated research access and controlled disclosure</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Access to any sample or illustrative research material is intentionally controlled.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Information submitted through research request forms is used solely to:
                        </p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>evaluate suitability for access</li>
                            <li>confirm professional relevance</li>
                            <li>maintain audit and confidentiality records</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            Granting access to sample research is entirely at FalconBridge's discretion and does not
                            create a client relationship.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">5. Legal basis for processing</h2>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>legitimate professional interest in responding to and managing enquiries</li>
                            <li>steps taken at your request prior to entering into a professional relationship</li>
                            <li>compliance with applicable legal obligations</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">6. Confidentiality and disclosure of information</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            We do not sell, rent, or trade personal information.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">Information may be disclosed only:</p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>to trusted service providers supporting secure website operation and communications</li>
                            <li>where required by applicable law or regulatory authority</li>
                            <li>where necessary to protect the rights, safety, or integrity of FalconBridge, its partners or stakeholders</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            All third-party service providers are contractually required to apply appropriate
                            confidentiality and security controls.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">7. International data transfers</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge operates internationally. Personal information may be processed or stored in
                            jurisdictions outside your country of residence where required for secure operations.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Appropriate technical and contractual safeguards are applied to protect information during
                            any cross-border processing.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">8. Data security</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            We implement organisational and technical safeguards designed to protect personal
                            information against unauthorised access, disclosure, alteration, and loss.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Access to personal information is restricted to authorised personnel and handled under
                            strict confidentiality standards.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">9. Data retention</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            We retain personal information only for as long as necessary to fulfil the purpose for
                            which it was collected, meet legal, regulatory, and professional record-keeping obligations,
                            and maintain appropriate audit and security controls.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Where information is no longer required, it is securely deleted or anonymised.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">10. Your rights</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Subject to applicable law, you may have the right to:
                        </p>
                        <ul className="space-y-3 text-white/60 font-light leading-relaxed list-disc pl-5">
                            <li>request access to personal information we hold about you</li>
                            <li>request correction of inaccurate or incomplete information</li>
                            <li>request deletion of your information where legally permissible</li>
                            <li>object to or restrict certain processing activities</li>
                        </ul>
                        <p className="text-white/60 font-light leading-relaxed">
                            Requests may be submitted using the contact details below.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">11. Cookies and similar technologies</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            Our website uses limited, essential cookies and technical mechanisms necessary for site
                            functionality, performance monitoring, and security. We do not deploy behavioural
                            advertising or third-party marketing trackers.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">12. Children's information</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge services and content are intended exclusively for professionals. We do not
                            knowingly collect personal information from individuals under the age of 18.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">13. Changes to this policy</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect operational, legal, or
                            regulatory developments. The updated version will be published on this page with the
                            revised date.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-technical text-white">14. Contact</h2>
                        <p className="text-white/60 font-light leading-relaxed">
                            For privacy-related enquiries or data requests, please contact:
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            FalconBridge Partners FZ-LLC
                            <br />
                            Email: <span className="text-white/80">privacy@falconbp.com</span>
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            Website: <span className="text-white/80">www.falconbp.com</span>
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            All enquiries are handled discreetly and in line with our confidentiality standards.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed">
                            All engagements and communications with FalconBridge remain confidential and are subject to
                            strict professional boundaries.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}
