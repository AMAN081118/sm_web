import React, { useState, useEffect } from "react";

// Define the shape of our course data
interface Course {
  code: string;
  name: string;
  credits: number;
}

// Mock database to simulate an API response
const mockApiData: Record<number, Course[]> = {
  1: [
    { code: "NS1001", name: "Mathematics-I", credits: 4 },
    { code: "NS1002", name: "Engineering Mechanics", credits: 4 },
    { code: "HS1001", name: "Effective Communications", credits: 2 },
    {
      code: "IT1002",
      name: "Introduction to Programming in Python",
      credits: 3,
    },
    { code: "SM1001", name: "Introduction to Profession", credits: 1 },
    { code: "DS1005", name: "Engineering Graphics", credits: 3 },
    { code: "ES1003", name: "Innovation Theory and Practice", credits: 2 },
  ],
  2: [
    { code: "NS1003", name: "Mathematics-II", credits: 4 },
    { code: "ES1004", name: "Basic Electrical Engineering", credits: 3 },
    { code: "IT1003", name: "Data Structures", credits: 4 },
    // Mock data for semester 2...
  ],
  // You would expand this for 3-8...
};

const Curriculum: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Simulate an API call whenever the selected semester changes
  useEffect(() => {
    const fetchCurriculum = async () => {
      setLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Fetch data based on semester (fallback to empty array if no data)
      const data = mockApiData[selectedSemester] || [];
      setCourses(data);
      setLoading(false);
    };

    fetchCurriculum();
  }, [selectedSemester]);

  // Calculate total credits for the current view
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  const handleDownloadPDF = () => {
    // Logic to generate or download PDF goes here
    alert(`Downloading curriculum for Semester ${selectedSemester}...`);
  };

  return (
    <div className="min-h-screen bg-primary-bg p-4 md:p-10 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl text-center mb-10 font-normal">
          Curriculum (Updated 2020)
        </h1>

        {/* Semester Selector */}
        <div className="mb-6 flex flex-col max-w-[250px]">
          <label
            htmlFor="semester-select"
            className="text-sm font-semibold text-gray-600 mb-2"
          >
            Select Semester
          </label>
          <select
            id="semester-select"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(Number(e.target.value))}
            className="border border-gray-200 bg-[#f8f7f2] p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <option key={sem} value={sem}>
                Semester {sem}
              </option>
            ))}
          </select>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto border border-gray-200 rounded-sm mb-8 bg-[#f8f7f2]">
          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Loading curriculum data...
            </div>
          ) : (
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-[#e9e8ef]">
                  <th className="p-3 font-semibold text-gray-700 w-1/4">
                    Course Code
                  </th>
                  <th className="p-3 font-semibold text-gray-700 w-2/4">
                    Course Name
                  </th>
                  <th className="p-3 font-semibold text-gray-700 w-1/4">
                    Credits
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.length > 0 ? (
                  courses.map((course, index) => (
                    <tr
                      key={course.code}
                      className={`border-t border-gray-200 ${index % 2 === 0 ? "bg-[#f4f3ed]" : "bg-[#f8f7f2]"}`}
                    >
                      <td className="p-3">{course.code}</td>
                      <td className="p-3">{course.name}</td>
                      <td className="p-3">{course.credits}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="p-5 text-center text-gray-500">
                      No data available for this semester.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer Area: Totals and Download */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-lg font-medium">
            Total Credits: {totalCredits}
          </div>

          <button
            onClick={handleDownloadPDF}
            className="bg-white px-6 py-2.5 rounded-lg shadow-sm border border-gray-200 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
