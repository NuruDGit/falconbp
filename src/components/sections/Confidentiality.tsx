import React from 'react';
import Image from 'next/image';
import img1 from '@/assets/images/client-anonymity.png';
import img2 from '@/assets/images/no-public-case-studies.png';
import img3 from '@/assets/images/strict-engagement-boundaries.png';

const confidentialityPoints = [
    {
        image: img1,
        title: "We do not publish client names."
    },
    {
        image: img2,
        title: "We do not showcase case studies publicly."
    },
    {
        image: img3,
        title: "We do not discuss engagements outside strict boundaries."
    }
];

const Confidentiality: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy overflow-hidden">
            <div className="container-editorial">
                <div className="text-left space-y-6 mb-14">
                    <span className="label-tech mb-4">FOUNDATION OF TRUST</span>
                    <h2 className="mb-4">
                        Confidentiality is not a feature.
                        <br className="hidden md:block" />{" "}
                        <span className="text-brand-gold italic font-cinzel opacity-90">It is the foundation.</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                        Our clients operate in competitive, sensitive environments. Discretion is essential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {confidentialityPoints.map((point, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-3xl border border-white/5 hover:border-brand-gold/25 transition-all h-96">
                            <Image
                                src={point.image}
                                alt={point.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-brand-navy/95" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-white text-base leading-relaxed font-light">
                                    {point.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-14">
                    <div className="accent-divider" />
                    <p className="text-xl md:text-2xl font-technical text-brand-gold italic">Trust is the product.</p>
                    <div className="accent-divider" />
                </div>
            </div>
        </section>
    );
};

export default Confidentiality;
