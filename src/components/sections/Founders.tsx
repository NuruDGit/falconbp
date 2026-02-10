import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import joelImage from '@/assets/images/joel-arcus.png';
import quincyImage from '@/assets/images/quincy-beukes.png';

const founders = [
    {
        name: "Joel Arcus",
        role: "Co-Founder & Managing Partner",
        image: joelImage,
        bio: "Joel's work focuses on sharpening judgement, reducing distortion and helping leaders think clearly under pressure.",
        linkedin: "https://www.linkedin.com/in/joelarcus/",
        email: "joel@falconbp.com",
        details: [
            "Decision-bound coaching",
            "Clarity under pressure",
            "Authority preserved"
        ]
    },
    {
        name: "Quincy Beukes",
        role: "Co-Founder & Research Partner",
        image: quincyImage,
        bio: "Quincy's work focuses on transforming complex external signal into decision-grade clarity at the point of commitment.",
        linkedin: "https://www.linkedin.com/in/quincy-jc-beukes/",
        email: "quincy@falconbp.com",
        details: [
            "Decision-led research",
            "Signal integration",
            "Trade-off clarity"
        ]
    }
];

const Founders: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy">
            <div className="container-editorial">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="label-tech mb-4">THE PARTNERSHIP</span>
                    <h2 className="mb-6">A partnership built for consequence.</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {founders.map((founder, index) => (
                        <div key={index} className="group relative frosted-glass hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-1000 rounded-[2.5rem] overflow-hidden">
                            <div className="relative aspect-square overflow-hidden bg-brand-navy">
                                <Image src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-navy/20 to-brand-navy/70" />

                                <div className="absolute bottom-4 left-8 right-8">
                                    <h3 className="text-3xl font-technical mb-2 text-white drop-shadow-sm leading-none">{founder.name}</h3>
                                    <p className="label-tech !opacity-100">{founder.role}</p>
                                </div>
                            </div>

                            <div className="p-8 space-y-4">
                                <p className="text-white/75 text-base md:text-lg font-light leading-relaxed">
                                    {founder.bio}
                                </p>

                                <div className="space-y-3">
                                    {founder.details.map((detail, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                                            <span className="text-white/60 text-sm font-light leading-relaxed">{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 border border-white/15 rounded-full hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300">
                                        <Linkedin className="w-4.5 h-4.5" />
                                    </a>
                                    <a href={`mailto:${founder.email}`} className="p-2.5 bg-white/10 border border-white/15 rounded-full hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300">
                                        <Mail className="w-4.5 h-4.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
