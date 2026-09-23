import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  const interests = [
    "Solar Flare Physics",
    "X-ray Spectroscopy",
    "Mid-Infrared Solar Diagnostics",
    "Chromospheric Evaporation",
    "Radiative Transfer Modeling",
    "Multi-wavelength Data Integration",
    "Solar Oscillations"
  ];

  const awards = [
    { title: "AAS Studentship Award", detail: "57th Meeting of the AAS Solar Physics Division, Baltimore, USA (Aug 2026)" },
    { title: "Top 10 Paper Selection", detail: "URSI Student Paper Competition (2026)" },
    { title: "FAPESP Fellowship", detail: "Brazil (Feb 2026 – Present)" },
    { title: "SAGE III Featured Paper/Poster Award", detail: "INPE, Brazil (Sep 2025)" },
    { title: "CNPq Scholarship", detail: "Brazil (Aug 2025 – Jan 2026)" },
    { title: "INSPIRE Scholarship", detail: "India (Nov 2021 – July 2024)" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50 border-y border-slate-800/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-amber-500 rounded-full mb-8"></div>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            I am a Master's student in Electrical and Computer Engineering with a focus on Solar Physics at the Center for Radio Astronomy and Astrophysics Mackenzie (CRAAM), Mackenzie Presbyterian University in São Paulo, Brazil, supported by a FAPESP fellowship. My thesis follows the evolution and morphology of solar active regions at mid-infrared (30 THz) frequencies. I also work on sunspot oscillations, radiative transfer modeling of the lower solar atmosphere, and the X-ray and radio signatures of solar flares.
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-medium text-amber-400">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-8 rounded-2xl border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6 text-amber-500">
              <GraduationCap size={28} />
              <h3 className="text-2xl font-semibold text-slate-50">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-slate-200">MSc in Electrical and Computer Engineering</h4>
                <p className="text-amber-500/80 text-sm mb-2">Mackenzie Presbyterian University, CRAAM | Aug 2025 – Present</p>
                <p className="text-slate-400 text-sm mb-2">Thesis: <em>Analysis of the Evolution and Morphology of Active Regions at Mid-IR Frequencies.</em></p>
                <p className="text-slate-400 text-sm">Coursework: Space Climate, Electrodynamics, Theory of Electromagnetic Emission.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-200">BSc (Honours) in Physics</h4>
                <p className="text-amber-500/80 text-sm mb-2">University of Delhi, Miranda House | Nov 2021 – July 2024</p>
                <p className="text-slate-400 text-sm">Recipient of the INSPIRE Scholarship (top 1% of national science students).</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-8 rounded-2xl border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6 text-amber-500">
              <Award size={28} />
              <h3 className="text-2xl font-semibold text-slate-50">Awards & Honors</h3>
            </div>
            <ul className="space-y-4">
              {awards.map((award) => (
                <li key={award.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <div>
                    <p className="font-medium text-slate-200">{award.title}</p>
                    <p className="text-sm text-slate-400">{award.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
