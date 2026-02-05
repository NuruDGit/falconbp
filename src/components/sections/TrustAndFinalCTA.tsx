import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import clientAnonymityImg from '@/assets/images/client-anonymity.png';
import noCaseStudiesImg from '@/assets/images/no-public-case-studies.png';
import strictBoundariesImg from '@/assets/images/strict-engagement-boundaries.png';
import boardroomImage from '@/assets/images/falcon-bridge-boardroom.png';

const trustPoints = [
    {
        image: clientAnonymityImg,
        title: "We do not publish client names.",
    },
    {
        image: noCaseStudiesImg,
        title: "We do not showcase case studies publicly.",
    },
    {
        image: strictBoundariesImg,
        title: "We do not discuss engagements outside strict boundaries.",
    }
];

const TrustAndFinalCTA: React.FC = () => {
    return (
        <section className="bg-brand-navy">
            {/* Confidentiality & Trust Section */}
            <div className="py-32">
                <div className="max-w-300 mx-auto px-6">
                    <div className="text-left space-y-6 mb-14">
                        <span className="text-[0.7rem] font-technical text-brand-gold uppercase tracking-[0.25em]">Foundation of Trust</span>
                        <h2 className="text-4xl md:text-5xl font-technical text-white leading-tight max-w-4xl">
                            Confidentiality is not a feature.
                            <br />
                            <span className="text-brand-gold italic font-light">It is the foundation.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                            Our clients operate in competitive, sensitive environments. Discretion is essential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trustPoints.map((point, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-3xl border border-white/5 hover:border-brand-gold/25 transition-all h-96">
                                <img src={point.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-brand-navy/95" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="text-white text-base leading-relaxed font-light">{point.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mt-14">
                        <div className="h-px flex-1 bg-white/5" />
                        <p className="text-xl md:text-2xl font-technical text-brand-gold italic">Trust is the product.</p>
                        <div className="h-px flex-1 bg-white/5" />
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="py-40 relative overflow-hidden">
                {/* Background Image with Blending */}
                <div className="absolute inset-0 z-0">
                    <img src={boardroomImage} alt="" className="w-full h-full object-cover opacity-65" />
                    <div className="absolute inset-0 bg-linear-to-b from-brand-navy/80 via-brand-navy/30 to-brand-navy/80" />
                </div>

                <div className="max-w-300 mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-technical mb-10 text-white leading-[1.1] max-w-4xl mx-auto">
                        What decision are you actually being asked to make?
                    </h2>
                    <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
                        When that question feels harder than it should, clarity is already being compromised.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <Button href="/contact" variant="primary" size="lg" icon={ArrowRight}>
                            Request a Private Clarity Conversation
                        </Button>
                        <div className="space-y-2">
                            <p className="text-white/40 text-sm">
                                A professional exchange between peers. Not a sales discussion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustAndFinalCTA;
