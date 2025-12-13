/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AetherField, SingularityScene, QuantumLattice } from './components/QuantumScene';
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
          <span>STATUS: OPEN</span>
        </div>
        <AudioEngine />
      </div>
      <div className="text-right">
        <div>PROTOCOL: WAARNEMING</div>
        <div>V.9.3.0 NU</div>
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
              De ruimte tussen de gedachten.
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
              Je betreedt geen nieuwe ruimte. De aandacht zakt simpelweg weg uit haar gewoonte.
              <br /><br />
              Er is een grens waar het verhaal dat je over jezelf bijhield oplost. Niet met geweld. Niet door inzicht. Maar doordat het niet langer nodig is.
              <br /><br />
              Wat overblijft, is geen waarnemer tegenover iets. Alleen waarnemen zelf.
              <br /><br />
              Dit wordt soms het vijfde element genoemd, soms kwintessens. Niet als extra laag, maar als datgene waaruit alle lagen verschijnen. Hier valt de logica van nul en één stil, niet omdat ze fout is, maar omdat ze hier niets te doen heeft.
              <br /><br />
              Dit is geen plaats. Geen tijdstip. Geen ervaring die je kunt vasthouden. Het is een toon. Altijd aanwezig. Vaak overstemd.
              <br /><br />
              <span className="text-aether-cyan/60 block mt-8">Adem uit. En merk hoe de adem even niet terug hoeft te komen.</span>
            </p>
          </FadeInSection>
        </section>

        {/* DE MISSIE */}
        <section className="py-32 px-6 border-t border-white/5 backdrop-blur-sm bg-void/30">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-8">
               <FadeInSection>
                  <h2 className="font-display text-4xl mb-2 text-white/90">Vormloos veld</h2>
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
                  Er hoeft niets hersteld te worden. Er hoeft niets doorbroken te worden.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <p className="text-lg font-light leading-relaxed text-stone-400">
                  Wat wij cultuur noemen, wat wij identiteit noemen, wat wij ‘ik’ noemen, beweegt voortdurend over een stille ondergrond die niet reageert. Die stilte is geen tegenkracht. Ze is eenvoudig afwezig van strijd. De wereld is niet luid. De interpretatie is luid.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.4}>
                <p className="text-lg font-light leading-relaxed text-stone-400">
                  De leegte tussen twee impulsen wordt zelden gezien, omdat ze nergens naartoe wijst. En juist daarom wordt ze gevuld. Met beelden. Met meningen. Met prikkels.
                </p>
                <p className="text-lg font-light leading-relaxed text-stone-400 mt-6">
                  Hier wordt niets omarmd en niets afgewezen. De leegte hoeft niet verdedigd te worden. Ze is al wat er is wanneer niets wordt toegevoegd. Dit is geen gemeenschap. Geen netwerk. Geen structuur. Eerder iets als worteldraden onder de grond: niet zichtbaar, niet georganiseerd, niet gericht — maar wel dragend. Niet gestuurd vanuit een centrum, maar zichzelf ordend doordat niets in de weg staat.
                </p>
                <h3 className="font-display text-2xl text-white/80 mt-12 mb-4">Het nu</h3>
                <p className="text-lg font-light leading-relaxed text-stone-400">
                    De meeste bewegingen leven in herhaling of verwachting. Wat geweest is, wordt vastgehouden. Wat nog moet komen, wordt vooruitgeplaatst. Hier gebeurt iets anders. Niet omdat het beter is, maar omdat het niet anders kan. Het moment vóór betekenis. Het snijvlak waar niets besloten is. Waar de vorm nog niet gekozen is, en daarom niet hoeft te worden verdedigd. Geen instorting van mogelijkheden. Eerder het openlaten ervan.
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
                <span className="font-mono text-xs text-aether-violet tracking-widest uppercase mb-4 block">Ontmanteling</span>
                <h2 className="font-display text-4xl md:text-5xl">Het tetralemma</h2>
              </FadeInSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <FadeInSection>
                <div className="space-y-8 text-stone-300 font-light">
                   <p>
                     Niet kiezen blijkt geen strategie, maar een natuurlijk gevolg wanneer de vraag wegvalt.
                   </p>
                   <ul className="space-y-4 border-l border-white/10 pl-6 my-8 text-sm md:text-base text-stone-400">
                      <li>Niet: zijn.</li>
                      <li>Niet: niet-zijn.</li>
                      <li>Niet: beide.</li>
                      <li>Niet: geen van beide.</li>
                   </ul>
                   <p>
                     Niet als standpunt, maar als ontmanteling.
                   </p>
                   <p>
                     Wanneer elk denkbaar houvast zijn vanzelfsprekendheid verliest, blijft geen antwoord over — maar helderheid.
                   </p>
                   <p>
                     Leegte, sunyata, nulpunt: niet als concept, maar als wat overblijft wanneer concepten hun grip verliezen. Hier ontstaat niets door wil. Hier wordt niets afgedwongen. Vorm verschijnt omdat niets haar tegenhoudt.
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
              <h2 className="font-display text-3xl md:text-4xl mb-12 mt-12">Resonantie</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-lg font-light text-stone-300 mb-16">
                  <div>
                    <p className="mb-6">
                        Er is niets om lid van te zijn. Niets om te volgen. Niets om te geloven.
                    </p>
                    <p>
                        Wat hier gebeurt, gebeurt niet door instemming, maar door herkenning.
                    </p>
                  </div>
                  <div>
                    <p className="mb-6">
                        Een lichte verschuiving. Alsof iets in je al wist wat hier wordt aangeraakt, zonder het ooit benoemd te hebben.
                    </p>
                    <p>
                        De wereld lijkt even minder vastgeschroefd. Niet onwerkelijk, maar transparanter.
                    </p>
                  </div>
              </div>

              <div className="mb-12">
                 <CoherenceGraph />
              </div>

              <div className="p-8 border border-white/5 bg-white/5 rounded-full backdrop-blur-md inline-block">
                <p className="font-mono text-sm tracking-widest text-aether-cyan animate-pulse">
                  ALS DIT RESONEERT, IS ER NIETS BEGONNEN.
                </p>
              </div>

              <p className="mt-16 text-stone-500 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
                Vertraag niet om iets te bereiken. Vertraag omdat er niets te halen valt.
                <br/><br/>
                Laat de gedachten uitlopen. Luister naar wat geen stem nodig heeft.
                <br/><br/>
                Daar, vóór de vorm, is geen ontmoeting.
                <br/>
                Alleen wat altijd al aanwezig was.
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center relative z-10 border-t border-white/5 bg-void">
         <div className="font-mono text-[10px] text-aether-dim tracking-[0.5em] uppercase hover:text-aether-violet transition-colors duration-500 cursor-help">
            AETHER 9. 202X {"->"} ∞
         </div>
      </footer>
    </div>
  );
};

export default App;