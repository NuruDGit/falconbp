import React from 'react';
import Founders from '@/components/sections/Founders';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-navy">
            <section className="section-padding">
                <div className="container-editorial">
                    <div className="max-w-4xl">
                        <span className="label-tech mb-6">ABOUT US</span>
                        <h1 className="mb-8">A firm built for consequence.</h1>
                        <p className="text-xl md:text-2xl font-light leading-relaxed">
                            FalconBridge Partners was founded to support leaders at moments that define their next
                            stage of growth, when capital is committed, timing matters, and responsibility cannot be
                            delegated.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7 frosted-glass rounded-[2.5rem] p-10 md:p-12 hover:border-brand-gold/25 transition-all duration-700">
                            <span className="label-tech mb-6 text-brand-gold">Our Purpose</span>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-white/70">
                                We operate quietly. There is no performance, no theatre, and no unnecessary process.
                                Conversations are direct, respectful, and grounded in consequence.
                            </p>
                        </div>
                        <div className="lg:col-span-5 frosted-glass rounded-[2.5rem] p-10 md:p-12 hover:border-brand-gold/25 transition-all duration-700">
                            <span className="label-tech mb-6 text-brand-gold">How We Think</span>
                            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                                We preserve authority while improving judgement. The decision stays with the leader.
                                The work exists to sharpen thinking, not to replace it.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4 frosted-glass rounded-[2.5rem] p-10 md:p-12 hover:border-brand-gold/25 transition-all duration-700">
                            <span className="label-tech mb-6 text-brand-gold">The Work</span>
                            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                                We integrate internal judgement, external signal, and execution reality around a
                                specific decision. This work is delivered through the FalconBridge Decision System (TM).
                            </p>
                        </div>
                        <div className="lg:col-span-4 frosted-glass rounded-[2.5rem] p-10 md:p-12 hover:border-brand-gold/25 transition-all duration-700">
                            <span className="label-tech mb-6 text-brand-gold">Where We Operate</span>
                            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                                We are built for environments where reputational risk is real, decision cycles are
                                compressed, and the cost of indecision becomes irreversible.
                            </p>
                        </div>
                        <div className="lg:col-span-4 frosted-glass rounded-[2.5rem] p-10 md:p-12 hover:border-brand-gold/25 transition-all duration-700">
                            <span className="label-tech mb-6 text-brand-gold">Who We Serve</span>
                            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                                We work with CEOs and founders in competitive, sensitive environments where discretion
                                is essential and decisions carry real consequence.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 frosted-glass rounded-[2.5rem] p-10 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            <div className="lg:col-span-7">
                                <span className="label-tech mb-6 text-brand-gold">Trust and Discretion</span>
                                <p className="text-white/70 text-lg font-light leading-relaxed">
                                    Our clients operate in competitive and sensitive environments. Discretion is
                                    essential. We do not publish client names. We do not showcase public case studies.
                                    We do not discuss engagements outside strict boundaries.
                                </p>
                            </div>
                            <div className="lg:col-span-5 flex items-center">
                                <p className="text-brand-gold italic font-cinzel text-xl md:text-2xl opacity-90">
                                    Trust is not a by-product of our work. It is the product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Founders />
        </div>
    );
}
