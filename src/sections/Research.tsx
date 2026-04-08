import { ArrowRight } from "lucide-react";

// Hardcoded Data (To be replaced by API later)
const publications = [
  {
    id: 1,
    title: "AI in Smart Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    description: "Optimizing assembly lines using computer vision.",
  },
  {
    id: 2,
    title: "IoT Based Sensor Networks",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    description: "Real-time data acquisition for predictive maintenance.",
  },
  {
    id: 3,
    title: "Sustainable Industry 4.0",
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=600",
    description: "Reducing carbon footprint in heavy manufacturing.",
  },
  {
    id: 4,
    title: "Additive Manufacturing",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600",
    description: "3D printing applications in aerospace components.",
  },
];

const Research = () => {
  return (
    <section className="bg-primary-bg py-20 w-full border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
        {/* LEFT COLUMN: Sticky Heading */}
        <div className="md:w-1/4 md:sticky md:top-32 shrink-0">
          <h2 className="text-3xl md:text-5xl font-sans text-black leading-tight mb-4">
            Research <br className="hidden" /> Publication
          </h2>
          <p className="text-neutral-500 mb-6">
            Exploring the frontiers of technology and innovation.
          </p>
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-800 hover:text-[#c85ae5] transition-colors">
            View All Research <ArrowRight size={16} />
          </button>
        </div>

        <div className="md:w-3/4 w-full flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="min-w-70 md:min-w-[320px] snap-center flex flex-col gap-4 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl aspect-square shadow-sm">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content */}
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-neutral-900 group-hover:text-[#c85ae5] transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-neutral-500 line-clamp-2">
                  {pub.description}
                </p>
              </div>
            </div>
          ))}

          {/* Spacer to allow scrolling past the last item comfortably */}
          <div className="min-w-5" />
        </div>

        {/* Mobile "View All" button (visible only on small screens) */}
        <div className="md:hidden w-full flex justify-start">
          <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-800 hover:text-[#c85ae5] transition-colors">
            View All Research <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Research;
