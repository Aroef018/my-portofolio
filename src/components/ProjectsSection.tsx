// src/components/ProjectsSection.tsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ImageModal from "./ImageModal"; // --- UBAH: Import ImageModal (bukan ProjectDetailModal) ---

// Import gambar untuk proyek Anda (ganti dengan gambar proyek Anda sendiri)
import project1Image from "../assets/e-com.png";
import project2Image from "../assets/apasi-chat.png";
import project3Image from "../assets/tukutick.png";

// Definisikan interface untuk data proyek (tidak perlu ProjectData terpisah lagi jika hanya pakai ImageModal)
// Kita bisa langsung pakai type untuk useState
// type ProjectData = ProjectCardProps; // Atau hapus ini jika tidak digunakan lagi

const projects = [
  // Biarkan ini sebagai array objek biasa, tidak perlu type ProjectData[] lagi
  {
    title: "Node Shop",
    description:
      "A responsive e-commerce platform featuring a shopping cart and payment integration. Built with a modular architecture for enhanced scalability.",
    imageUrl: project1Image,
    githubUrl: "https://github.com/Aroef018/E-com-with-Express",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Apasi Chat",
    description:
      "A simple Android-based instant messaging application, enabling real-time communication. Developed with a focus on intuitive user experience and efficient message handling.",
    imageUrl: project2Image,
    githubUrl: "https://github.com/AgengPraba/apasi-chat-app",
    technologies: ["Typescript", "Ionic", "Firebase", "SCSS"],
  },
  {
    title: "Tukutick",
    description:
      "A unique ticketing application featuring a pre-order system and a gacha-style lottery mechanism for ticket allocation. Designed to manage event ticket distribution with fairness and excitement.",
    imageUrl: project3Image,
    githubUrl: "https://github.com/HendraMaajid/tukutick",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
  // Tambahkan proyek lain yang Anda miliki
];

const ProjectsSection: React.FC = () => {
  // --- UBAH: State untuk mengelola modal gambar saja ---
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageForModal, setCurrentImageForModal] = useState({
    url: "",
    title: "",
  });

  // --- UBAH: handleProjectClick hanya untuk gambar ---
  const handleProjectCardClick = (imageUrl: string, title: string) => {
    setCurrentImageForModal({ url: imageUrl, title: title });
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setTimeout(() => {
      setCurrentImageForModal({ url: "", title: "" });
    }, 300); // Sesuaikan dengan duration-300 di transisi modal
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-primary-orange text-center mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            // liveUrl={project.liveUrl}
            technologies={project.technologies}
            onProjectClick={handleProjectCardClick} // Teruskan handler baru
          />
        ))}
      </div>

      {/* --- UBAH: Render ImageModal (bukan ProjectDetailModal) --- */}
      {isImageModalOpen && (
        <ImageModal
          imageUrl={currentImageForModal.url}
          imageAlt={currentImageForModal.title}
          onClose={handleCloseImageModal}
          isOpen={isImageModalOpen}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
