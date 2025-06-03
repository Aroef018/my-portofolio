// src/components/ProjectCard.tsx
import React from "react";

// Mendefinisikan tipe props untuk komponen ProjectCard
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string; // Tautan live demo bersifat opsional
  technologies: string[];
  // --- UBAH: properti onProjectClick agar hanya meneruskan URL & Title ---
  onProjectClick?: (imageUrl: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  technologies,
  onProjectClick, // Terima onProjectClick
}) => {
  return (
    <div
      className="
        bg-dark-background
        border border-primary-orange/30
        rounded-lg
        overflow-hidden
        shadow-lg
        hover:shadow-xl
        hover:-translate-y-2
        transition-all duration-300
        flex flex-col
        cursor-pointer
      "
      // --- UBAH: Panggil onProjectClick dengan imageUrl dan title saja ---
      onClick={() => onProjectClick && onProjectClick(imageUrl, title)}
    >
      {/* Gambar Proyek */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      {/* Konten Deskripsi Proyek */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-primary-orange mb-2">{title}</h3>
        <p className="text-text-muted text-base mb-4 flex-grow">
          {description}
        </p>

        {/* Daftar Teknologi */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="
                bg-primary-orange/20
                text-primary-orange
                text-xs font-semibold
                px-2.5 py-0.5
                rounded-full
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Aksi (GitHub dan Live Demo) - Opsional, bisa tetap ada atau dihapus jika tidak mau */}
        <div className="flex justify-end gap-3 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              text-primary-orange
              hover:text-primary-orange/80
              transition-colors
              font-medium
            "
            aria-label={`View ${title} on GitHub`}
            onClick={(e) => e.stopPropagation()} // Mencegah klik link juga membuka modal
          >
            <span className="mr-1">🔗</span> GitHub
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                text-primary-orange
                hover:text-primary-orange/80
                transition-colors
                font-medium
              "
              aria-label={`View live demo of ${title}`}
              onClick={(e) => e.stopPropagation()} // Mencegah klik link juga membuka modal
            >
              <span className="mr-1">🚀</span> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
