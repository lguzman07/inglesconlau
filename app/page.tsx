import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Methodology from '@/components/Methodology';
import WhyDifferent from '@/components/WhyDifferent';
import Philosophy from '@/components/Philosophy';
import Roadmap from '@/components/Roadmap';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Methodology />
      <WhyDifferent />
      <Philosophy />
      <Roadmap />
      <ScrollToTop />
    </main>
  );
}
