import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/30 border-t border-slate-800/50 backdrop-blur-sm">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12">
            I am currently looking for PhD opportunities, internships, and teaching assistance roles where I can contribute my expertise in solar physics, X-ray spectroscopy, and data analysis.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-12">
            <a href="mailto:soumyashree0312@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all group w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                <p className="text-slate-200 font-medium">soumyashree0312@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 px-6 py-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-2xl w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                <MapPin size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-slate-200 font-medium">São Paulo, Brazil</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a href="https://www.linkedin.com/in/soumya-shree-s-779790266/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors">
              <Linkedin size={24} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/S0312-prog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors">
              <Github size={24} />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
