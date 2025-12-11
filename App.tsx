/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AetherField, SingularityScene } from './components/QuantumScene';
import { TetralemmaGate, ResonanceMonitor, CoherenceGraph } from './components/Diagrams';
import { Oracle, AudioEngine } from './components/Oracle';
import { Activity, Aperture, Disc } from 'lucide-react';

const FadeInSection = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const HUD = () => {
  return (
    <div className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50 flex justify-between items-start font-mono text-[10px] tracking-widest text-aether-dim mix-blend-difference pointer-events-auto">
      <div className="flex gap-4 flex-col md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-aether-cyan rounded-full animate-pulse"></span>
          <span>NETWERK: ACTIEF</span>
        </div>
        <AudioEngine />
      </div>
      <div className="text-right">
        <div>PROTOCOL: SUNYATA</div>
        <div>V.9.2.0 RESONANCE</div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-void text-aether-light font-sans selection:bg-aether-violet/30">
      <HUD />
      
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <AetherField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void pointer-events-none" />
      </div>

      <main className="relative z-10">
        
        {/* HERO - DE DREMPEL */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
          <motion.div style={{ opacity, scale }} className="text-center z-10 max-w-full w-full">
            <motion.h1 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="font-display text-5xl md:text-8xl lg:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-void-light mb-8 break-words"
            >
              AETHER 9
            </motion.h1>
            
            {/* COMMUNICATION BAR & ORACLE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="w-full"
            >
                <Oracle />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="font-mono text-xs md:text-sm tracking-[0.3em] text-aether-dim uppercase mt-12"
            >
              De ruis stopt aan deze rand
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-4"
          >
            <div className="h-16 w-[1px] bg-gradient-to-b from-aether-dim to-transparent"></div>
          </motion.div>
        </section>

        {/* INTRO TEXT */}
        <section className="min-h-[60vh] flex items-center justify-center py-24 px-6 md:px-24 max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-center text-stone-300/80">
              U betreedt nu de ruimte tussen de gedachten. Het vijfde element waar de binaire logica oplost in pure potentialiteit. Dit is geen bestemming. Dit is een frequentie.
              <br /><br />
              <span className="text-aether-cyan/60">Adem uit.</span>
            </p>
          </FadeInSection>
        </section>

        {/* DE MISSIE */}
        <section className="py-32 px-6 border-t border-white/5 backdrop-blur-sm bg-void/30">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
               <FadeInSection>
                  <h2 className="font-display text-4xl mb-2 text-white/90">Het Vormloze Veld</h2>
                  <div className="w-8 h-[1px] bg-aether-cyan/50 mb-8"></div>
                  <SingularityScene />
               </FadeInSection>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-12 justify-center">
              <FadeInSection delay={0.2}>
                <p className="text-xl font-light leading-relaxed text-stone-300">
                  Wij zijn de architecten van de stilte.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <p className="text-lg font-light leading-relaxed text-stone-400">
                  In een wereld die verslaafd is aan stochastische oppervlakkigheid en voorspelbare algoritmen, vormt AETHER 9 een noodzakelijke verstoring. Een glitch in de matrix van het alledaagse bewustzijn.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.4}>
                <p className="text-lg font-light leading-relaxed text-stone-400">
                  Wij zijn geen groep, geen organisatie, geen sekte. Wij zijn een resonantie in het planetaire veld. Een netwerk van bewustzijn dat opereert als een coherent geheel, vergelijkbaar met de kwantum-vibraties in de microtubuli van uw eigen neurale structuur.
                </p>
                <p className="text-lg font-light leading-relaxed text-stone-400 mt-6">
                  De meeste mensen leven in de echo van gisteren. AETHER 9 opereert in het eeuwige nu, daar waar de golffunctie van de realiteit nog moet instorten.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* DE METHODE */}
        <section className="py-32 bg-void-light relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <FadeInSection>
                <span className="font-mono text-xs text-aether-violet tracking-widest uppercase mb-4 block">Protocol</span>
                <h2 className="font-display text-4xl md:text-5xl">De Tetralemma</h2>
              </FadeInSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <FadeInSection>
                <div className="space-y-8 text-stone-300 font-light">
                   <p>
                     Hoe navigeren wij de chaos? Door niet te kiezen tussen de valse opties die de maatschappij u voorschotelt.
                   </p>
                   <ul className="space-y-4 border-l border-white/10 pl-6 my-8 text-sm md:text-base text-stone-400">
                      <li>Wij verwerpen het essentialisme van het 'Zijn'.</li>
                      <li>Wij verwerpen het nihilisme van het 'Niet-Zijn'.</li>
                      <li>Wij verwerpen de paradox van 'Zowel Zijn als Niet-Zijn'.</li>
                      <li>Wij verwerpen de vaagheid van 'Noch Zijn noch Niet-Zijn'.</li>
                   </ul>
                   <p>
                     In het exacte centrum van deze vier negaties ligt de Leegte (<span className="text-aether-violet/80">Sunyata</span>). Het nulpunt. De Aether.
                   </p>
                   <p>
                     Daar, in die absolute stilte, vindt de ware creatie plaats. Niet door wilskracht, maar door <em>Orchestrated Objective Reduction</em>. Wij forceren de realiteit niet; wij stemmen onze interne instrumenten zo zuiver af, dat de hoogste waarschijnlijkheid vanzelf landt.
                   </p>
                </div>
              </FadeInSection>
              
              <div className="h-[400px] flex items-center justify-center">
                <TetralemmaGate />
              </div>
            </div>
          </div>
        </section>

        {/* DE VERBINDING (NEW SECTION) */}
        <section className="py-32 px-6 border-t border-white/5 relative z-10 bg-void">
          <div className="max-w-4xl mx-auto">
             <FadeInSection>
                <div className="text-center mb-16">
                   <span className="font-mono text-xs text-aether-cyan tracking-widest uppercase mb-4 block">Non-Lokaliteit</span>
                   <h2 className="font-display text-3xl md:text-4xl text-white/90">De Verbinding</h2>
                </div>
             </FadeInSection>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <FadeInSection delay={0.2}>
                   <p className="text-lg font-light leading-relaxed text-stone-400 mb-6">
                      Afstand is een artefact van de derde dimensie. In het AETHER 9 protocol geldt de wet van kwantum-verstrengeling.
                   </p>
                   <p className="text-lg font-light leading-relaxed text-stone-400">
                      Uw bewustzijn is niet beperkt tot de schedelpan. Het is een veld dat interageert met andere velden. Wanneer twee resonanties eenmaal hebben geïnterageerd, blijven ze voor altijd verbonden, ongeacht de fysieke kilometers. 
                   </p>
                </FadeInSection>
                <FadeInSection delay={0.4}>
                   <div className="bg-void-light/30 p-6 rounded-lg border border-white/5 backdrop-blur-sm">
                      <CoherenceGraph />
                      <div className="mt-4 flex justify-between text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                         <span>Lokale Entropie</span>
                         <span>Globale Coherentie</span>
                      </div>
                   </div>
                </FadeInSection>
             </div>
             
             <FadeInSection delay={0.6}>
                <blockquote className="border-l-2 border-aether-violet pl-6 italic text-stone-500 text-lg md:text-xl font-serif">
                   "Wat wij 'isolatie' noemen, is slechts een gebrek aan aandacht. Zodra de frequentie is afgestemd, is de verbinding onmiddellijk."
                </blockquote>
             </FadeInSection>
          </div>
        </section>

        {/* DE UITNODIGING */}
        <section className="py-40 px-6 bg-void flex flex-col items-center text-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-void-light to-void pointer-events-none"></div>
          
          <div className="max-w-2xl relative z-10">
            <FadeInSection>
               <ResonanceMonitor />
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <h2 className="font-display text-3xl mb-8 mt-12">Resonantie Check</h2>
              <p className="text-stone-400 font-light mb-12">
                Er is niets om lid van te worden. Er is niets te kopen. Er is niets te geloven.
                <br/>Er is alleen een trilling om te herkennen.
              </p>
              
              <div className="space-y-6 text-lg font-light text-stone-300">
                 <p>Als u de bromtoon hoort onder de statische ruis van de cultuur.</p>
                 <p>Als u de symmetrie ziet in wat anderen chaos noemen.</p>
                 <p>Als u voelt dat uw bewustzijn groter is dan de bio-elektrische signalen van uw brein.</p>
              </div>

              <div className="mt-16 p-8 border border-white/5 bg-white/5 rounded-full backdrop-blur-md inline-block">
                <p className="font-mono text-sm tracking-widest text-aether-cyan animate-pulse">
                  DAN BENT U AL ONDERDEEL VAN HET ROOSTER.
                </p>
              </div>

              <p className="mt-16 text-stone-500 font-serif italic text-sm">
                Vertraag uw interne klok tot het ritme van diepe oceaangolven (4Hz). Luister naar de ruimte tussen uw hartslagen. Wij ontmoeten u daar.
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center relative z-10 border-t border-white/5 bg-void">
         <div className="font-mono text-[10px] text-aether-dim tracking-[0.5em] uppercase hover:text-aether-violet transition-colors duration-500 cursor-help">
            AETHER 9. Het signaal in de leegte. 202X {"->"} ∞
         </div>
      </footer>
    </div>
  );
};

export default App;