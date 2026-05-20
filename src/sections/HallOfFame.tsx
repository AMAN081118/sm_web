import React, { useState } from "react";
import { useHallOfFame } from "../hooks/useHallOfFame";
import { Lightbulb, FileText, Award, Star, ExternalLink } from "lucide-react";

// --- Sub-component for individual Achievement Cards to handle "Read More" state ---
const AchievementCard = ({
  achievement,
  getCategoryIcon,
  getCategoryColor,
}: {
  achievement: any;
  getCategoryIcon: (cat?: string | null) => React.ReactNode;
  getCategoryColor: (cat?: string | null) => string;
}) => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Character limit before truncating text
  const MAX_LENGTH = 150;
  const shouldTruncate =
    achievement.description && achievement.description.length > MAX_LENGTH;

  return (
    // md:pl-12 adds padding for the timeline ONLY on desktop. On mobile, it's 0.
    <div className="relative md:pl-12">
      {/* Timeline Icon Node - Hidden on mobile, flex on desktop */}
      <div className="hidden md:flex absolute -left-4.25 top-0 h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-neutral-200 shadow-sm z-10">
        {getCategoryIcon(achievement.category)}
      </div>

      {/* Achievement Card */}
      <div className="group rounded-2xl border border-neutral-200 bg-white p-5 md:p-8 shadow-sm transition-all hover:shadow-md hover:border-neutral-300 flex flex-col gap-4">
        {/* Meta Header: Category & Date */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Show the icon inline on mobile since the timeline is hidden */}
            <div className="md:hidden flex items-center justify-center">
              {getCategoryIcon(achievement.category)}
            </div>
            {achievement.category && (
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getCategoryColor(achievement.category)}`}
              >
                {achievement.category}
              </span>
            )}
          </div>

          {achievement.achievement_date && (
            <span className="text-sm font-medium text-neutral-400">
              {achievement.achievement_date}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-xl md:text-2xl font-bold text-neutral-900 leading-tight">
          {achievement.title}
        </h4>

        {/* Compact Members List */}
        {achievement.members?.length > 0 && (
          <div className="text-sm text-neutral-600">
            <span className="font-bold text-neutral-900">By: </span>
            {achievement.members.map((m: any) => m.name).join(", ")}
          </div>
        )}

        {/* Truncated Description Logic */}
        {achievement.description && (
          <div>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {isTextExpanded || !shouldTruncate
                ? achievement.description
                : `${achievement.description.substring(0, MAX_LENGTH)}...`}
            </p>
            {shouldTruncate && (
              <button
                onClick={() => setIsTextExpanded(!isTextExpanded)}
                className="text-blue-600 hover:text-blue-800 text-sm font-bold mt-2 transition-colors focus:outline-none"
              >
                {isTextExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        )}

        {/* Clean External Link */}
        {achievement.link && (
          <div>
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-2"
            >
              View Publication/Details <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Optional Image */}
        {achievement.image_url && (
          <div className="mt-4 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
            <img
              src={achievement.image_url}
              alt={achievement.title}
              className="w-full max-h-75 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const HallOfFame: React.FC = () => {
  const { data, isLoading, error } = useHallOfFame();

  const [showAllCoordinators, setShowAllCoordinators] = useState(false);
  const [showAllCompetitions, setShowAllCompetitions] = useState(false);
  const [showAllInterns, setShowAllInterns] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);

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

  const displayedAchievements = showAllAchievements
    ? data.achievements
    : data.achievements.slice(0, 10);

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

  // --- Helper functions for Achievements section ---
  const getCategoryIcon = (category?: string | null) => {
    const cat = category?.toLowerCase() || "";
    if (cat.includes("patent"))
      return <Lightbulb className="w-5 h-5 text-blue-600" />;
    if (cat.includes("paper") || cat.includes("research"))
      return <FileText className="w-5 h-5 text-emerald-600" />;
    if (cat.includes("award") || cat.includes("scholar"))
      return <Award className="w-5 h-5 text-amber-600" />;
    return <Star className="w-5 h-5 text-neutral-500" />;
  };

  const getCategoryColor = (category?: string | null) => {
    const cat = category?.toLowerCase() || "";
    if (cat.includes("patent"))
      return "bg-blue-50 text-blue-700 border-blue-200";
    if (cat.includes("paper") || cat.includes("research"))
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (cat.includes("award") || cat.includes("scholar"))
      return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-neutral-100 text-neutral-600 border-neutral-200";
  };

  return (
    <section className="bg-primary-bg py-12 px-4 md:px-6 w-full min-h-screen">
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
              {displayedCoordinators.map((person: any) => (
                <div key={person.id} className="flex flex-col gap-3 group">
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
              {displayedCompetitions.map((comp: any) => (
                <div
                  key={comp.id}
                  className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-full md:w-1/4 flex flex-col gap-2">
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

                  <div className="grow">
                    <h5 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                      Team Members
                    </h5>
                    <div className="flex flex-wrap gap-6">
                      {comp.team.map((member: any, i: number) => (
                        <div key={i} className="flex items-center gap-3">
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

        {/* --- SECTION 3: ACHIEVEMENTS & PUBLICATIONS --- */}
        {data.achievements.length > 0 && (
          <div>
            <h3 className="text-2xl font-sans font-bold text-neutral-800 mb-10 border-l-4 border-yellow-500 pl-4">
              Achievements & Publications
            </h3>

            {/* Changed from hard border/margin left to responsive (md:border-l-2 md:ml-6) */}
            <div className="relative md:border-l-2 md:border-neutral-200 md:ml-6 space-y-8 md:space-y-10 pb-4">
              {displayedAchievements.map((achievement: any) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  getCategoryIcon={getCategoryIcon}
                  getCategoryColor={getCategoryColor}
                />
              ))}
            </div>

            <ViewMoreButton
              isExpanded={showAllAchievements}
              onClick={() => setShowAllAchievements(!showAllAchievements)}
              totalCount={data.achievements.length}
            />
          </div>
        )}

        {/* --- SECTION 4: INTERNS --- */}
        {data.interns.length > 0 && (
          <div>
            <h3 className="text-2xl font-sans text-neutral-600 mb-8 border-l-4 border-green-500 pl-4">
              Interns
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayedInterns.map((intern: any) => (
                <div key={intern.id} className="flex flex-col gap-3 group">
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
