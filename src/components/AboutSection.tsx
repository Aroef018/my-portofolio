// src/components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-8 text-primary-orange">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg text-text-light leading-relaxed">
        <p className="mb-4">
          As an undergraduate student at Jenderal Soedirman University, I am
          deeply passionate about software development, with a particular focus
          on both front-end and back-end technologies. My interest in fullstack
          development allows me to approach projects with a holistic view,
          understanding how each component contributes to a cohesive and
          functional system.
        </p>
        <p className="mb-4">
          I thrive on solving complex problems, whether through coding
          challenges in competitive programming or tackling real-world issues in
          software projects. This drive for problem-solving not only hones my
          technical skills but also fuels my creativity and innovation.
        </p>
        <p>
          My goal is to continuously learn and apply modern technologies to
          build scalable and efficient solutions. I am eager to contribute to
          projects that push the boundaries of what software can achieve, while
          also growing as a developer and professional.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
