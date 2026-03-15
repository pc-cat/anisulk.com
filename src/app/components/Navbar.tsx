"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for additional effects if desired
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Glassmorphism Navbar + Mobile Hamburger Toggle
  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-[100] transition-all duration-300">
        <nav className={`w-full flex items-center justify-between px-6 py-4 rounded-full border border-white/10 shadow-2xl transition-all duration-300 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-xl' : 'bg-zinc-900/60 backdrop-blur-md'}`}>
          {/* Logo functioning as Home Link */}
          <Link href="/" className="font-bold text-2xl tracking-tighter mix-blend-difference z-50 transition-opacity hover:opacity-80">
            anisul<span className="text-purple-500">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-zinc-400">
            <Link href="#about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors">Projects</Link>
          </div>

          {/* Right Actions / Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a href="#contact" className="hidden sm:flex items-center gap-3 cursor-pointer group">
              <span className="text-sm font-medium tracking-wide group-hover:text-purple-300 transition-colors">Contact me</span>
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Mobile Menu Button - ALWAYS VISIBLE ON MOBILE */}
            <button
              className="md:hidden relative z-[110] w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/10 backdrop-blur hover:bg-white/20 transition-all border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Full-Screen Purple Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-purple-900 flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col gap-8 text-center uppercase tracking-widest text-2xl font-black relative z-10">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors">About</Link>
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors">Portfolio</Link>
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors">Projects</Link>
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors">Contact</Link>
              </motion.div>
            </div>

            {/* Background design element on mobile */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

