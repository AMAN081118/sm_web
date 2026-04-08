import React from "react";

// --- Data & Theme Types ---
type Theme = "robotics" | "software" | "default";

interface ProfileData {
  name: string;
  age: number;
  gender: string;
  rollNo: string;
  batch: string;
  interest: string;
  email: string;
  mobile: string;
  avatarUrl: string;
  themeType: Theme;
}

// --- Hardcoded Profile Data ---
const studentData: ProfileData = {
  name: "Harshit Saxena",
  age: 21,
  gender: "Male",
  rollNo: "23BSM029",
  batch: "2023-2027",
  interest: "Robotics",
  email: "23bsm029@iiitdmj.ac.in",
  mobile: "+91 XXXXXXXXXX",
  avatarUrl:
    "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=400&h=400", // Replaced with high-res placeholder
  themeType: "robotics", // Try changing this to 'software' to see the vibe change!
};

// --- Theme Configuration ---
const themeStyles = {
  robotics: {
    textGradient: "from-cyan-500 to-blue-600",
    borderFocus: "border-cyan-400",
    ringFocus: "ring-cyan-100",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  software: {
    textGradient: "from-purple-500 to-indigo-600",
    borderFocus: "border-purple-400",
    ringFocus: "ring-purple-100",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  default: {
    textGradient: "from-gray-700 to-gray-900",
    borderFocus: "border-gray-300",
    ringFocus: "ring-gray-100",
    badgeBg: "bg-gray-100 text-gray-700 border-gray-200",
  },
};

const StudentProfile: React.FC = () => {
  const currentTheme =
    themeStyles[studentData.themeType] || themeStyles.default;

  return (
    <div className="min-h-screen bg-primary-bg font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="text-sm font-medium text-gray-500">
            <span className="hover:text-gray-800 cursor-pointer transition-colors">
              People
            </span>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900">Profile</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
          {/* Left Column: Personal Info (Sticky on Desktop) */}
          <div className="w-full md:w-80 flex-shrink-0 md:sticky md:top-12 h-fit">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Avatar */}
              <div
                className={`w-40 h-40 rounded-full overflow-hidden mb-6 border-4 shadow-lg ring-8 ${currentTheme.ringFocus} border-white`}
              >
                <img
                  src={studentData.avatarUrl}
                  alt={studentData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name with Dynamic Theme Gradient */}
              <h1
                className={`text-3xl font-bold bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent mb-6`}
              >
                {studentData.name}
              </h1>

              {/* Details List */}
              <div className="w-full space-y-3 text-[15px] text-gray-700">
                <div className="flex justify-between md:justify-start md:gap-4 border-b border-gray-200/60 pb-2">
                  <span className="font-semibold text-gray-900 w-24 text-left">
                    Age:
                  </span>
                  <span className="text-gray-600">{studentData.age}</span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-4 border-b border-gray-200/60 pb-2">
                  <span className="font-semibold text-gray-900 w-24 text-left">
                    Gender:
                  </span>
                  <span className="text-gray-600">{studentData.gender}</span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-4 border-b border-gray-200/60 pb-2">
                  <span className="font-semibold text-gray-900 w-24 text-left">
                    Roll No.:
                  </span>
                  <span className="text-gray-600 font-mono text-sm mt-0.5">
                    {studentData.rollNo}
                  </span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-4 border-b border-gray-200/60 pb-2">
                  <span className="font-semibold text-gray-900 w-24 text-left">
                    Batch:
                  </span>
                  <span className="text-gray-600">{studentData.batch}</span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-4 border-b border-gray-200/60 pb-2">
                  <span className="font-semibold text-gray-900 w-24 text-left">
                    Interest:
                  </span>
                  <span
                    className={`px-3 py-0.5 rounded-full border text-xs font-bold tracking-wide ${currentTheme.badgeBg}`}
                  >
                    {studentData.interest}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4 border-b border-gray-200/60 pb-2 items-start md:items-center">
                  <span className="font-semibold text-gray-900 w-24 text-left mb-1 md:mb-0">
                    Email ID:
                  </span>
                  <a
                    href={`mailto:${studentData.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                  >
                    {studentData.email}
                  </a>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4 pt-1 items-start md:items-center">
                  <span className="font-semibold text-gray-900 w-24 text-left mb-1 md:mb-0">
                    Mob No.:
                  </span>
                  <span className="text-gray-600">{studentData.mobile}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Separator (Desktop Only) */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent my-10"></div>

          {/* Right Column: GitHub README Style Content */}
          {/* We wrap this in a container that mimics standard Markdown HTML styling */}
          <div
            className={`flex-grow bg-white rounded-2xl p-6 md:p-10 shadow-sm border-2 ${currentTheme.borderFocus}`}
          >
            {/* This inner div acts as your "HTML Canvas". 
              When you fetch real HTML later, you can replace the contents of this div with:
              <div dangerouslySetInnerHTML={{ __html: fetchedReadmeHtml }} />
              The classes applied to standard tags here simulate the GitHub markdown look.
            */}
            <div className="space-y-8 text-gray-800">
              {/* Links Section */}
              <section>
                <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-4 text-gray-900">
                  Links
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[15px]">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold w-24">Github:</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      username.github
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold w-24">Codeforces:</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      username.codeforces
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold w-24">Linkedin:</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      in/username
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold w-24">Leetcode:</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      username.leetcode
                    </a>
                  </p>
                  <p className="flex items-center gap-2 sm:col-span-2">
                    <span className="font-semibold w-24">Portfolio:</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      my-awesome-portfolio.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Certificates & Awards Section */}
              <section>
                <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-4 text-gray-900 mt-10">
                  Certificates & Awards
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-700">
                  <li>
                    <strong className="text-gray-900">1st Place</strong> -
                    National Robotics Hackathon 2025
                  </li>
                  <li>AWS Certified Solutions Architect - Associate</li>
                  <li>
                    Top 10 Finalist in Google Summer of Code (Simulation
                    Division)
                  </li>
                </ul>
              </section>

              {/* Projects Section */}
              <section>
                <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-4 text-gray-900 mt-10">
                  Projects
                </h2>
                <div className="space-y-6">
                  {/* Project 1 */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      <a href="#" className="text-blue-600 hover:underline">
                        Autonomous Line Follower Drone
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tech Stack: C++, ROS, Python
                    </p>
                    <p className="text-[15px] text-gray-700">
                      Engineered a quadcopter capable of following complex
                      ground-level trajectories using computer vision and
                      edge-computed machine learning models.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      <a href="#" className="text-blue-600 hover:underline">
                        Smart Gripper Arm
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tech Stack: Arduino, Inverse Kinematics, 3D Printing
                    </p>
                    <p className="text-[15px] text-gray-700">
                      Designed and printed a 6-DOF robotic arm. Implemented
                      inverse kinematics equations to allow precise
                      point-to-point movement for object sorting.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
