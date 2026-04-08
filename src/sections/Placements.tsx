import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Filter } from "lucide-react";

// Bar Chart Data: Year-wise placement numbers
const yearlyPlacementData = [
  { year: "2021", students: 45 },
  { year: "2022", students: 58 },
  { year: "2023", students: 72 },
  { year: "2024", students: 85 },
  { year: "2025", students: 96 },
];

// Doughnut Chart Data: Category-wise distribution
const sectorData = [
  { name: "Software & IT", value: 55, color: "#8b5cf6" }, // Violet
  { name: "Core Engg", value: 30, color: "#3b82f6" }, // Blue
  { name: "Business", value: 15, color: "#06b6d4" }, // Cyan
];

// Tabular Data: Detailed placement records
const rawTableData = [
  {
    company: "Amazon",
    role: "SDE I",
    ctc: "45 LPA",
    category: "Software & IT",
  },
  {
    company: "Siemens",
    role: "R&D Engineer",
    ctc: "18 LPA",
    category: "Core Engg",
  },
  { company: "Deloitte", role: "Analyst", ctc: "14 LPA", category: "Business" },
  {
    company: "Google",
    role: "Software Engineer",
    ctc: "52 LPA",
    category: "Software & IT",
  },
  { company: "Tata Steel", role: "GET", ctc: "12 LPA", category: "Core Engg" },
  {
    company: "Microsoft",
    role: "SDE II",
    ctc: "55 LPA",
    category: "Software & IT",
  },
  {
    company: "Goldman Sachs",
    role: "Analyst",
    ctc: "28 LPA",
    category: "Business",
  },
  {
    company: "Jio",
    role: "Data Scientist",
    ctc: "18 LPA",
    category: "Software & IT",
  },
];

const filters = ["All", "Software & IT", "Business", "Core Engg"];

const Placements = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter Logic for Table
  const filteredTableData =
    activeFilter === "All"
      ? rawTableData
      : rawTableData.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-primary-bg py-20 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-sans text-black mb-2">
              Placement Statistics
            </h2>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-(image:--bg-filter-gradient) text-white"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {filter === "All" && <Filter size={14} />}
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT COLUMN: VISUALIZATIONS (CHARTS) */}
          <div className="flex flex-col gap-8">
            {/* 1. DOUGHNUT CHART CARD */}
            <div className=" rounded-2xl  flex flex-col items-center">
              <div className="w-full h-62.5">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="none"
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconType="circle"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 2. BAR CHART CARD */}
            <div className="bg-white p-8 rounded-2xl  ">
              <h3 className="text-md font-medium font-sans mb-6 flex items-center gap-2">
                Year-wise Students Placed
              </h3>
              <div className="w-full h-62.5">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearlyPlacementData}>
                    <defs>
                      <linearGradient
                        id="colorStudents"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#8b5cf6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#3b82f6"
                          stopOpacity={0.8}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f3f4f6"
                    />
                    <XAxis
                      dataKey="year"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9ca3af", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9ca3af", fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ fill: "#f3f4f6" }}
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Bar
                      dataKey="students"
                      fill="url(#colorStudents)"
                      radius={[4, 4, 0, 0]}
                      barSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TABULAR DATA */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-white">
              <h3 className="text-lg font-medium font-sans text-neutral-800 flex items-center gap-2">
                Recent Placements
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {activeFilter}
              </span>
            </div>

            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-neutral-50 sticky top-0">
                  <tr>
                    <th className="p-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="p-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Role
                    </th>
                    {/* <th className="p-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider text-right">
                      CTC
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {filteredTableData.length > 0 ? (
                    filteredTableData.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-neutral-50 transition-colors"
                      >
                        <td className="p-4 font-medium text-neutral-800">
                          {item.company}
                        </td>
                        <td className="p-4 text-neutral-600 text-sm">
                          {item.role}
                        </td>
                        {/* <td className="p-4 text-neutral-800 font-semibold text-sm text-right">
                          {item.ctc}
                        </td> */}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={3}
                        className="p-8 text-center text-neutral-400"
                      >
                        No data available for this category.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-neutral-50 border-t border-neutral-100 text-center">
              <button className="text-sm font-sans font-medium text-violet-600 hover:text-violet-700 transition-colors">
                View Full Report →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
