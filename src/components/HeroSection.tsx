// src/components/HeroSection.tsx
import React from "react";
import profilePic from "../assets/profile.png"; // Pastikan path ini benar ke gambar Anda

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden"
    >
      {/* Background overlay (opsional, bisa diganti dengan gambar background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-background to-primary-orange/20 opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-40 h-40 rounded-full object-cover border-4 border-primary-orange shadow-lg mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Hello, I'm <span className="text-primary-orange">Amar Ma'ruf</span>.
        </h1>
        <p className="text-xl md:text-2xl text-text-light mb-8">
          Passionate about{" "}
          <span className="text-primary-orange">
            solving problems through code
          </span>{" "}
          and building innovative applications.
        </p>
        {/* <div className="flex space-x-4">
          <a
            href="#projects"
            className="bg-primary-orange text-dark-background font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-orange/80 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-primary-orange text-primary-orange font-bold py-3 px-8 rounded-full hover:bg-primary-orange hover:text-dark-background transition-all duration-300"
          >
            Contact Me
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
