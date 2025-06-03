// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
// import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AwardsSection from "./components/AwardsSection";

// Komponen helper untuk smooth scrolling
const ScrollToSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Kloning children untuk menambahkan onClick event handler
  return React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      typeof child.type === "string" &&
      child.type === "a"
    ) {
      return React.cloneElement(child, { onClick: handleScroll });
    }
    return child;
  });
};

function App() {
  return (
    <Router>
      {" "}
      {/* Bungkus seluruh aplikasi dengan Router */}
      <div className="min-h-screen bg-dark-background text-text-light flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AwardsSection />
          {/* <ContactSection /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
