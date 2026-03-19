import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-8 relative overflow-hidden bg-black flex flex-col items-center">
      
      {/* Container wrapper for relative positioning */}
      <div className="w-full max-w-6xl relative">
        {/* Portfolio Grid Layout */}
        <a 
          href="https://www.behance.net/kazianisul"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full relative z-10 block group/portfolio cursor-pointer"
        >
          {/* We use CSS grid to arrange the overlapping images */}
          <div className="grid grid-cols-4 grid-rows-[repeat(12,minmax(0,1fr))] md:grid-cols-6 md:grid-rows-[repeat(8,minmax(0,1fr))] gap-4 h-[1800px] sm:h-[2000px] md:h-[1600px]">
            
            {/* Item 1 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-tl-[120px] md:rounded-[40px] bg-zinc-900 relative overflow-hidden group`}>
              <Image src="/images/1.webp" alt="Portfolio 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 2 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-xl bg-zinc-800 relative overflow-hidden group`}>
              <Image src="/images/2.webp" alt="Portfolio 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 3 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-tr-[120px] md:rounded-[40px] bg-zinc-900 relative overflow-hidden group`}>
              <Image src="/images/3.webp" alt="Portfolio 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 4 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-[40px] bg-zinc-800 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/4.webp" alt="Portfolio 4" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 5 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-[40px] bg-zinc-900 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/5.webp" alt="Portfolio 5" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 6 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-[40px] bg-zinc-800 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/6.webp" alt="Portfolio 6" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 7 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-xl bg-zinc-900 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/7.webp" alt="Portfolio 7" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 8 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-[40px] bg-zinc-800 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/8.webp" alt="Portfolio 8" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 9 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-xl bg-zinc-900 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/9.webp" alt="Portfolio 9" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 10 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-bl-[120px] md:rounded-[40px] bg-zinc-800 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/10.webp" alt="Portfolio 10" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 11 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-[40px] bg-zinc-900 relative overflow-hidden md:mt-8 group`}>
              <Image src="/images/11.webp" alt="Portfolio 11" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Item 12 */}
            <div className={`col-span-2 row-span-2 rounded-[30px] md:rounded-br-[120px] md:rounded-[40px] bg-purple-900 border border-purple-700 relative overflow-hidden md:mt-8 shadow-[0_0_40px_rgba(147,51,234,0.3)] group`}>
              <Image src="/images/12.webp" alt="Portfolio 12" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,transparent_100%)] mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

          </div>
        </a>

        {/* Massive Centered Text Overlay */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full text-center mix-blend-difference text-purple-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          <h2 className="text-[clamp(4rem,12vw,12rem)] font-black tracking-tighter leading-none hover:text-purple-300 transition-colors duration-700">
            portfolio
          </h2>
        </div>
      </div>

    </section>
  );
}
