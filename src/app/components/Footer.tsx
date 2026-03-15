"use client";

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-8 px-8 overflow-hidden relative">
      {/* Footer Top */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="font-bold text-2xl tracking-tighter mb-8 md:mb-0">
          on<span className="text-purple-500">.</span>
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-400">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-purple-400 transition-colors">About</Link>
          <Link href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link>
          <Link href="#exhibitions" className="hover:text-purple-400 transition-colors">Exhibitions</Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors text-white font-bold">Contact</Link>
        </div>
      </div>

      {/* Massive Text (Vidéaste) - Now Clickable Back to Top */}
      <div 
        onClick={scrollToTop}
        className="w-full relative h-[30vh] md:h-[40vh] flex items-end justify-center overflow-hidden cursor-pointer group"
      >
        <h2 className="text-[clamp(6rem,20vw,24rem)] font-black tracking-tighter leading-none m-0 p-0 text-center w-full group-hover:text-purple-400 transition-colors duration-700">
          vidéaste
        </h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm text-sm uppercase tracking-widest px-6 py-2 rounded-full border border-purple-500">
          Back to Top ↑
        </div>
      </div>

      {/* Optional decorative overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>
    </footer>
  );
}
