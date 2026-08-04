import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaperModal({ isOpen, onClose }: PaperModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
            <h3 className="text-xl font-bold text-slate-50 pr-8">
              Observational Analysis of Chromospheric Evaporation and Cooling Timescales in the 2012 July 28 Solar Flare
            </h3>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-amber-500 transition-colors bg-slate-800 hover:bg-slate-700 p-2 rounded-full"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto custom-scrollbar text-slate-300 space-y-6">
            <div className="text-center mb-8">
              <p className="text-lg font-medium text-amber-500 mb-2">Soumya Shree Sadangaya, C. Guillermo Giménez de Castro</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-100 mb-3">Abstract</h4>
              <p className="leading-relaxed text-sm">
                This study analyzes the M6.1 solar flare of 28 July 2012 to constrain loop filling and cooling timescales. Using RSTN and POEMAS radio data to trace non-thermal electrons and GOES SXR to trace thermal plasma, we observe a ~316 s Neupert delay. Combining this with an SDO/AIA loop length of ~37 Mm yields an evaporation velocity of ~120 km s⁻¹. The observed global cooling time (≈ 21 min) aligns with the theoretical conductive timescale (≈ 23 min). Spatially resolved AIA analysis reveals the hot core cools faster (≈ 7.5 min). These results are consistent with the standard hydrodynamic model where conductive cooling efficiency increases with temperature.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-100 mb-3">1. Introduction</h4>
              <p className="leading-relaxed text-sm mb-4">
                Solar flares are intense bursts of radiation across the electromagnetic spectrum, ranging from gamma rays to radio wavelengths. These events are driven by magnetic reconnection in the solar corona, a process which converts magnetic energy into plasma heating, particle acceleration, and bulk motions, producing temperatures of tens of millions of Kelvin and energetic electrons up to several MeV [1]. Studying flares in complementary wavelengths, such as soft X-rays (SXR) and microwaves, provides critical insights into their acceleration mechanisms and hydrodynamic evolution.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                Microwave emission is primarily produced by non-thermal electrons gyrating in the magnetic field during the acceleration process [2]. In contrast, soft X-rays originate from the thermal plasma that fills the flare loops via chromospheric evaporation. The temporal relationship between these two emissions, which is called as the Neupert effect, links the impulsive energy deposition (traced by microwaves) to the hydrodynamic accumulation of hot plasma (traced by SXR).
              </p>
              <p className="leading-relaxed text-sm">
                To constrain the energy deposition profile, it is important to compare the theoretical and observed hydrodynamic timescales. In the standard model, the decay phase is initially governed by thermal conduction. If the theoretical conductive cooling timescale (τ_cond) matches the observed decay timescale (τ_obs), the loop evolution can be explained by impulsive heating alone. However, significant discrepancies often indicate the presence of sustained heating (if τ_obs {'>'} τ_cond) or the dominance of radiative losses (if τ_obs {'<'} τ_cond) [3].
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-100 mb-3">2. Instrumentation and Data</h4>
              <p className="leading-relaxed text-sm mb-4">
                In this work, we study the M6.1 solar flare observed on 28 July 2012, which originated from NOAA Active Region 11532 (Mount Wilson β-γ-δ configuration) located at heliographic coordinates S20E53. We analyze multi-wavelength observations to characterize the impulsive and gradual phases of the event.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                For the thermal SXR analysis, we use 1 Å to 8 Å integrated flux data from the GOES series [4]. This dataset defines the global thermal evolution of the flare plasma.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                To constrain the non-thermal impulsive phase, we analyze millimeter-wave emission from the POEMAS radio polarimeter [5] and microwave flux from the RSTN network. We specifically utilize the 45 GHz (POEMAS) and 15 GHz (RSTN) channels. Spectral analysis at the flare peak confirms that both frequencies lie in the optically thin gyrosynchrotron regime. This ensures that the observed peak times track the instantaneous MeV electron acceleration, minimizing opacity-induced delays common at lower frequencies.
              </p>
              <p className="leading-relaxed text-sm">
                For the hydrodynamic and geometric analysis, we use Extreme Ultraviolet (EUV) and magnetic data from the SDO [6]. We use Atmospheric Imaging Assembly (AIA) 1700 Å imagery to identify the chromospheric footpoints and calculate the loop length. To confirm that these footpoints were rooted in opposite magnetic polarities, we overlay line-of-sight magnetograms from the Helioseismic and Magnetic Imager (HMI). Finally, we use AIA 131 Å and 94 Å filtergrams to perform the differential temperature analysis of the cooling phase.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-100 mb-3">3. Methodology</h4>
              <h5 className="font-semibold text-slate-200 mb-2">3.1. Loop Geometry and Upflow Velocity</h5>
              <p className="leading-relaxed text-sm mb-4">
                We first calculate the average chromospheric evaporation velocity (V_up) by combining the impulsive heating duration with the loop geometry. The heating duration is defined as the time delay (Δt) between the non-thermal and thermal peaks, identified as the timestamps of maximum observed flux in the respective light curves. Comparing the microwave emissions (15 GHz from RSTN and 45 GHz from POEMAS) with the SXR flux from GOES we find the microwave emission peaked at ~20:50:44 UT, preceding the SXR peak at ~20:56:00 UT.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                To estimate the loop length (L), we identify conjugate footpoints using SDO/AIA 1700 Å continuum images, which trace the precipitation of energetic particles into the lower atmosphere. We overlay these images with SDO/HMI line-of-sight magnetograms to ensure magnetic connectivity. The primary footpoint (FP1) is identified as the location of maximum brightness in the 1700 Å map, while the conjugate footpoint (FP2) is defined as the brightest kernel rooted in the opposite magnetic polarity (|B_LOS| {'>'} 200 G).
              </p>
              <p className="leading-relaxed text-sm mb-4">
                The loop length (L) is derived from the de-projected separation distance (d) between the footpoints, assuming a semi-circular geometry (L ≈ πd/2). To quantify measurement uncertainty, we perform a Monte Carlo simulation (N = 1000 trials), perturbing the footpoint coordinates with Gaussian noise (σ = 1 pixel). The final loop length is reported as the mean of these trials. Using these parameters, we calculate the average evaporation velocity as V_up ≈ L/Δt [7].
              </p>

              <h5 className="font-semibold text-slate-200 mb-2 mt-6">3.2. Thermodynamic Decay Analysis</h5>
              <p className="leading-relaxed text-sm mb-4">
                We analyze the cooling phase to assess whether thermal conduction alone can account for the observed temperature decay. For the high-temperature flare plasma (T ≳ 10⁶ K), we adopt the classical Spitzer thermal conductivity appropriate for a fully ionized plasma. This choice is consistent with the high-temperature asymptotic behavior of the piecewise conductivity fits presented by [8], in which the thermal conductivity scales as κ ∝ T^(5/2).
              </p>
              <p className="leading-relaxed text-sm mb-4">
                The theoretical conductive cooling timescale (τ_cond) is calculated following the analytical framework for cooling coronal loops [3]:<br/>
                <code className="block bg-slate-950 p-3 rounded mt-2 mb-2 text-amber-500">τ_cond ≈ 3n_e k_B L² / (κ₀ T^(5/2))</code>
                where n_e is the electron number density, k_B is the Boltzmann constant, L is the loop length, and T is the peak plasma temperature. The coefficient κ₀ ≈ 1.0 × 10⁻⁶ erg cm⁻¹ s⁻¹ K^(-7/2) corresponds to the Spitzer thermal conductivity parallel to the magnetic field.
              </p>
              <p className="leading-relaxed text-sm">
                The electron density is estimated from the emission measure (EM) corresponding to peak temperature and the loop volume (V) using n_e = √(EM/V). The loop volume is approximated as a cylindrical structure with an aspect ratio of 0.1 (width ~ 0.1L). The peak temperature and emission measure are obtained from GOES observations using the standard sunkitspex spectral fitting routines [9].
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-100 mb-3">4. Results</h4>
              <h5 className="font-semibold text-slate-200 mb-2">4.1. Impulsive Phase and Loop Dynamics</h5>
              <p className="leading-relaxed text-sm mb-4">
                The event exhibits a clear Neupert effect, where the non-thermal microwave emission (peaking at ~20:50:44 UT) precedes the SXR maximum (~20:56:00 UT). This delay implies successful plasma heating and accumulation driven by electron beams following magnetic reconnection [12].
              </p>
              <p className="leading-relaxed text-sm mb-4">
                To characterize the evaporation phase, following the method of [7], we determine a magnetic loop length of L ≈ 37 ± 2.0 Mm from conjugate SDO/AIA 1700 Å and HMI footpoints. Footpoint separation is measured at the time of the SXR peak to ensure the loop geometry corresponds to the fully filled arcade at the onset of cooling. The observed time delay between the non-thermal and thermal peaks is Δt ≈ 316 s. Interpreting this delay as the hydrodynamic filling timescale yields an average chromospheric evaporation velocity of:
                <br/><code className="block bg-slate-950 p-3 rounded mt-2 mb-2 text-amber-500">v_up ≈ L / Δt ≈ 120 km s⁻¹</code>
                This value is consistent with standard evaporation models and hydrodynamic simulations [13], confirming that the initial SXR rise is governed by plasma upflows driven by electron beam heating.
              </p>

              <h5 className="font-semibold text-slate-200 mb-2 mt-6">4.2. Thermodynamic Decay</h5>
              <p className="leading-relaxed text-sm mb-4">
                We subsequently analyze the thermodynamic decay of the loop. To strictly constrain the initial conditions of the cooling phase, we derive the electron density at the moment of peak temperature (T_max ≈ 14.9 MK). Using the emission measure at this time (EM ≈ 1.49 × 10⁴⁹ cm⁻³) and an estimated loop volume of V ≈ 4 × 10²⁶ cm³, we calculate a peak electron density of n_e ≈ 2.1 × 10¹¹ cm⁻³.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                Substituting these values into the conductive cooling equation (Eq. 1), we obtain a theoretical timescale of τ_cond ≈ 23 min. This prediction shows good agreement with the observed exponential decay time of the GOES temperature, τ_GOES ≈ 21 min. It indicates that thermal conduction is the dominant global energy loss mechanism for the flare plasma [3].
              </p>
              <p className="leading-relaxed text-sm">
                However, the spatially resolved temperature analysis using SDO/AIA 131/94 Å flux ratios reveals a significantly faster cooling timescale for the flare core (τ_AIA ≈ 7.5 min). This discrepancy highlights the multi-thermal nature of the loop: the hot kernel (T_core {'>'} 20 MK) isolated by AIA is theoretically predicted to cool approximately three times faster (τ_cond ∝ T^(-5/2)) than the volume-averaged plasma (T_avg ≈ 15 MK) measured by GOES [11].
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-100 mb-3">5. Discussion and Conclusions</h4>
              <p className="leading-relaxed text-sm mb-4">
                In this study, we investigate the hydrodynamic evolution of the M6.1 flare on 28 July 2012 by constraining the timescales of chromospheric evaporation and thermal decay.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                Our analysis of the impulsive phase yields an average upflow velocity of v_up ≈ 120 km s⁻¹. This value relies on the assumption that the radio-to-SXR time delay (Δt) represents the hydrodynamic loop-filling timescale. While this approach simplifies the complex dynamics of the transition region, the derived velocity falls well within the range of 100–1000 km s⁻¹ predicted by hydrodynamic simulations of electron beam heating [13]. This consistency supports the interpretation that the initial soft X-ray rise is governed by the mass supply from chromospheric evaporation.
              </p>
              <p className="leading-relaxed text-sm mb-4">
                In the decay phase, the close agreement between the theoretical conductive cooling timescale (τ_cond ≈ 23 min) and the observed GOES decay (τ_GOES ≈ 21 min) identifies thermal conduction as the dominant energy loss mechanism for the global flare plasma. This finding is particularly notable given that the flare originated from NOAA AR 11532, a complex β-γ-δ active region. While such configurations frequently drive sustained heating via successive reconnection, our results indicate that this specific event was impulsive. The slight offset between the observed data and the exponential fit arises because the thermal peak exhibits a rounded profile, whereas the model assumes an immediate sharp decay. However, the lack of deviation from the conductive cooling profile confirms that secondary energy release was negligible, allowing the loop to relax purely via hydrodynamic conduction [14].
              </p>
              <p className="leading-relaxed text-sm mb-4">
                The differential temperature analysis reveals the multi-thermal complexity of the flare loop. The hot core isolated by SDO/AIA cools significantly faster (τ_AIA ≈ 7.5 min) than the global average measured by GOES; we restrict this fit to the impulsive phase to exclude background noise. This discrepancy is consistent with the temperature dependence of Spitzer conductivity (κ ∝ T^(5/2)), which dictates that hotter plasma components must cool more rapidly. Additionally, this rapid cooling may be enhanced by "evaporative cooling" [3]. In this scenario, the strong conductive flux from the hot core drives additional upflows of dense chromospheric material, which mixes with the loop plasma and increases the cooling rate beyond simple static conduction [15].
              </p>
              <p className="leading-relaxed text-sm">
                We acknowledge certain limitations in this study. First, the use of exponential fitting provides only a characteristic timescale; theoretical cooling profiles follow power laws rather than strict exponentials and do not account for the peak turnover [3]. Second, the assumption of a semi-circular geometry and unit filling factor simplifies the loop volume estimation. Future studies utilizing Differential Emission Measure (DEM) reconstruction could provide more precise volume constraints, allowing for a rigorous separation of conductive and radiative loss rates to better identify energy transport mechanisms in complex flare topologies. Despite these approximations, this event serves as a validation of the standard hydrodynamic flare model, demonstrating a clear link between the impulsive filling velocity and the subsequent conductive cooling regime.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
