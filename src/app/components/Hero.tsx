import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import * as motion from 'framer-motion/client';

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

const socials = [
  { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com/pc_cat' },
  { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/kazimoyeen/' },
  { name: 'X', icon: xIcon, href: 'https://x.com/MoyeenAnisul' },
  { name: 'Snapchat', icon: snapchatIcon, href: 'https://snapchat.com/@fahoem' }
];

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
        {/* Creative split-word typographic hero */}
        <div className="mb-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="leading-[0.85] font-black tracking-tighter"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
          >
            {/* Line 1 */}
            <div className="flex flex-wrap gap-x-4 mb-1">
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="font-light italic text-zinc-400"
              >
                i&apos;m
              </motion.span>
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white italic skew-x-[-4deg] inline-block px-1 pb-1"
              >
                f**kin
              </motion.span>
            </div>

            {/* Line 2 */}
            <div className="flex flex-wrap gap-x-4 mb-1">
              <motion.span
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-white"
              >
                around
              </motion.span>
            </div>

            {/* Line 3 */}
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
        <motion.div variants={itemVariants} className="flex gap-4 mb-16">
          {socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-purple-500 hover:text-purple-400 transition-colors cursor-pointer group">
              <div className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
            </a>
          ))}
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
