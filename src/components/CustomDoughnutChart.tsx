import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

type DataType = {
  name: string;
  value: number;
  color: string;
};

interface Props {
  data: DataType[];
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={6}
      />
    </g>
  );
};

const CustomDoughnutChart = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const total = useMemo(
    () => data.reduce((acc, curr) => acc + curr.value, 0),
    [data],
  );

  const activeData = activeIndex !== null ? data[activeIndex] : null;

  return (
    <div className="bg-white p-10 rounded-2xl shadow-sm relative">
      <div className="w-full h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={130}
              paddingAngle={4}
              dataKey="value"
              // activeIndex={activeIndex ?? -1}
              activeShape={renderActiveShape}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              isAnimationActive
              animationDuration={900}
              animationEasing="ease-out"
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                  stroke="#fff"
                  strokeWidth={3}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          {activeData ? (
            <>
              <p className="text-3xl font-semibold text-neutral-900">
                {activeData.value}
              </p>
              <p className="text-sm text-neutral-500">{activeData.name}</p>
              <p className="text-xs text-neutral-400">
                {Math.round((activeData.value / total) * 100)}%
              </p>
            </>
          ) : (
            <>
              <p className="text-3xl font-semibold text-neutral-900">{total}</p>
              <p className="text-sm text-neutral-400 uppercase tracking-wide">
                Total Placements
              </p>
            </>
          )}
        </div>
      </div>

      {/* Custom Legend */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {data.map((item, index) => (
          <button
            key={item.name}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="flex items-center gap-2 group transition-all"
          >
            <span
              className="w-3 h-3 rounded-full transition-transform group-hover:scale-110"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm font-medium text-neutral-700 group-hover:text-black">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomDoughnutChart;
