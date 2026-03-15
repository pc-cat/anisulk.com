"use client";

import { motion } from "framer-motion";

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-white text-black py-4 flex items-center shadow-lg relative z-0">
      <motion.div
        className="flex whitespace-nowrap pt-2"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* We repeat the text multiple times to ensure continuous scroll */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter pr-8 flex items-center gap-8">
            {text} <span className="w-4 h-4 rounded-full bg-purple-600 block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
