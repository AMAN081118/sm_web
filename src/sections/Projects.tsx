import React from "react";
import { useRecentProjects } from "../hooks/useProjects";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Projects: React.FC = () => {
  const { data: projects, isLoading, error } = useRecentProjects();

  if (error) {
    return (
      <div className="bg-[#f8f7f0] py-20 px-6 flex items-center justify-center text-red-500">
        Failed to load projects.
      </div>
    );
  }

  // Skeleton Loader for consistency
  const ProjectSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col animate-pulse bg-white rounded-2xl overflow-hidden shadow-sm"
        >
          <div className="bg-gray-200/80 aspect-video w-full"></div>
          <div className="p-6">
            <div className="h-5 bg-gray-200/80 rounded-md w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200/80 rounded-md w-full mb-2"></div>
            <div className="h-4 bg-gray-200/80 rounded-md w-2/3 mb-6"></div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200/80"></div>
              <div className="w-8 h-8 rounded-full bg-gray-200/80"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-primary-bg py-16 px-6 w-full min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Student Projects
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Explore the innovative solutions and technical builds created by our
            students.
          </p>
        </div>

        {/* Content */}
        {isLoading ? (
          <ProjectSkeleton />
        ) : (
          <>
            {projects && projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <a
                    href={`#`} // Or project.slug depending on routing preference
                    key={project.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Project Image */}
                    <div className="overflow-hidden aspect-video bg-gray-100 relative">
                      <img
                        src={
                          project.image_url ||
                          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
                        }
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {project.category && (
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                          {project.category}
                        </span>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-grow">
                        {project.description}
                      </p>

                      {/* Contributors (Team) */}
                      <div>
                        <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                          Contributors
                        </h4>
                        <div className="flex flex-wrap gap-2 items-center">
                          {project.team && project.team.length > 0 ? (
                            project.team.map((member, idx) => (
                              <div
                                key={member.student_id || idx}
                                className="flex items-center gap-2 bg-neutral-50 rounded-full pr-3 border border-neutral-100"
                                title={member.role || "Contributor"}
                              >
                                {/* <img
                                  src={
                                    member.image ||
                                    "https://via.placeholder.com/100"
                                  }
                                  alt={member.name}
                                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                                /> */}
                                <span className="text-xs font-medium text-neutral-700 whitespace-nowrap">
                                  {member.name}{" "}
                                  {/* Show first name for space */}
                                </span>
                              </div>
                            ))
                          ) : (
                            <span className="text-xs text-neutral-400 italic">
                              No contributors listed
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-neutral-500 bg-white rounded-2xl shadow-sm border border-neutral-100">
                No projects have been published yet.
              </div>
            )}

            {/* View More Button */}
            {/* <div className="flex justify-center mt-4">
              <a
                href="/projects"
                className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
              >
                View All Projects
              </a>
            </div> */}

            <div className="flex justify-center mt-4">
              <Link
                to="/projects"
                className="group flex items-center gap-3 px-8 py-3 bg-white border border-neutral-200 rounded-full shadow-sm hover:shadow-md hover:border-[#c85ae5] transition-all duration-300"
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-neutral-800 group-hover:text-[#c85ae5] transition-colors">
                  View All Projects
                </span>
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#c85ae5] group-hover:text-white transition-colors">
                  <MoveRight size={16} />
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
