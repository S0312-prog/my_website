import { motion } from 'motion/react';
import { BookOpen, Code2, ExternalLink } from 'lucide-react';

export default function Publications() {
  const skillGroups = [
    {
      name: "Programming",
      skills: ["Python (NumPy, SciPy, Matplotlib, SunPy)", "IDL", "Scilab", "LaTeX", "Git/GitHub"]
    },
    {
      name: "Specialized Tools",
      skills: ["PyXspec/XSPEC", "Sherpa", "OSPEX", "HEASoft/FTOOLS", "TOPCAT", "MESA", "PAKAL 3D"]
    },
    {
      name: "Methods",
      skills: [
        "X-ray Spectroscopy",
        "Spectral Fitting (Isothermal/Multi-thermal)",
        "Multi-instrument Data Calibration & Analysis",
        "FITS Handling",
        "MCMC Analysis",
        "Wavelet Analysis",
        "Fast Fourier Transform",
        "1D Solar Atmospheric Modeling"
      ]
    }
  ];

  return (
    <section id="publications" className="py-24 bg-slate-900/30 border-y border-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <BookOpen className="text-amber-500" />
              Publications
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mb-10"></div>

            <div className="space-y-6">
              <div className="block bg-slate-950/80 p-6 rounded-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-700 text-slate-100 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                  In Preparation
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-3 mt-2">
                  <span className="font-semibold text-slate-100">Sadangaya, S. S., Giménez de Castro, C. G., Perriyil, S. M., Simões, P. J. A., & Cauzzi, G.</span> "Delayed Amplification of Sub-cutoff Evanescent Oscillations in the Squeezed Umbral Column at 30 THz Following an X-Class Flare."
                </p>
                <p className="text-amber-500 text-sm font-medium mt-4">To be submitted to The Astrophysical Journal</p>
              </div>

              <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ae3061" target="_blank" rel="noopener noreferrer" className="block bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all group">
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  <span className="font-semibold text-slate-100 group-hover:text-amber-400 transition-colors">Perriyil, S. M., Sadangaya, S. S., Castro, C. G. G. d., & Simões, P. J. A. (2026).</span> "Observational Evidence Linking Loop Length and Thermal–Nonthermal Peak Timing in Solar Flares."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-amber-500 text-sm font-medium">The Astrophysical Journal</p>
                    <p className="text-slate-500 text-xs mt-1">DOI: 10.3847/1538-4357/ae3061</p>
                  </div>
                  <ExternalLink size={18} className="text-slate-500 group-hover:text-amber-500 transition-colors" />
                </div>
              </a>

              <a href="http://mtc-m16c.sid.inpe.br/col/sid.inpe.br/mtc-m16c/2026/02.16.17.56/doc/thisInformationItemHomePage.html" target="_blank" rel="noopener noreferrer" className="block bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                  Featured Paper
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-3 mt-2">
                  <span className="font-semibold text-slate-100 group-hover:text-amber-400 transition-colors">Sadangaya, S. S., & Sarwade, A. R. (2025).</span> "Comparative Analysis of Solar Flare Emissions with Chandrayaan-2 XSM and Aditya-L1 SoLEXS."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-amber-500 text-sm font-medium pr-4">Extended Abstracts of the III Academic Week of Space Geophysics (SAGE III), INPE</p>
                  <ExternalLink size={18} className="text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <Code2 className="text-amber-500" />
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mb-10"></div>

            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.name}>
                  <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">{group.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-slate-950/80 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
