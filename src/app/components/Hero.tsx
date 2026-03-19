'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import * as motion from 'framer-motion/client';
import { Variants } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';
import { BatmanModel } from './batman';

const xIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const snapchatIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.22 1.48c-3.1 0-5.46 2.05-5.46 4.7 0 1-.06 2.2-.18 3.06-.11.77-.38 1.43-.88 1.94-.52.54-1.21.98-1.57 1.2-.66.4-1.6.93-1.6 1.5 0 .8.89 1.44 2.11 1.57.17.02.4.02.5.23.08.17 0 .42-.1.65-.18.42-.56 1.33 1.07 1.33.8 0 1.8-.75 2.11-.98.24-.18.57-.42.94-.42s.7.24.93.4c.55.43 1.94 1.47 3.51 1.47 1.58 0 2.97-1.05 3.5-1.46.25-.19.57-.43.94-.43.36 0 .69.24.93.41.33.24 1.35 1.02 2.15 1.02 1.56 0 1.25-.92 1.08-1.32-.1-.23-.17-.49-.09-.66.11-.22.35-.22.52-.24 1.21-.13 2.1-.77 2.1-1.56 0-.58-.93-1.12-1.58-1.5-.37-.22-1.05-.66-1.57-1.2-.5-.51-.77-1.17-.88-1.94-.12-.87-.19-2.07-.19-3.07 0-2.65-2.37-4.7-5.48-4.7z" />
  </svg>
);

function ModelFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color="#7c3aed" wireframe />
    </mesh>
  );
}

const socials = [
  { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com/pc_cat' },
  { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/kazimoyeen/' },
  { name: 'X', icon: xIcon, href: 'https://x.com/MoyeenAnisul' },
  { name: 'Snapchat', icon: snapchatIcon, href: 'https://snapchat.com/@fahoem' }
];

export default function Hero() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const modelScale = isDesktop ? 0.02 : isTablet ? 0.011 : 0.009;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const mouseXRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;
    const { left, width } = sectionRef.current.getBoundingClientRect();
    mouseXRef.current = ((e.clientX - left) / width) * 2 - 1;
  }

  function handleMouseLeave() {
    mouseXRef.current = 0;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen pt-32 px-8 flex items-center relative"
    >
      {/* ── Subtle purple atmospheric glow ──────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 72% 65%, rgba(139,92,246,0.1) 0%, transparent 45%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 68% 80%, rgba(124,58,237,0.08) 0%, transparent 30%)',
        }}
      />

      {/* ── Full-section 3D Canvas (Hidden on Mobile) ──────────── */}
      {mounted && !isMobile && (
        <Canvas
          dpr={[1, 1.5]} // Optimize pixel ratio for performance
          camera={{ position: [2, 0, 5], fov: 60 }}
          shadows
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[3, 5, 3]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
            color="#c4b5fd"
          />
          <pointLight position={[-3, 2, -2]} intensity={0.8} color="#7c3aed" />
          <Suspense fallback={<ModelFallback />}>
            <group position={[2, 0, 0]}>
              <BatmanModel scale={modelScale} mouseX={mouseXRef} />

              {/* Guaranteed smooth purple floor glow */}
              <mesh position={[0, -1.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[12, 12]} />
                <meshBasicMaterial
                  transparent
                  depthWrite={false}
                  opacity={0.8}
                  blending={THREE.AdditiveBlending}
                  map={new THREE.CanvasTexture(
                    (() => {
                      const canvas = document.createElement('canvas');
                      canvas.width = 256;
                      canvas.height = 256;
                      const ctx = canvas.getContext('2d')!;
                      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
                      grad.addColorStop(0, 'rgba(147, 51, 234, 1)'); // Sharp purple center
                      grad.addColorStop(0.3, 'rgba(124, 58, 237, 0.4)'); // Smooth fade
                      grad.addColorStop(1, 'rgba(124, 58, 237, 0)');
                      ctx.fillStyle = grad;
                      ctx.fillRect(0, 0, 256, 256);
                      return canvas;
                    })()
                  )}
                />
              </mesh>
            </group>
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      )}

      {/* ── Hero text ──────────────────────────────────────────── */}
      <motion.div
        className="flex-1 flex flex-col justify-center max-w-2xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="font-black tracking-tighter"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)', lineHeight: 0.9 }}
          >
            <div className="flex flex-wrap gap-x-4 pb-4">
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="font-light italic text-zinc-400"
              >
                i&apos;m
              </motion.span>
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-300 to-purple-500 italic inline-block pr-8 pb-1"
              >
                f**kin&apos;
              </motion.span>
            </div>

            <div className="flex flex-wrap gap-x-4 mb-1">
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-white"
              >
                around
              </motion.span>
            </div>

            <div className="flex flex-wrap gap-x-4">
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="font-light italic text-zinc-500"
              >
                &amp;
              </motion.span>
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                style={{ WebkitTextStroke: '1.5px white', color: 'transparent' }}
              >
                finding
              </motion.span>
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                style={{ WebkitTextStroke: '1.5px white', color: 'transparent' }}
              >
                out
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">My socials:</p>
          <motion.div variants={itemVariants} className="flex gap-4 mb-16">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-purple-500 hover:text-purple-400 transition-colors cursor-pointer group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
