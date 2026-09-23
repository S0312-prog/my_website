import { motion } from 'motion/react';
import { Mic, Users, Sparkles } from 'lucide-react';

export default function Activities() {
  const conferences = [
    { date: "Aug 2026", name: "GSST/CBERS-5 International Symposium on Machine Learning in Heliophysics and Space Weather", place: "INPE, Brazil", type: "Talk" },
    { date: "Aug 2026", name: "57th Meeting of the AAS Solar Physics Division (SPD)", place: "Baltimore, USA", type: "Talk" },
    { date: "May 2026", name: "Parker Heliophysics Scholars, 11th Meeting", place: "Online", type: "Talk" },
    { date: "Apr 2026", name: "Indus Symposium on Heliophysics Advancements", place: "Online", type: "Talk" },
    { date: "Nov 2025", name: "SPAnet Workshop on Astronomical Instrumentation", place: "CRAAM/Mackenzie, Brazil" },
    { date: "Sep 2025", name: "III Academic Week of Space Geophysics (SAGE III)", place: "INPE, Brazil", type: "Poster" },
    { date: "Dec 2024", name: "Astronomy from the Moon Conference", place: "Astronomical Society of India" }
  ];

  const leadership = [
    { role: "Co-Founder, Solar OpenMonitor", detail: "Open-access, multi-instrument analysis of solar flares on a shared timeline.", period: "Current" },
    { role: "DKIST Observation Campaign", detail: "Led the coordination between the AR30T and DKIST telescope teams to set the pointing specifications.", period: "Current" },
    { role: "English Tutor, BridgeLang", detail: "Teaching English at intermediate level.", period: "Current" },
    { role: "Teaching Intern, SAMBHAJ NGO", detail: "Taught Mathematics, English and Science to K-12 students from underprivileged communities.", period: "Jan 2024 – May 2024" }
  ];

  const outreach = [
    "Solar Radio Burst Tracker (current).",
    "Radio Galaxy Zoo EMU and Eclipsing Binary Patrol (analyzing stellar light curves).",
    "Vidyut Physics Society: Research and Editorial Board (Miranda House)."
  ];

  return (
    <section id="talks" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <Mic className="text-amber-500" />
              Talks & Conferences
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mb-10"></div>

            <ul className="space-y-6">
              {conferences.map((conf) => (
                <li key={conf.name} className="relative pl-6 border-l border-slate-800">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-amber-500 rounded-full"></div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-medium text-slate-400">{conf.date}</span>
                    {conf.type && (
                      <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                        {conf.type}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-200 font-medium text-sm leading-snug">{conf.name}</p>
                  <p className="text-slate-500 text-xs mt-1">{conf.place}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-5 text-slate-100 flex items-center gap-2">
                <Users size={20} className="text-amber-500" />
                Teaching & Leadership
              </h3>
              <ul className="space-y-4">
                {leadership.map((item) => (
                  <li key={item.role}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-medium text-slate-200">{item.role}</p>
                      <p className="text-xs text-slate-500 shrink-0">{item.period}</p>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-5 text-slate-100 flex items-center gap-2">
                <Sparkles size={20} className="text-amber-500" />
                Citizen Science & Outreach
              </h3>
              <ul className="space-y-3">
                {outreach.map((item) => (
                  <li key={item} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
