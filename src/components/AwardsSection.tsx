// src/components/AwardsSection.tsx
import React, { useState } from "react";
import ImageModal from "./ImageModal"; // Pastikan ini mengimpor dari file terpisah

// --- Import gambar-gambar di bagian paling atas file ---
// Pastikan Anda memiliki gambar-gambar ini di folder `src/assets/`
// atau gunakan URL gambar online.
import logoICPC from "../assets/icpc_logo.png";
import logoPingfest from "../assets/pingfest_logo.png";

// Mendefinisikan interface untuk properti setiap item penghargaan
interface AwardItemProps {
  title: string;
  issuer: string;
  date: string;
  description?: string; // Deskripsi bersifat opsional
  imageUrl?: string; // URL gambar sertifikat/logo, opsional
  onImageClick?: (imageUrl: string, title: string) => void;
}

// Komponen individual untuk menampilkan satu item penghargaan
const AwardItem: React.FC<AwardItemProps> = ({
  title,
  issuer,
  date,
  description,
  imageUrl,
  onImageClick,
}) => {
  return (
    <div className="bg-dark-background border border-primary-orange/30 p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
      {imageUrl && (
        <div
          className="flex-shrink-0 w-32 h-32 md:w-24 md:h-24 cursor-pointer"
          onClick={() => onImageClick && onImageClick(imageUrl, title)}
        >
          <img
            src={imageUrl}
            alt={`${title} logo`}
            className="w-full h-full object-contain rounded-lg border border-primary-orange/20"
          />
        </div>
      )}

      <div className="flex-grow text-center md:text-left">
        <h3 className="text-2xl font-bold text-primary-orange">{title}</h3>
        <p className="text-xl text-text-light mb-2">{issuer}</p>
        <p className="text-text-muted text-sm mb-4">{date}</p>
        {description && <p className="text-text-light">{description}</p>}
      </div>
    </div>
  );
};

// Komponen utama AwardsSection
const AwardsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [currentImageTitle, setCurrentImageTitle] = useState("");

  const handleImageClick = (url: string, title: string) => {
    setCurrentImageUrl(url);
    setCurrentImageTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Timeout untuk memberi waktu animasi selesai sebelum membersihkan state
    setTimeout(() => {
      setCurrentImageUrl("");
      setCurrentImageTitle("");
    }, 300); // Sesuaikan dengan duration-300 di transisi modal
  };

  return (
    <section id="awards" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-primary-orange text-center mb-12">
        Awards & Certifications
      </h2>

      <div className="max-w-4xl mx-auto">
        <AwardItem
          title="Finalist ICPC Asia Jakarta Regional Contest 2024"
          issuer="BINUS UNIVERSITY"
          date="December 2024"
          description="Successfully advanced as a finalist in one of Asia's most prestigious competitive programming contests, solving complex algorithmic problems under time pressure."
          imageUrl={logoICPC}
          onImageClick={handleImageClick}
        />

        <AwardItem
          title="Finalist Competitive Programming PINGFEST 2023"
          issuer="Universitas Sebelas Maret"
          date="October 2023"
          description="Achieved finalist standing in a competitive programming contest, demonstrating strong problem-solving and algorithmic skills by efficiently solving complex challenges."
          imageUrl={logoPingfest}
          onImageClick={handleImageClick}
        />
      </div>

      {/* --- PENTING: Render ImageModal dan TERUSKAN `isOpen` state --- */}
      {isModalOpen && (
        <ImageModal
          imageUrl={currentImageUrl}
          imageAlt={currentImageTitle}
          onClose={handleCloseModal}
          isOpen={isModalOpen} // Ini yang memastikan animasi berjalan
        />
      )}
    </section>
  );
};

export default AwardsSection;
