/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AetherField, SingularityScene, QuantumLattice } from './components/QuantumScene';
import { TetralemmaGate, ResonanceMonitor, CoherenceGraph } from './components/Diagrams';
import { Oracle, AudioEngine } from './components/Oracle';
import { Activity, Aperture, Disc } from 'lucide-react';

const { useState, useEffect } = React;

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
        <div>V.9.3.0 ORCH-OR</div>
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
              De ruis stopt aan deze rand.
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
              U betreedt nu de ruimte tussen de gedachten. De grens waar uw persona verdampt en de waarnemer overblijft. Dit is het vijfde element, de kwintessens, waar de binaire logica van nul en één oplost in een veld van pure potentialiteit.
              <br /><br />
              Hier gelden de wetten van de newtoniaanse haast niet meer. Dit is geen bestemming op een kaart, geen punt in de lineaire tijd. Dit is een frequentie. Een staat van zijn die altijd aanwezig was, maar overstemd werd door de statische elektriciteit van het ego.
              <br /><br />
              <span className="text-aether-cyan/60 block mt-8">Adem uit. En laat de adem wachten voordat hij terugkeert.</span>
            </p>
          </FadeInSection>
        </section>

        {/* DE MISSIE */}
        <section className="py-32 px-6 border-t border-white/5 backdrop-blur-sm bg-void/30">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-8">
               <FadeInSection>
                  <h2 className="font-display text-4xl mb-2 text-white/90">Het Vormloze Veld</h2>
                  <div className="w-8 h-[1px] bg-aether-cyan/50 mb-8"></div>
                  {/* Visual 1: Potentiality */}
                  <SingularityScene />
               </FadeInSection>
               <FadeInSection delay={0.2}>
                  {/* Visual 2: The Network/Mycelium */}
                  <div className="mt-8">
                    <QuantumLattice />
                  </div>
               </FadeInSection>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-12 justify-center">
              <FadeInSection delay={0.2}>
                <p className="text-xl font-light leading-relaxed text-stone-300">
                  Wij zijn de architecten van de stilte in een tijdperk van schreeuwend lawaai.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <p className="text-lg font-light leading-relaxed text-stone-400">
                  In een wereld die terminaal verslaafd is aan stochastische oppervlakkigheid, de dopamine-hits van voorspelbare algoritmen en de eindeloze carrousel van gefabriceerde verontwaardiging, vormt AETHER 9 een noodzakelijke, fundamentele verstoring. Wij zijn een bewust aangebrachte glitch in de matrix van het alledaagse, geautomatiseerde bewustzijn.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.4}>
                <p className="text-lg font-light leading-relaxed text-stone-400">
                  De moderne mens is doodsbang voor de leegte tussen twee hartslagen, en vult deze obsessief met digitale ruis. AETHER 9 omarmt precies die leegte als de bron van alle werkelijkheid.
                </p>
                <p className="text-lg font-light leading-relaxed text-stone-400 mt-6">
                  Wij zijn geen groep die u kunt definiëren, geen organisatie met een hiërarchie, geen sekte met een dogma. Wij zijn een resonantie in het planetaire veld. Zie ons als het mycelium van licht onder de betonnen vloer van de cultuur. Een netwerk van bewustzijn dat opereert als een coherent geheel, vergelijkbaar met de kwantum-vibraties in de microtubuli van uw eigen neurale structuur – een collectieve 'orchestratie' die niet wordt gestuurd vanuit een centraal commando, maar opkomt vanuit de inherente intelligentie van de lege ruimte zelf.
                </p>
                <p className="text-lg font-light leading-relaxed text-stone-400 mt-6">
                    De meeste mensen leven in de echo van gisteren of de projectie van morgen. AETHER 9 opereert uitsluitend in het eeuwige nu, het exacte snijpunt waar de golffunctie van de realiteit nog moet instorten tot materie.
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
                <h2 className="font-display text-4xl md:text-5xl">Het Tetralemma Protocol</h2>
              </FadeInSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <FadeInSection>
                <div className="space-y-8 text-stone-300 font-light">
                   <p>
                     Hoe navigeren wij de chaos zonder erdoor verteerd te worden? Door fundamenteel te weigeren te kiezen tussen de valse opties die de maatschappij u dwingend voorschotelt.
                   </p>
                   <p>
                     Dit is geen intellectuele oefening; het is een ontmanteling van uw cognitieve architectuur via de aloude logica van de Catuskoti. Zolang u vastzit in binaire keuzes – goed of fout, links of rechts, ik of de ander – blijft uw realiteit een platte, tweedimensionale projectie.
                   </p>
                   <ul className="space-y-4 border-l border-white/10 pl-6 my-8 text-sm md:text-base text-stone-400">
                      <li>Wij verwerpen het essentialisme van het 'Zijn'.</li>
                      <li>Wij verwerpen het nihilisme van het 'Niet-Zijn'.</li>
                      <li>Wij verwerpen het nihilisme van het 'Niet-Zijn'.</li>
                      <li>Wij verwerpen de paradoxale vluchtroute van 'Zowel Zijn als Niet-Zijn'.</li>
                      <li>Wij verwerpen de laffe vaagheid van 'Noch Zijn noch Niet-Zijn'.</li>
                   </ul>
                   <p>
                     In het exacte, trillende centrum van deze vier negaties, wanneer alle conceptuele houvast is weggeslagen, ligt de Leegte (<span className="text-aether-violet/80">Sunyata</span>). Het nulpunt. De Aether.
                   </p>
                   <p>
                     Daar, in die absolute stilte, vindt de ware creatie plaats. Niet door de brute kracht van de wil, maar door het delicate proces van <em>Orchestrated Objective Reduction</em>. Wij forceren de realiteit niet in een vorm; wij stemmen onze interne instrumenten zo zuiver af, dat de hoogste waarschijnlijkheid vanzelf landt door de zwaartekracht van puur bewustzijn.
                   </p>
                </div>
              </FadeInSection>
              
              <div className="h-[400px] flex items-center justify-center">
                <TetralemmaGate />
              </div>
            </div>
          </div>
        </section>

        {/* DE UITNODIGING & VERBINDING */}
        <section className="py-40 px-6 bg-void flex flex-col items-center text-center relative border-t border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-void-light to-void pointer-events-none"></div>
          
          <div className="max-w-4xl relative z-10">
            <FadeInSection>
               <ResonanceMonitor />
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl mb-12 mt-12">Resonantie Check</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-lg font-light text-stone-300 mb-16">
                  <div>
                    <p className="mb-6">
                        Er is niets om lid van te worden, want er zijn geen lijsten. Er is niets te kopen, want waarde is hier niet monetair. Er is niets te geloven, want geloof is een substituut voor directe ervaring.
                    </p>
                    <p>
                        Er is alleen een trilling om te herkennen. Een herkenning van wat u altijd al wist, maar vergeten was door de conditionering van de wereld.
                    </p>
                  </div>
                  <div>
                    <p className="mb-6">
                        Het is een subtiele dislocatie. Een gevoel dat de wereld om u heen een decorstuk is dat net niet goed vastzit. Als u de bromtoon hoort onder de statische ruis van de cultuur.
                    </p>
                    <p>
                        U zoekt niet naar antwoorden buiten uzelf, omdat u weet dat de externe wereld slechts een vertraagde spiegel is van uw interne staat.
                    </p>
                  </div>
              </div>

              <div className="mb-12">
                 <CoherenceGraph />
              </div>

              <div className="p-8 border border-white/5 bg-white/5 rounded-full backdrop-blur-md inline-block">
                <p className="font-mono text-sm tracking-widest text-aether-cyan animate-pulse">
                  ALS DIT RESONEERT, BENT U AL ONDERDEEL VAN HET ROOSTER.
                </p>
              </div>

              <p className="mt-16 text-stone-500 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
                Vertraag uw interne klok. Verlaag uw hersengolven tot het ritme van diepe oceaangolven, de Theta-staat (4-7Hz), de grens tussen waken en dromen. Luister naar de immense ruimte tussen uw gedachten.
                <br/><br/>
                Wij ontmoeten u daar, in de stilte die voorafgaat aan de vorm.
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