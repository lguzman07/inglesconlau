'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import LearningOutcomes from '@/components/Hero/LearningOutcomes';
import Methodology from '@/components/Methodology/Methodology';
import WhyDifferent from '@/components/WhyUs/WhyUs';
import AccessibilityBand from '@/components/AccessibilityBand/AccessibilityBand';
import Roadmap from '@/components/Roadmap/Roadmap/Roadmap';
import PlansTeaser from '@/components/PlansTeaser/PlansTeaser';
import FAQ from '@/components/FAQ/FAQ';
import FinalCta from '@/components/FinalCta/FinalCta';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { createClient } from '@/lib/supabase/client';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    async function redirectAuthenticatedUser() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        router.replace('/inicio');
      }
    }

    void redirectAuthenticatedUser();
  }, [router]);

  return (
    <main className="marketing-page">
      <div className="landing-intro">
        <Navbar />
        <Hero />
        <LearningOutcomes />
      </div>

      <WhyDifferent />
      <AccessibilityBand />
      <Methodology />
      <Roadmap />
      <PlansTeaser />
      <FAQ />
      <FinalCta />
      <ScrollToTop />
    </main>
  );
}