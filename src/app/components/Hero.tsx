import { ArrowUpRight } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="min-h-screen pt-32 px-8 flex flex-col md:flex-row gap-8 relative overflow-hidden">
      {/* Left Content */}
      <motion.div 
        className="flex-1 flex flex-col justify-center max-w-2xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-[clamp(4rem,10vw,8rem)] leading-[0.85] font-black tracking-tighter mb-8">
          visual<br />poetry
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between mb-16 max-w-md gap-8">
          <p className="text-zinc-400 text-sm max-w-[240px]">
            Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-4 mb-16">
          {['yt', 'fb', 'ig', 'tw'].map((social) => (
            <div key={social} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-xs uppercase tracking-wider hover:border-purple-500 hover:text-purple-400 transition-colors cursor-pointer">
              {social}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="flex gap-12 text-sm">
          <div>
            <div className="text-5xl font-bold tracking-tighter mb-2 italic">+250k</div>
            <div className="text-zinc-400 max-w-[150px] leading-snug">
              Views from crossing media platforms in live impression
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold tracking-tighter mb-2 italic">+800k</div>
            <div className="text-zinc-400 max-w-[150px] leading-snug">
              Views outside text, revealing everything that surpasses masses
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content / Image Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 relative min-h-[500px] mt-12 md:mt-0 rounded-3xl overflow-hidden bg-purple-900 flex items-center justify-center border border-purple-800/50"
      >
        {/* Placeholder for the large image and signature overlay */}
        <div className="absolute top-8 left-8 text-purple-300 font-signature text-6xl opacity-60 italic">
          Photography
        </div>
        
        {/* Mock image content */}
        <div className="w-64 h-64 rounded-full bg-purple-600/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="text-purple-200/40 text-sm tracking-widest uppercase relative z-10 text-center">
          <div className="mb-4">Portrait / Motion</div>
          <div>Image Placeholder</div>
        </div>

        {/* Floating action buttons */}
        <div className="absolute left-8 bottom-32 flex flex-col gap-4 z-20">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-purple-400 transition-colors">
            📸
          </div>
          <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden border-2 border-transparent hover:border-purple-400 cursor-pointer transition-colors shadow-lg flex items-center justify-center text-xl">
             👤
          </div>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-zinc-900 transition-colors">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
