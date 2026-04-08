import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Curriculum", path: "/curriculum" },
  { name: "Student", path: "/student" },
  // { name: "Placement", path: "/placement" },
  // { name: "Research", path: "/research" },
  // { name: "News & Event", path: "/news&event" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-primary-bg">
      {/* Top Row: Logo, Profile, Hamburger */}
      <div className="flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/iiitdmj_logo.png"
            alt="IIITDMJ Logo"
            width={60}
            height={60}
          />
          <div>
            <h1 className="text-sm font-semibold">PDPM IIITDMJ</h1>
            <p className="text-xs text-neutral-500">Smart Manufacturing</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Profile Circle (Visible on all screens) */}
          {/* <User2 className="w-8 h-8 rounded-full bg-neutral-200" /> */}

          {/* Mobile Hamburger Button (Hidden on md/desktop) */}
          <button
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation (Hidden on mobile) */}
      <div className="hidden md:flex justify-center">
        <nav className="flex gap-12 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 transition-colors ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-neutral-600 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-highlight" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Menu (Visible only when open) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center pb-6 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium w-full text-center mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-black bg-gray-50 font-semibold"
                      : "text-neutral-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
