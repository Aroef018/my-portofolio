// src/App.tsx
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import AwardsSection from "./components/AwardsSection";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-background text-text-light flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AwardsSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
