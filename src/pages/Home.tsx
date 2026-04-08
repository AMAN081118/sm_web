import Hero from "../sections/Hero";
import WhyJoin from "../sections/WhyJoin";
// import Placements from "../sections/Placements";
// import Recruiters from "../sections/Recruiters";
// import Research from "../sections/Research";
// import StudentActivity from "../sections/StudentActivity";
import HallOfFame from "../sections/HallOfFame";
import CurriculumSection from "../sections/CurriculumSection";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyJoin />
      <CurriculumSection />
      {/* <Placements />
      <Recruiters /> */}
      {/* <Research /> */}
      <Projects />
      {/* <StudentActivity /> */}
      <HallOfFame />
    </>
  );
};

export default Home;
