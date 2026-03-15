export default function Projects() {
  const events = [
    { num: "01", title: "Cinematic Visions\nUnveiled", location: "Madrid Gallery, Spain, 21 Nov 2023" },
    { num: "02", title: "Frames in\nMotion", location: "Manchester Museum, UK, 20 Nov 2023" },
    { num: "03", title: "Journey Through\nTime", location: "Milan Gallery, Italy, 19 Nov 2023" },
    { num: "04", title: "Experimental\nNarratives", location: "Paris Museum, France, 18 Nov 2023" },
  ];

  return (
    <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col md:flex-row items-baseline md:items-center justify-between group border-b border-zinc-900 pb-12 cursor-pointer hover:border-purple-500/50 transition-colors">
            
            <div className="flex gap-8 items-start md:items-center mb-6 md:mb-0 w-full md:w-2/3">
              <span className="text-zinc-600 text-sm">{event.num}</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter italic leading-[1.1] whitespace-pre-line group-hover:text-purple-400 transition-colors">
                {event.title}
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full md:w-1/3 justify-end">
              <span className="text-xs uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                {event.location}
              </span>
              <button className="px-6 py-2 rounded-full border border-zinc-700 hover:border-purple-500 hover:bg-purple-900/20 hover:text-purple-300 transition-all text-sm uppercase tracking-wider shrink-0">
                Buy Ticket
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
