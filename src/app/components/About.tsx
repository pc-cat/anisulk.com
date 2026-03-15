"use client";

import { Crosshair, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-40 overflow-hidden flex items-center justify-center min-h-[800px] bg-black">
      
      {/* Decorative corners */}
      <div className="absolute top-16 left-16 text-zinc-800">
        <Crosshair size={32} strokeWidth={1} />
      </div>
      <div className="absolute top-16 right-16 text-zinc-800">
        <Crosshair size={32} strokeWidth={1} />
      </div>
      <div className="absolute bottom-16 left-16 text-zinc-800">
        <Crosshair size={32} strokeWidth={1} />
      </div>
      <div className="absolute bottom-16 right-16 text-zinc-800">
        <Crosshair size={32} strokeWidth={1} />
      </div>

      {/* Decorative plus signs on sides */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 text-zinc-800">
        <Plus size={48} strokeWidth={1} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-8 text-zinc-800">
        <Plus size={48} strokeWidth={1} />
      </div>

      {/* Sunburst/Radial Background using CSS */}
      <div className="absolute absolute-center w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,rgba(0,0,0,0)_70%)] opacity-70 pointer-events-none"></div>
      
      {/* Abstract repeating shapes to mimic the "sunburst" effect behind the typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-30">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute top-1/2 left-1/2 w-8 h-[300px] bg-zinc-900 rounded-full origin-bottom -translate-x-1/2 -translate-y-full blur-xl"
            style={{ transform: `translateX(-50%) translateY(-100%) rotate(${i * 30}deg)` }}
          ></div>
        ))}
      </div>

      {/* Stunning Typography replacing the Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl px-8 flex flex-col items-center text-center"
      >
        <span className="text-purple-500 tracking-[0.3em] text-sm font-bold uppercase mb-6 drop-shadow-lg">
          About the artist
        </span>
        
        <h2 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.9] mb-8">
          capturing <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-800 italic pr-4">
            the unseen
          </span>
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl leading-relaxed font-light mt-4">
          Rooted in the philosophy that every shadow holds a story, my work blurs the line between motion and stillness. I create visual poetry—moments suspended in time that provoke thought and evoke raw human emotion.
        </p>

        <div className="mt-16 flex items-center gap-6 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="w-16 h-[1px] bg-purple-500/50"></div>
          <span className="text-white text-xs tracking-widest uppercase font-semibold">Discover my process</span>
          <div className="w-16 h-[1px] bg-purple-500/50"></div>
        </div>
      </motion.div>

    </section>
  );
}
