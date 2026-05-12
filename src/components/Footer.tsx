import {
  Mail,
  MapPin,
  Globe,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    // CHANGE: w-svw -> w-full to stop horizontal scrolling
    <footer className="w-full bg-black text-white py-12 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        {/* ... (Keep the rest of your Footer code exactly the same) ... */}
        {/* Column 1: Logo & Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/iiitdmj_logo.png"
              alt="IIITDMJ Logo"
              width={80}
              height={80}
            />
            <h2 className="font-sans text-xl leading-tight">
              Smart <br /> Manufacturing
            </h2>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            PDPM Indian Institute of Information Technology, Design and
            Manufacturing Jabalpur.
          </p>
          <div className="flex gap-4 mt-4">
            <Twitter
              size={20}
              className="hover:text-highlight cursor-pointer transition-colors"
            />
            <Facebook
              size={20}
              className="hover:text-highlight cursor-pointer transition-colors"
            />
            <Linkedin
              size={20}
              className="hover:text-highlight cursor-pointer transition-colors"
            />
            <Youtube
              size={20}
              className="hover:text-highlight cursor-pointer transition-colors"
            />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-title text-highlight text-lg mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">
              <a
                href="http://sm-cms.64.227.144.236.sslip.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin login
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              Academic Calendar
            </li>
            <li className="hover:text-white cursor-pointer">Placement Cell</li>
            <li className="hover:text-white cursor-pointer">
              Research & Projects
            </li>
            <li className="hover:text-white cursor-pointer">
              Student Gymkhana
            </li>
            <li className="hover:text-white cursor-pointer">RTI Disclosure</li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div>
          <h3 className="font-title text-highlight text-lg mb-6">
            Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">
              B.Tech Admissions
            </li>
            <li className="hover:text-white cursor-pointer">
              Faculty Directory
            </li>
            <li className="hover:text-white cursor-pointer">Important Forms</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="font-title text-highlight text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3">
              <MapPin size={18} className="text-highlight shrink-0" />
              <span>
                Dumna Airport Road, P.O: Khamaria, Jabalpur - 482005, MP, India.
              </span>
            </li>
            {/* <li className="flex gap-3">
              <Phone size={18} className="text-highlight shrink-0" />
              <span>+91-761-2794001 / 2794036</span>
            </li> */}
            <li className="flex gap-3">
              <Mail size={18} className="text-highlight shrink-0" />
              <span>admissions@iiitdmj.ac.in</span>
            </li>
            <li className="flex gap-3">
              <Globe size={18} className="text-highlight shrink-0" />
              <span>www.iiitdmj.ac.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>
          © 2026 Smart Manufacturing Department, IIITDM Jabalpur. All Rights
          Reserved.
        </p>
        <p className="italic">Designed & Developed for the Department</p>
      </div>
    </footer>
  );
};

export default Footer;
