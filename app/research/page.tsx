import React from 'react';

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-brand-navy">
            <div className="section-padding">
                <div className="container-editorial">
                    <div className="mb-24">
                        <span className="label-tech mb-4">RESEARCH LIBRARY</span>
                        <h1 className="mb-8">Decision-Led Research</h1>
                        <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
                            We transform complex external signal into decision-grade clarity at the point of commitment.
                        </p>
                    </div>

                    <div className="frosted-glass bg-brand-navy-dark/40 rounded-[3rem] p-16 md:p-24 text-center border-brand-gold/10">
                        <p className="text-xl md:text-2xl font-cinzel italic text-brand-gold opacity-90 mb-8">
                            Access to sample research is intentionally controlled and reviewed.
                        </p>
                        <p className="label-tech lowercase tracking-widest opacity-40">
                            All sample material is anonymised and non-client specific.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
