import { Linkedin } from "lucide-react";

// Hardcoded Faculty Data
const facultyMembers = [
  {
    id: 1,
    name: "Dr. Avinash Ravi Raja",
    position: "Assistant Professor",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Dr. K. Ponappa",
    position: "Head of Department",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Dr. H. Chelladurai",
    position: "Associate Professor",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    linkedin: "#",
  },
];

const Faculty = () => {
  return (
    <section className="bg-[#f8f7f0] py-20 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-center text-black mb-16">
          Faculty
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyMembers.map((prof) => (
            <div
              key={prof.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-white shadow-sm cursor-pointer"
            >
              {/* Image with Grayscale to Color transition */}
              <img
                src={prof.image}
                alt={prof.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Top Right LinkedIn Icon */}
              <a
                href={prof.linkedin}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-blue-700 hover:bg-blue-600 hover:text-white transition-colors shadow-sm z-10"
              >
                <Linkedin size={20} />
              </a>

              {/* Bottom Text Overlay (Slides up on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="text-xl font-bold text-white font-serif tracking-wide">
                  {prof.name}
                </h3>
                <p className="text-sm text-neutral-300 font-sans mt-1 uppercase tracking-wider">
                  {prof.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
