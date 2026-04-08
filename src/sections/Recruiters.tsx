const row1 = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
];

const row2 = [
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
];

const Recruiters = () => {
  return (
    <section className="bg-white py-8 w-full overflow-hidden">
      {/* 1. Inline Styles for Animation (No tailwind.config needed) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-sans font-medium text-black">
          Our Recruiters
        </h2>
        <p className="mt-4 text-neutral-500 font-sans max-w-2xl mx-auto">
          Top industry leaders who trust our students.
        </p>
      </div>

      {/* --- ROW 1: Moves Left --- */}
      <div className="flex mb-8 overflow-hidden relative">
        <div className="flex min-w-full shrink-0 items-center gap-16 px-8 animate-marquee">
          {[...row1, ...row1, ...row1].map((logo, index) => (
            <div
              key={index}
              className="h-12 md:h-16 w-32 md:w-40 flex items-center justify-center hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo}
                alt="Recruiter"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- ROW 2: Moves Right (Opposite) --- */}
      <div className="flex overflow-hidden relative">
        <div className="flex min-w-full shrink-0 items-center gap-16 px-8 animate-marquee-reverse">
          {[...row2, ...row2, ...row2].map((logo, index) => (
            <div
              key={index}
              className="h-12 md:h-16 w-32 md:w-40 flex items-center justify-center "
            >
              <img
                src={logo}
                alt="Recruiter"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
