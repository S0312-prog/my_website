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
            The projects I am working on now, with their current results and figures.
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
              <div>
                <h4 className="text-xl font-semibold text-amber-400 mb-3">Radiative Transfer Modeling at 30 THz</h4>
                <p className="text-slate-300 leading-relaxed text-sm mb-5">
                  I compare AR30T observations of solar active regions at 30 THz (~10 μm) with synthetic brightness temperatures (Tb) and Contribution Functions computed with the PAKAL 3D radiative transfer code for four 1D semi-empirical atmospheres: the C7 quiet-Sun, VAL-C, Maltby M umbral and a penumbral model.
                </p>
                <h5 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">Key Results</h5>
                <ul className="space-y-3">
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span>Developed and validated a bandpass-convolved Contribution Function method that integrates the synthetic emission over the full AR30T filter response, the first application of this approach to 30 THz solar data.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span><strong className="text-slate-100">Quiet Sun:</strong> the C7 model predicts Tb ≈ 5650 K. The PAKAL 3D treatment gives a dual-peaked Contribution Function with an emission void near 0.75 Mm and lowers Tb to ≈ 5160 K, closer to early mid-IR observations.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span><strong className="text-slate-100">Sunspot umbra:</strong> in AR 13777 the 7-hour averaged umbral minimum is ≈ 4700 K. After correcting for beam smearing, a static excess of ≈ 300 K remains that instrumental effects cannot explain, and the Maltby M umbral model underpredicts the observed Tb.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span>1D models overpredict Tb in the quiet Sun but underpredict it in the umbra, the reverse of the umbral pattern seen at millimetre wavelengths. This points to 1D models misrepresenting the 3D opacity structure and formation-height geometry above sunspots.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span><strong className="text-slate-100">Next:</strong> apply the bandpass-convolved method to the full active-region sample.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/contribution-function-pakal.png"
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
                    src="/images/tb-10um-models-vs-observations.png"
                    alt="Comparison of Tb at 10 μm: Models vs. Observations"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 border-t border-slate-800">
                    <p className="text-xs text-slate-400 text-center">
                      Quiet-Sun Tb at 10 μm: 1D semi-empirical models (blue) against the observed value (red, ±70 K).
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
              <div>
                <h4 className="text-xl font-semibold text-amber-400 mb-3">Post-Flare Amplification of Umbral Oscillations</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-medium text-amber-400">In preparation for ApJ</span>
                  <span className="px-3 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300">Talk at the 57th SPD Meeting</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm mb-5">
                  AR30T observations at 10 μm (30 THz) of the sunspot umbra in AR 13777 following the SOL2024-08-08 X1.3-class flare.
                </p>
                <h5 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">Key Results</h5>
                <ul className="space-y-3">
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span>Sub-cutoff 3-minute oscillations are detected in the umbra, while 5-minute power stays below the 95% significance level.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span>The sustained wave amplification begins ~54 minutes after the flare's impulsive phase.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span><strong className="text-slate-100">Frequency drift:</strong> wavelet analysis shows three successive wave trains whose mean period falls from ≈ 247 s to ≈ 223 s (ΔP ≈ −25 s).</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span>The 10 μm brightness temperature stays stable (σ ≈ 14 K), so the drift is not caused by cooling. The periods lie between the isothermal (258 s) and adiabatic (200 s) acoustic cutoffs, consistent with the formation height rising into layers with longer radiative relaxation times.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">✦</span>
                    <span>Proposed two-step picture: the flare first excites the umbral column mechanically; later, coronal-rain mass loading raises the free–free opacity and lifts the 10 μm formation height by ~200–250 km.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/umbral-oscillations-global-power.png"
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
                    src="/images/aia1700-vs-30thz-umbra.png"
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
                  <span><strong>Next steps:</strong> Dopplergram cross-check of magnetic transients, quantitative comparison of timing, and extending DEM analysis to earlier/later phases.</span>
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
              A multi-decade viewer for solar flare data. Open-access, multi-instrument analysis on a shared timeline, fully browser-rendered. I co-founded it with a colleague and help develop it.
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
