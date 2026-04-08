import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import People from "./pages/Student";
// import Placement from "./pages/Placement";
// import ResearchPage from "./pages/ResearchPage";
// import NewsAndEvent from "./pages/NewsAndEvent";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
// import StudentProfile from "./pages/StudentProfile";
// import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/student" element={<People />} />
          {/* <Route path="/placement" element={<Placement />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/news&event" element={<NewsAndEvent />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/profile" element={<StudentProfile />} />
          <Route path="/login" element={<Auth />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
