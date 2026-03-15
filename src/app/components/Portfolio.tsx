export default function Portfolio() {
  const items = [
    { id: 1, shape: "rounded-[40px] rounded-tr-[100px]", bg: "bg-zinc-900", col: "col-span-2", row: "row-span-2" },
    { id: 2, shape: "rounded-[40px] rounded-tl-[100px]", bg: "bg-zinc-800", col: "col-span-2", row: "row-span-2" },
    { id: 3, shape: "rounded-[40px] rounded-bl-[100px]", bg: "bg-zinc-800", col: "col-span-2", row: "row-span-2" },
    { id: 4, shape: "rounded-[60px]", bg: "bg-zinc-900", col: "col-span-2", row: "row-span-2" },
    { id: 5, shape: "rounded-[40px]", bg: "bg-purple-900 border border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.2)]", col: "col-span-2", row: "row-span-2" },
  ];

  return (
    <section id="portfolio" className="py-32 px-8 relative overflow-hidden bg-black flex flex-col items-center">
      
      {/* Portfolio Grid Layout */}
      <div className="w-full max-w-6xl relative z-10">
        {/* We use CSS grid to arrange the overlapping images */}
        <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[800px]">
          
          {/* Top Left Image */}
          <div className={`col-span-2 row-span-2 rounded-tl-[120px] rounded-[40px] bg-zinc-900 relative overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-6xl">🏢</div>
          </div>

          {/* Top Middle Image */}
          <div className={`col-span-2 row-span-2 rounded-xl bg-zinc-800 relative overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-6xl">🌳</div>
          </div>

          {/* Top Right Image */}
          <div className={`col-span-2 row-span-2 rounded-tr-[120px] rounded-[40px] bg-zinc-900 relative overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-6xl">🏛️</div>
          </div>

          {/* Bottom Left Image */}
          <div className={`col-span-2 row-span-2 rounded-bl-[120px] rounded-[40px] bg-zinc-800 relative overflow-hidden mt-8`}>
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-6xl">🎡</div>
          </div>

          {/* Bottom Middle Image */}
          <div className={`col-span-2 row-span-2 rounded-[40px] bg-zinc-900 relative overflow-hidden mt-8`}>
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-6xl">👤</div>
          </div>

          {/* Bottom Right Image (Accent) */}
          <div className={`col-span-2 row-span-2 rounded-br-[120px] rounded-[40px] bg-purple-900 border border-purple-700 relative overflow-hidden mt-8 shadow-[0_0_40px_rgba(147,51,234,0.3)]`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,transparent_100%)] mix-blend-overlay"></div>
            <div className="absolute inset-0 flex items-center justify-center text-purple-300/50 text-6xl">🌿</div>
          </div>

        </div>
      </div>

      {/* Massive Centered Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full text-center mix-blend-difference text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
        <h2 className="text-[clamp(4rem,12vw,12rem)] font-black tracking-tighter leading-none hover:text-purple-400 transition-colors duration-700">
          portfolio
        </h2>
      </div>

    </section>
  );
}
