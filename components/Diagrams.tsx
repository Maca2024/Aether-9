/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { useState, type FC } from 'react';
import { motion } from 'framer-motion';

// --- TETRALEMMA GATE ---
// Visualizes the 4 negations collapsing into the center void
export const TetralemmaGate: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const nodes = [
    { id: 1, label: "HET ZIJN", x: "50%", y: "10%", textPos: "-top-8" },
    { id: 2, label: "NIET-ZIJN", x: "90%", y: "50%", textPos: "-right-8" },
    { id: 3, label: "BEIDE", x: "50%", y: "90%", textPos: "-bottom-8" },
    { id: 4, label: "GEEN VAN BEIDE", x: "10%", y: "50%", textPos: "-left-8" },
  ];

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96">
        {/* Center Void */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div 
                className="w-4 h-4 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
             <motion.div 
                className="absolute w-32 h-32 rounded-full border border-aether-violet/30"
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.3, 0.1], rotate: 180 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <span className="absolute mt-12 text-[10px] font-mono tracking-[0.2em] text-aether-violet opacity-60">SUNYATA</span>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeWidth="1" />
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="white" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="40%" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
            <div 
                key={node.id}
                className="absolute w-4 h-4 -ml-2 -mt-2 group cursor-crosshair z-30"
                style={{ left: node.x, top: node.y }}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
            >
                <motion.div 
                    className={`w-full h-full rounded-full border border-white transition-all duration-300 ${hovered === node.id ? 'bg-white scale-150' : 'bg-void'}`}
                />
                <span className={`absolute ${node.textPos} w-32 text-center text-[10px] font-mono tracking-widest transition-all duration-300 ${hovered === node.id ? 'text-white opacity-100' : 'text-stone-600 opacity-60'}`}>
                    <span className="text-red-500 mr-1 line-through decoration-red-500/50">X</span> {node.label}
                </span>
            </div>
        ))}
    </div>
  );
};

// --- RESONANCE MONITOR (4Hz Theta Wave) ---
export const ResonanceMonitor: FC = () => {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-64 h-24 flex items-center justify-center">
                {/* Center Line */}
                <div className="absolute w-full h-[1px] bg-white/10"></div>
                
                {/* Waves */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-12 h-12 rounded-full border border-aether-cyan/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 3] }}
                        transition={{ 
                            duration: 4, // 4 seconds roughly aligns with slow breathing
                            repeat: Infinity, 
                            delay: i * 1.3,
                            ease: "linear" 
                        }}
                    />
                ))}
                
                <div className="z-10 text-aether-cyan text-xs font-mono tracking-widest animate-pulse">
                    4 Hz
                </div>
            </div>
        </div>
    );
};

// --- COHERENCE GRAPH (Synchronization Visualization) ---
export const CoherenceGraph: FC = () => {
    return (
        <div className="relative w-full h-48 flex items-end justify-center gap-1 opacity-70">
            {[...Array(20)].map((_, i) => {
                const height = 20 + Math.random() * 60;
                return (
                    <motion.div
                        key={i}
                        className="w-1 md:w-2 bg-gradient-to-t from-aether-violet to-transparent"
                        initial={{ height: `${height}%`, opacity: 0.3 }}
                        animate={{ 
                            height: [`${height}%`, `${height + 30}%`, `${height}%`],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.1
                        }}
                    />
                );
            })}
             <div className="absolute top-0 w-full h-full flex items-center justify-center pointer-events-none">
                 <div className="w-full h-[1px] bg-white/10" />
                 <span className="absolute right-0 top-[40%] text-[8px] font-mono text-aether-dim">SYNC.RATE: 99.9%</span>
             </div>
        </div>
    );
};