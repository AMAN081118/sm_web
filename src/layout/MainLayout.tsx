import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-primary-bg overflow-x-hidden flex flex-col">
      {/* Sticky Header Wrapper */}
      <header className="sticky top-0 z-50 w-full bg-primary-bg">
        {/* Centered Container for Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
        <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
