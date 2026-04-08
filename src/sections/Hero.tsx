import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = ["/campus-1.jpg", "/hero.jpg", "/lab-work.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // Gradient style class
  const gradientText =
    "bg-gradient-to-br from-[#a25fe7] to-[#2f41e3] bg-clip-text text-transparent font-semibold";

  return (
    <section className="bg-primary-bg flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-10">
        {/* TEXT SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-title tracking-wide text-black uppercase">
            Smart Manufacturing
          </h1>

          <p className="font-sans text-md md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Engineering the future through convergence of{" "}
            <span className={gradientText}>mechanical systems</span>,{" "}
            <span className={gradientText}>AI</span> and{" "}
            <span className={gradientText}>cloud computing</span>.
          </p>
        </div>

        {/* CAROUSEL SECTION */}
        {/* w-full ensures it matches the width of the container above */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden shadow-2xl group">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="z-10 w-full h-full object-cover shrink-0"
              />
            ))}
          </div>

          {/* Navigation Arrows (Visible on Hover) */}
          <button
            onClick={() =>
              setCurrent(current === 0 ? slides.length - 1 : current - 1)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() =>
              setCurrent(current === slides.length - 1 ? 0 : current + 1)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === i ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
