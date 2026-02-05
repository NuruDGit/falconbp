import React from 'react';
import Hero from '../components/sections/Hero';
import DecisionContexts from '../components/sections/DecisionContexts';
import ClarityFramework from '../components/sections/ClarityFramework';
import ClientQuote from '../components/sections/ClientQuote';
import ValueProp from '../components/sections/ValueProp';
import ResearchPreview from '../components/sections/ResearchPreview';
import Founders from '../components/sections/Founders';
import TrustAndFinalCTA from '../components/sections/TrustAndFinalCTA';
import AuthorityQuote from '../components/sections/AuthorityQuote';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <AuthorityQuote />
            <DecisionContexts />
            <ClarityFramework />
            <ClientQuote />
            <ValueProp />
            <ResearchPreview />
            <Founders />
            <TrustAndFinalCTA />
        </>
    );
};



export default Home;
