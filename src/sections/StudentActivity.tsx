import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Robotics Club",
    description: "Building autonomous rovers for national competitions.",
    image: "/lab-work.jpg",
    className: "md:col-span-2 md:row-span-2", // Large item
  },
  {
    id: 2,
    title: "Circuit Design Workshop",
    description: "Hands-on session on PCB fabrication.",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-1 md:row-span-1", // Standard item
  },
  {
    id: 3,
    title: "Tech Fest 2025",
    description: "Showcasing student innovations.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-1 md:row-span-2", // Tall item
  },
  {
    id: 4,
    title: "Guest Lecture",
    description: "Industry experts sharing insights on Industry 4.0.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 md:row-span-1", // Wide item
  },
];

const StudentActivity = () => {
  return (
    <section className="bg-primary-bg py-4 px-6 w-full">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-sans text-black mb-4">
            Student Activity
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Beyond the classroom, our students engage in clubs, hackathons, and
            cultural events.
          </p>
        </div>

        {/* BENTO GRID WITH HOVER EFFECT 
           - 'group/gallery': Names the group so we can target children based on container hover.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 group/gallery">
          {activities.map((item) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer shadow-sm
                transition-all duration-500 ease-in-out
                ${item.className}
                
                /* HOVER LOGIC:
                   1. group-hover/gallery:grayscale -> When container is hovered, make THIS item grayscale.
                   2. hover:!grayscale-0 -> But if THIS specific item is hovered, force color back.
                   3. hover:scale-[1.02] -> Slight zoom on the active item.
                */
                group-hover/gallery:grayscale hover:!grayscale-0 hover:scale-[1.02] hover:z-10
              `}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Text Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-4 hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mt-2 translate-y-4 hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-4">
          <Link
            to="/gallery"
            className="group flex items-center gap-3 px-8 py-3 bg-white border border-neutral-200 rounded-full shadow-sm hover:shadow-md hover:border-[#c85ae5] transition-all duration-300"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-neutral-800 group-hover:text-[#c85ae5] transition-colors">
              Explore Gallery
            </span>
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#c85ae5] group-hover:text-white transition-colors">
              <MoveRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentActivity;
