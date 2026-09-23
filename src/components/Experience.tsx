import { motion } from 'motion/react';
import { Telescope } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Graduate Researcher",
      organization: "Center for Radio Astronomy and Astrophysics Mackenzie (CRAAM)",
      period: "Aug 2025 – Present",
      description: [
        "Investigating morphology and temporal evolution of solar active regions at 30 THz using AR30T and SP30T data.",
        "Computing Contribution Functions (CFs) using semi-empirical solar atmospheric models (VAL/FAL) to determine formation heights across instrument bandpasses.",
        "Applying temporal averaging and cross-correlation to suppress noise and analyze solar oscillations.",
        "Created a catalogue of AR30T observations in UTC."
      ]
    },
    {
      title: "Independent Research",
      organization: "ISRO - Satellite Integration and Test Establishment (ISITE)",
      mentor: "Mentor: Abhilash Rajendra Sarwade, Scientist, ISRO",
      period: "Aug 2024 – Aug 2025",
      description: [
        "Conducted time-resolved spectral analysis of solar flares to extract plasma parameters and elemental abundances (Fe, Ni, Ca, Ar, S) using PyXspec/XSPEC.",
        "Developed a comparative study of flares using data from Chandrayaan-2 (XSM) and Aditya-L1 (SOLEXS).",
        "Presented the work as a poster at the III Academic Week of Space Geophysics (SAGE III) at INPE (Sep 2025), where it was selected as a Featured Paper."
      ]
    },
    {
      title: "Research Intern",
      organization: "ISRO - ISITE",
      period: "July 2024 – Aug 2024",
      description: [
        "Analyzed soft X-ray light curves and elemental emissions of the Feb 12, 2024 flare using Sherpa.",
        "Awarded Certificate of Excellence for technical report and presentation on emission mechanisms."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Experience</h2>
          <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8 items-baseline">
                <div className="md:col-span-1 mb-4 md:mb-0 text-slate-400 font-medium text-sm md:text-right">
                  {exp.period}
                </div>
                <div className="md:col-span-3 relative">
                  <div className="hidden md:block absolute -left-[2.35rem] top-1.5 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                  <div className="hidden md:block absolute -left-9 top-4 bottom-[-3rem] w-px bg-slate-800"></div>

                  <h3 className="text-xl font-semibold text-slate-50 mb-1">{exp.title}</h3>
                  <h4 className={`text-amber-500/90 font-medium flex items-center gap-2 ${exp.mentor ? 'mb-1' : 'mb-4'}`}>
                    <Telescope size={16} />
                    {exp.organization}
                  </h4>
                  {exp.mentor && <p className="text-slate-400 text-sm mb-4">{exp.mentor}</p>}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-amber-500 mt-1.5 text-[10px]">▶</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
