// src/components/ExperienceSection.tsx
import React from "react";

// Mendefinisikan interface untuk properti setiap item pengalaman
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[]; // Bisa berupa array poin-poin
  technologies?: string[]; // Opsional: teknologi yang digunakan
}

// Komponen individual untuk menampilkan satu item pengalaman
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  technologies,
}) => {
  return (
    <div className="bg-dark-background border border-primary-orange/30 p-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-2xl font-bold text-primary-orange">{title}</h3>
      <p className="text-xl text-text-light mb-2">{company}</p>
      <p className="text-text-muted text-sm mb-4">{period}</p>
      <ul className="list-disc list-inside text-text-light mb-4">
        {description.map((point, index) => (
          <li key={index} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary-orange/20 text-primary-orange text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// Komponen utama ExperienceSection
const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-primary-orange text-center mb-12">
        My Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        <ExperienceItem
          title="Software Developer Internship"
          company="GDP Labs"
          period="July 2024 - October 2024"
          description={[
            "Fixing bugs across multiple projects to improve application performance and user experience",
            "Writing unit tests to ensure code reliability and maintainability",
            "Developing APIs using GraphQL for seamless data integration",
            "Creating responsive and dynamic frontend interfaces with React.js",
          ]}
          technologies={["React.js", "GraphQl", "Typescript", "Nest.js"]}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
