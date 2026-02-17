import React from 'react';
import Hero from '@/components/sections/Hero';
import ValueProp from '@/components/sections/ValueProp';
import AuthorityQuote from '@/components/sections/AuthorityQuote';
import ClientQuote from '@/components/sections/ClientQuote';
import DecisionContexts from '@/components/sections/DecisionContexts';
import EngagementContexts from '@/components/sections/EngagementContexts';
import Founders from '@/components/sections/Founders';
import ResearchPreview from '@/components/sections/ResearchPreview';
import TrustAndFinalCTA from '@/components/sections/TrustAndFinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AuthorityQuote />
      <DecisionContexts />
      <EngagementContexts />
      <ValueProp />
      <ClientQuote />
      <ResearchPreview />
      <Founders />
      <TrustAndFinalCTA />
    </>
  );
}
