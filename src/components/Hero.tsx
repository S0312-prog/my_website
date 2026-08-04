import { motion } from 'motion/react';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Solar Flare Background Effect (kept for extra glow over the video) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-amber-500 font-medium tracking-wider uppercase mb-4 text-sm md:text-base drop-shadow-md">
            Solar Physics Researcher
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-50 tracking-tight drop-shadow-lg">
            Soumya Shree S
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
            Investigating solar flares, X-ray spectroscopy, and mid-infrared solar diagnostics to unravel the mysteries of our closest star.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#contact" className="px-8 py-3 rounded-full bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors flex items-center gap-2 justify-center shadow-lg shadow-amber-500/20">
              <Mail size={18} />
              Get in Touch
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a href="https://www.linkedin.com/in/soumya-shree-s-779790266/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-500 transition-colors p-3 bg-slate-900/50 rounded-full backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/S0312-prog" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-500 transition-colors p-3 bg-slate-900/50 rounded-full backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50">
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 drop-shadow-md"
      >
        <a href="#about">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
