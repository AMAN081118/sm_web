import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

const notices = [
  { title: "PG Admission", link: "/news&event/phd-2026" },
  { title: "B.Tech Admission", link: "/news&event/btech-2026" },
  { title: "M.Tech Admission", link: "/news&event/mtech-2026" },
  { title: "Research Activities", link: "/news&event/research-update" },
];

const WhyJoin = () => {
  return (
    <section className="bg-white mt-10 py-16 px-6 w-full">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 flex flex-col justify-center gap-6">
          <h2 className="font-serif italic text-2xl md:text-4xl text-black">
            Why Join Smart Manufacturing?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Professor/Head Image Placeholder */}
            <img
              src="/faculty/hod.jpg"
              alt="HOD"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-sm shrink-0 bg-gray-200"
            />
            <div>
              <p className="text-neutral-700 text-lg leading-relaxed">
                Our curriculum is designed to bridge the gap between mechanical
                engineering and computer science, preparing students for
                leadership roles in the fourth industrial revolution.
              </p>
              <p className="font-title text-2xl font-bold text-highlight">
                Dr. K. Ponappa
                <br />
                Head of Department
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Important Notice (Now takes 1 out of 3 columns) */}
        <div className="lg:col-span-1 flex flex-col gap-6 md:border-l border-neutral-200 pl-0 lg:pl-8">
          <h2 className="font-serif italic text-3xl md:text-4xl text-orange-500">
            Important Notice
          </h2>

          <div className="flex flex-col gap-4">
            {/* Dynamic Notices List */}
            <ul className="space-y-3">
              {notices.map((notice, index) => (
                <li key={index} className="group">
                  <Link
                    to={"https://www.iiitdmj.ac.in/"}
                    className="flex items-center justify-between text-lg text-neutral-800 group-hover:text-orange-600 transition-colors border-b border-neutral-200 pb-2"
                  >
                    <span className="truncate pr-2">{notice.title}</span>
                    <ChevronRight
                      size={20}
                      className="text-neutral-400 group-hover:text-orange-500 transition-transform group-hover:translate-x-1 shrink-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* View More Button */}
            <div className="mt-2">
              <Link
                to={"https://www.iiitdmj.ac.in/"}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-400 hover:text-red-500 transition-colors"
              >
                View More Notices
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
