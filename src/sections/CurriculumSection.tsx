import {
  Code,
  Terminal,
  Cpu,
  DraftingCompass,
  Settings,
  Bot,
  Network,
  Globe,
  Hammer,
  FlaskConical,
  Thermometer,
  Box,
  RefreshCw,
  Printer,
} from "lucide-react";

const CurriculumSection = () => {
  const categories = [
    {
      title: "Computing & Automation",
      items: [
        { name: "Introduction to Programming in Python", icon: Terminal },
        { name: "Data Structure and Algorithm in Python", icon: Code },
        { name: "Basic Electronics", icon: Cpu },

        { name: "Control Systems Engineering", icon: Settings },
        { name: "Industrial Automation", icon: Bot },
      ],
    },
    {
      title: "Cyber-Physical Systems",
      items: [
        { name: "Cyber Physical Production System", icon: Network },
        { name: "Advance Cyber Physical Production System", icon: Globe },
        { name: "Manufacturing Process", icon: Hammer },
        {
          name: "Engineering Materials & Characterization",
          icon: FlaskConical,
        },
        { name: "Engineering Graphics", icon: DraftingCompass },
      ],
    },
    {
      title: "Mechanical & Core Engineering",
      items: [
        { name: "Thermodynamics & Heat Transfer", icon: Thermometer },
        { name: "Solid Mechanics", icon: Box },
        { name: "Kinematics and Dynamics of Machine", icon: RefreshCw },
        { name: "Additive & Subtractive Manufacturing", icon: Printer },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-sans text-black">
            Interdisciplinary Curriculum
          </h2>

          {/* Subtitle with Pink/Purple Accents matching the image */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-base font-semibold">
            <span>Big Data</span>
            <span className="text-gray-300">|</span>
            <span>Artificial Intelligence</span>
            <span className="text-gray-300">|</span>
            <span>Cybersecurity</span>
            <span className="text-gray-300">|</span>
            <span>Industrial IoT</span>
            <span className="text-gray-300">|</span>
            <span>Additive Manufacturing</span>
          </div>
        </div>

        {/* GRID CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {/* Optional Column Header if you want to label the groups, otherwise hidden */}
              {/* <h3 className="text-xl font-bold text-gray-800 border-b pb-2">{category.title}</h3> */}

              <ul className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors group cursor-default"
                  >
                    <div className="p-3 bg-neutral-100 rounded-lg text-neutral-600 group-hover:bg-[#c85ae5] group-hover:text-white transition-colors duration-300">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-800 leading-tight pt-1">
                        {item.name}
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
