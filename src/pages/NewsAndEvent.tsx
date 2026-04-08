import React from "react";

// --- Data Types ---
interface NewsEventItem {
  id: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

// --- Hardcoded JSON Data ---
const newsAndEventsData: NewsEventItem[] = [
  {
    id: "1",
    date: "17 Feb 2026",
    time: "03:34 PM",
    location: "Jabalpur, MP",
    description:
      "Garry, Harj, Jared, and Diana talk about contrarian bets — the ideas that look impossible until they work. From Uber and Coinbase to DoorDash and Flock Safety, they share how founders find opportunity where others see dead ends.",
  },
  {
    id: "2",
    date: "17 Feb 2026",
    time: "03:34 PM",
    location: "Jabalpur, MP",
    description:
      "Garry, Harj, Jared, and Diana talk about contrarian bets — the ideas that look impossible until they work. From Uber and Coinbase to DoorDash and Flock Safety, they share how founders find opportunity where others see dead ends.",
  },
  {
    id: "3",
    date: "17 Feb 2026",
    time: "03:34 PM",
    location: "Jabalpur, MP",
    description:
      "Garry, Harj, Jared, and Diana talk about contrarian bets — the ideas that look impossible until they work. From Uber and Coinbase to DoorDash and Flock Safety, they share how founders find opportunity where others see dead ends.",
  },
];

const NewsAndEvent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f2] font-sans p-6 md:p-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 font-medium text-gray-900">
          News & Events
        </h1>

        {/* List of Events */}
        <div className="flex flex-col gap-8 md:gap-10">
          {newsAndEventsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 md:gap-10 group"
            >
              {/* Left Column: Metadata (Date, Time, Location) */}
              <div className="w-full md:w-56 flex-shrink-0 flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-3 md:gap-4 md:pt-4 text-gray-600">
                {/* Date */}
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm md:text-base font-medium text-gray-800">
                    {item.date}
                  </span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm md:text-base">{item.time}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm md:text-base">{item.location}</span>
                </div>
              </div>

              {/* Right Column: Description Card */}
              <div className="flex-grow bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <p className="text-gray-700 text-[15px] md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvent;
