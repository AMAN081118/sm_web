import React from "react";

// --- Data Types ---
interface ResearchItem {
  id: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl?: string;
}

// --- Hardcoded JSON Data ---
const researchData: ResearchItem[] = [
  {
    id: "1",
    description:
      "Garry, Harj, Jared, and Diana talk about contrarian bets the ideas that look impossible until they work. From Uber and Coinbase to DoorDash and Flock Safety.",
    linkText: "Visit Site →",
    linkUrl: "#",
  },
  {
    id: "2",
    description:
      "Garry, Harj, Jared, and Diana talk about contrarian bets the ideas that look impossible until they work. From Uber and Coinbase to DoorDash and Flock Safety.",
    linkText: "Visit Site →",
    linkUrl: "#",
  },
];

const Research: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-bg font-sans p-6 md:p-12 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl text-center mb-10 font-normal text-gray-900">
          Research
        </h1>

        {/* List of Research Cards */}
        <div className="flex flex-col gap-6">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col md:flex-row gap-6 transition-shadow hover:shadow-md"
            >
              {/* Image / Placeholder Area */}
              <div className="w-full md:w-[200px] h-[200px] bg-[#d1d1d1] rounded-lg flex-shrink-0 overflow-hidden">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt="Research cover"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-grow justify-between">
                <p className="text-gray-800 text-[15px] sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Action Link */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff4433] hover:text-red-600 text-sm font-medium self-end mt-6 inline-block transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
