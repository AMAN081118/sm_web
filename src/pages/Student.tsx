import React, { useState, useEffect, useRef, useCallback } from "react";
import { Linkedin, X } from "lucide-react";
import { useStudentFilters, useStudentsInfinite } from "../hooks/useStudents";

const Student: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null);

  // Replaced hover state with a selected student state for the centered modal
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const { data: filtersData, isLoading: filtersLoading } = useStudentFilters();
  const {
    data: studentsData,
    isLoading: studentsLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useStudentsInfinite(selectedBatch, selectedCategory);

  useEffect(() => {
    if (filtersData?.batches?.length && selectedBatch === null) {
      setSelectedBatch(2023);
    }
  }, [filtersData, selectedBatch]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedStudent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedStudent]);

  const students = studentsData?.pages.flat() || [];

  const observer = useRef<IntersectionObserver | null>(null);
  const lastStudentElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  const batches = filtersData?.batches || [];
  const tags = filtersData?.tags || [];

  return (
    <div className="min-h-screen bg-primary-bg p-6 md:p-12 relative">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center mb-10 font-medium">Students</h1>

        {/* Filters */}
        {!filtersLoading && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === "All"
                  ? "bg-indigo-500 text-white"
                  : "bg-white"
              }`}
            >
              All
            </button>

            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedCategory(tag)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === tag
                    ? "bg-indigo-500 text-white"
                    : "bg-white"
                }`}
              >
                {tag}
              </button>
            ))}

            <select
              value={selectedBatch || ""}
              onChange={(e) => setSelectedBatch(Number(e.target.value))}
              className="px-4 py-2 rounded-full bg-white text-sm"
            >
              {batches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Grid */}
        {studentsLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {students.map((student, index) => {
              const isLast = students.length === index + 1;

              return (
                <div
                  key={student.id}
                  ref={isLast ? lastStudentElementRef : null}
                  onClick={() => setSelectedStudent(student)}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex gap-4 cursor-pointer hover:-translate-y-1"
                >
                  {/* Grid Card Content */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      {student.image_url ? (
                        <img
                          src={student.image_url}
                          alt={student.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        student.avatar_letter
                      )}
                    </div>
                    {student.linkedin && (
                      <div className="text-blue-600 bg-blue-50 p-1.5 rounded-md">
                        <Linkedin size={16} />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3">
                      {student.bio || "No bio available"}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-2">
                      {student.tags?.length ? student.tags.join(", ") : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Infinite scroll loader */}
        {isFetchingNextPage && (
          <p className="text-center mt-6">Loading more...</p>
        )}
      </div>

      {/* CENTERED LANDSCAPE MODAL */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedStudent(null)} // Close when clicking the backdrop
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col sm:flex-row overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Left Column: Avatar & Socials */}
            <div className="bg-gray-50 p-8 flex flex-col items-center justify-center shrink-0 sm:w-64 border-b sm:border-b-0 sm:border-r border-gray-100">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-3xl sm:text-4xl mb-4 shadow-sm">
                {selectedStudent.image_url ? (
                  <img
                    src={selectedStudent.image_url}
                    alt={selectedStudent.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  selectedStudent.avatar_letter
                )}
              </div>

              {selectedStudent.linkedin && (
                <a
                  href={selectedStudent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn Profile
                </a>
              )}
            </div>

            {/* Right Column: Text Content */}
            <div className="p-8 flex-grow flex flex-col overflow-hidden">
              <div className="mb-4 pr-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedStudent.name}
                </h2>
                {selectedStudent.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Scrollable Bio Area */}
              <div className="overflow-y-auto pr-4 custom-scrollbar text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {selectedStudent.bio || "No bio available."}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
