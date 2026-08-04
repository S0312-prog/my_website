import { motion } from 'motion/react';
import { Sun, Activity, Flame, Construction, Image as ImageIcon, ExternalLink } from 'lucide-react';

export default function OngoingResearch() {
  return (
    <section id="ongoing-research" className="py-24 bg-slate-900/40 border-y border-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Research</h2>
          <div className="w-20 h-1 bg-amber-500 rounded-full mb-8"></div>
          <p className="text-lg text-slate-300 leading-relaxed">
            A deep dive into my current active projects. I regularly update these sections with my progress, preliminary findings, and upcoming visual data.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Project 1: Modeling Solar Atmospheres */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Sun size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50">Modeling Solar Atmospheres</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mb-8">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-amber-400 mb-3">Observational Analysis & Radiative Transfer Modeling</h4>
                  <p className="text-slate-300 leading-relaxed text-sm mb-3">
                    Using the AR30T telescope, I am analyzing mid-infrared (30 THz, ~10 μm) diagnostics of solar active regions. For our primary case study, AR 13777, we extracted a 7-hour time-averaged brightness temperature profile and simulated beam-smearing effects. The quiescent umbral minimum of ~4700 K reveals a static excess of ~300 K above the corrected instrumental floor, preceding any flare activity.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Simultaneously, we model synthetic brightness temperatures using the PAKAL 3D radiative transfer code. Our results show that while 1D standard models overpredict Quiet Sun temperatures (predicting ~5650 K), our 3D treatment successfully reproduces ~5160 K by identifying an emission void near 0.75 Mm. Conversely, standard models underpredict umbral temperatures. This systematic inversion suggests 1D models fail to correctly represent the 3D opacity structure of the lower solar atmosphere above sunspots.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Screenshot from 2026-03-15 15-36-53.png" 
                    alt="Contribution Function vs Height for various models including PAKAL" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 border-t border-slate-800">
                    <p className="text-xs text-slate-400 text-center">
                      Contribution Function (CF) vs Height (Megameter) revealing the dual-peaked structure and emission void near 0.75 Mm.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Screenshot from 2026-03-15 15-40-06.png" 
                    alt="Comparison of Tb at 10 μm: Models vs. Observations" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 border-t border-slate-800">
                    <p className="text-xs text-slate-400 text-center">
                      Comparison of Brightness Temperature (Tb) at 10 μm showing the discrepancy between 1D semi-empirical models and observational data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 cursor-not-allowed">
                <Construction size={16} className="text-amber-500" />
                <span>GitHub Repository: Under Construction</span>
              </span>
            </div>
          </motion.div>

          {/* Project 2: Solar Oscillation Studies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Activity size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50">Solar Oscillation Studies</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mb-8">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-amber-400 mb-3">Post-Flare Amplification of Umbral Oscillations</h4>
                  <p className="text-slate-300 leading-relaxed text-sm mb-3">
                    Currently under internal review, this study investigates 3-minute umbral oscillations following the SOL2024-08-08 X1.3-class flare. By utilizing simultaneously acquired data from the DKIST Visible Broadband Imager (VBI) and the AR30T telescope, we observed a near-zero phase lag (3.2 ± 1.88 s) between the deep photospheric wave field and the mid-IR chromospheric signal, indicating the entire umbral column oscillates as a phase-locked coherent unit.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    We also found a temporal disconnect of ~54 minutes between the flare's impulsive phase and the sustained 30 THz wave amplification. This delay is interpreted as evidence for a two-stage process: initial mechanical perturbation, followed by a gradual thermodynamic density enhancement that tunes the opacity, shifting the 30 THz formation height upward into the oscillating umbral chromosphere. These findings have been accepted for a contributed talk at the 57th AAS/SPD Meeting.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Screenshot from 2026-03-15 15-52-11.png" 
                    alt="Umbral Oscillations: Global Power vs. 95% Significance Level" 
                    className="w-full h-auto object-cover bg-white"
                  />
                  <div className="p-4 border-t border-slate-800">
                    <p className="text-xs text-slate-400 text-center">
                      Umbral Oscillations: Global Power vs. 95% Significance Level comparing Pre-Flare and Post-Flare periods.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Screenshot from 2026-03-15 15-52-47.png" 
                    alt="AIA 1700 vs 30 THz Umbra Counts" 
                    className="w-full h-auto object-cover bg-white"
                  />
                  <div className="p-4 border-t border-slate-800">
                    <p className="text-xs text-slate-400 text-center">
                      Comparison of AIA 1700 Å counts and 30 THz Umbra Tb over time in sunspot during the flare event.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 cursor-not-allowed">
                <Construction size={16} className="text-amber-500" />
                <span>GitHub Repository: Under Construction</span>
              </span>
            </div>
          </motion.div>

          {/* Project 3: Preflare Brightening DEM Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Flame size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50">Preflare Brightening DEM Analysis</h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-3xl mb-6">
              Investigating the thermal evolution of an SDO/AIA-observed pre-flare brightening on 17 January 2025. Using Differential Emission Measure (DEM) inversion on six co-aligned AIA EUV channels, we analyze the early heating dynamics of solar flares at the polarity inversion line.
            </p>
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-lg font-semibold text-amber-400 mb-3">Key Findings & Methodology</h4>
              <ul className="space-y-3">
                <li className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✦</span>
                  A statistically robust DEM signal emerges 11 minutes before the GOES peak, with Emission Measure (EM) rising by ~two orders of magnitude (10²⁸ to 10³⁰ cm⁻⁵) while effective temperature stays steady (~9–11 MK).
                </li>
                <li className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✦</span>
                  This indicates a growing volume of plasma being heated to a similar peak temperature, rather than a single parcel getting hotter.
                </li>
                <li className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✦</span>
                  Complementary HMI line-of-sight analysis reveals slow, sustained magnetic flux cancellation at the PIL beginning concurrently with the DEM onset.
                </li>
                <li className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✦</span>
                  <strong>Next steps:</strong> Dopplergram cross-check of magnetic transients, quantitative comparison of timing, and extending DEM analysis to earlier/later phases.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Project 4: OpenMonitor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950/60 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <ImageIcon size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50">OpenMonitor</h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-3xl mb-6">
              A multi-decade viewer for solar flare data. Open-access, multi-instrument analysis on a shared timeline, fully browser-rendered. I am assisting in its development as a co-founder alongside a colleague.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
              <a href="https://solar.openmonitor.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-amber-500 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-lg border border-amber-500/30 transition-colors">
                <ExternalLink size={16} />
                <span>Visit OpenMonitor</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
