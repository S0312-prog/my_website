import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import OngoingResearch from './components/OngoingResearch';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentIsHome = window.scrollY < window.innerHeight * 0.3;
      if (currentIsHome !== isHome) {
        setIsHome(currentIsHome);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <div className="min-h-screen text-slate-50 font-sans selection:bg-amber-500/30 relative">
      {/* Global Video Background */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://sdo.gsfc.nasa.gov/assets/img/browse/2012/08/31/20120831_000000_1024_0171.jpg"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isHome ? 'opacity-75' : 'opacity-60'}`}
        >
          <source src="/images/videos/sun.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 transition-colors duration-1000 ${isHome ? 'bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950/90' : 'bg-slate-950/80'}`}></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <OngoingResearch />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
