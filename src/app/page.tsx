import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Credibility from '@/components/Credibility';
import Process from '@/components/Process';

import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Credibility />
      <Process />

      <Cta />
      <Footer />
    </main>
  );
}
