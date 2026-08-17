'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Methodology from '@/components/Methodology/Methodology';
import WhyDifferent from '@/components/WhyUs/WhyUs';
import Roadmap from '@/components/Roadmap/Roadmap/Roadmap';
import FAQ from '@/components/FAQ/FAQ';
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
    <main>
      <div className="landing-intro">
        <Navbar />
        <Hero />
      </div>

      <Methodology />
      <WhyDifferent />
      <Roadmap />
      <FAQ />
      <ScrollToTop />
    </main>
  );
}