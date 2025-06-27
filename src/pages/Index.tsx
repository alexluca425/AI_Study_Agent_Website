
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhatItIsSection } from "@/components/WhatItIsSection";
import { IsItForMeSection } from "@/components/IsItForMeSection";
import { FoundersSection } from "@/components/FoundersSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <WhatItIsSection />
        <IsItForMeSection />
        <FoundersSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
