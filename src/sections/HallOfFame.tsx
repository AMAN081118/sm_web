import React, { useState } from "react";
import { useHallOfFame } from "../hooks/useHallOfFame";

const HallOfFame: React.FC = () => {
  const { data, isLoading, error } = useHallOfFame();

  const [showAllCoordinators, setShowAllCoordinators] = useState(false);
  const [showAllCompetitions, setShowAllCompetitions] = useState(false);
  const [showAllInterns, setShowAllInterns] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary-bg py-20 px-6 flex items-center justify-center">
        <div className="text-xl text-neutral-500 animate-pulse font-serif">
          Loading Hall of Fame...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-primary-bg py-20 px-6 flex items-center justify-center text-red-500">
        Failed to load Hall of Fame data.
      </div>
    );
  }

  // Slicing logic (Limit to 10 if not expanded)
  const displayedCoordinators = showAllCoordinators
    ? data.coordinators
    : data.coordinators.slice(0, 10);
  const displayedCompetitions = showAllCompetitions
    ? data.competitions
    : data.competitions.slice(0, 10);
  const displayedInterns = showAllInterns
    ? data.interns
    : data.interns.slice(0, 10);

  // Reusable View More Button Component
  const ViewMoreButton = ({
    isExpanded,
    onClick,
    totalCount,
  }: {
    isExpanded: boolean;
    onClick: () => void;
    totalCount: number;
  }) => {
    if (totalCount <= 10) return null;
    return (
      <div className="flex justify-center mt-8">
        <button
          onClick={onClick}
          className="px-6 py-2 rounded-full border border-neutral-300 text-neutral-600 font-medium text-sm hover:bg-neutral-100 transition-colors"
        >
          {isExpanded ? "View Less" : `View All (${totalCount})`}
        </button>
      </div>
    );
  };

  return (
    <section className="bg-primary-bg py-12 px-6 w-full min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-black">
          Hall of Fame
        </h2>

        {/* --- SECTION 1: COORDINATORS --- */}
        {data.coordinators.length > 0 && (
          <div>
            <h3 className="text-2xl font-sans text-neutral-600 mb-8 border-l-4 border-[#c85ae5] pl-4">
              Coordinators / Co-coordinators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayedCoordinators.map((person) => (
                <div key={person.id} className="flex flex-col gap-3 group">
                  {/* <div className="overflow-hidden rounded-2xl shadow-sm aspect-square bg-white">
                    <img
                      src={person.image || "https://via.placeholder.com/400"}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div> */}
                  <div>
                    <h4 className="font-bold text-lg text-black">
                      {person.name}
                    </h4>
                    <p className="text-sm font-semibold text-neutral-600">
                      {person.role}
                    </p>
                    <p className="text-xs text-neutral-500">{person.society}</p>
                  </div>
                </div>
              ))}
            </div>
            <ViewMoreButton
              isExpanded={showAllCoordinators}
              onClick={() => setShowAllCoordinators(!showAllCoordinators)}
              totalCount={data.coordinators.length}
            />
          </div>
        )}

        {/* --- SECTION 2: COMPETITIONS --- */}
        {data.competitions.length > 0 && (
          <div>
            <h3 className="text-2xl font-sans text-neutral-600 mb-8 border-l-4 border-blue-500 pl-4">
              Competitions
            </h3>
            <div className="grid grid-cols-1 gap-8">
              {displayedCompetitions.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-full md:w-1/4 flex flex-col gap-2">
                    {comp.logo && (
                      <img
                        src={comp.logo}
                        alt={`${comp.name} Logo`}
                        className="h-8 w-auto object-contain self-start mb-2 opacity-80"
                        loading="lazy"
                      />
                    )}
                    <h4 className="text-xl font-bold text-red-500 font-sans tracking-wide">
                      {comp.name}
                    </h4>
                    <div className="text-black text-3xl font-serif leading-none">
                      {comp.rank}
                    </div>
                    <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest">
                      {comp.date}
                    </p>
                  </div>

                  <div className="hidden md:block w-px h-24 bg-neutral-200"></div>

                  <div className="flex-grow">
                    <h5 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                      Team Members
                    </h5>
                    <div className="flex flex-wrap gap-6">
                      {comp.team.map((member, i) => (
                        <div key={i} className="flex items-center gap-3">
                          {/* <img
                            src={
                              member.img || "https://via.placeholder.com/100"
                            }
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                            loading="lazy"
                          /> */}
                          <div>
                            <p className="text-sm font-bold text-neutral-900">
                              {member.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ViewMoreButton
              isExpanded={showAllCompetitions}
              onClick={() => setShowAllCompetitions(!showAllCompetitions)}
              totalCount={data.competitions.length}
            />
          </div>
        )}

        {/* --- SECTION 3: INTERNS --- */}
        {data.interns.length > 0 && (
          <div>
            <h3 className="text-2xl font-sans text-neutral-600 mb-8 border-l-4 border-green-500 pl-4">
              Interns
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayedInterns.map((intern) => (
                <div key={intern.id} className="flex flex-col gap-3 group">
                  {/* <div className="overflow-hidden rounded-2xl shadow-sm aspect-square bg-white">
                    <img
                      src={intern.image || "https://via.placeholder.com/400"}
                      alt={intern.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div> */}
                  <div>
                    <h4 className="font-bold text-lg text-black">
                      {intern.name}
                    </h4>
                    <p className="text-sm text-neutral-600">{intern.company}</p>
                    <p className="text-sm font-bold text-black mt-1">
                      {intern.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <ViewMoreButton
              isExpanded={showAllInterns}
              onClick={() => setShowAllInterns(!showAllInterns)}
              totalCount={data.interns.length}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HallOfFame;
