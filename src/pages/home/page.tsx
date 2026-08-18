
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Testimonials from './components/Testimonials';
import WritingSamples from './components/WritingSamples';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <FeaturedWork />
      <Testimonials />
      <WritingSamples />
      <CTA />
      <Footer />
    </div>
  );
}
