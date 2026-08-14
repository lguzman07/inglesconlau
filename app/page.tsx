import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Methodology from '@/components/Methodology/Methodology';
import WhyDifferent from '@/components/WhyUs/WhyUs';
import Philosophy from '@/components/Philosophy/Philosophy';
import Roadmap from '@/components/Roadmap/Roadmap/Roadmap';
import FAQ from '@/components/FAQ/FAQ';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export default function Home() {
  return (
    <main>
      <div className="landing-intro">
        <Navbar />
        <Hero />
      </div>

      <Methodology />
      <WhyDifferent />
      <Philosophy />
      <Roadmap />
      <FAQ />
      <ScrollToTop />
    </main>
  );
}
