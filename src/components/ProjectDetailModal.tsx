// src/components/ProjectDetailModal.tsx
import React, { useEffect, useRef } from "react";

// --- PERBAIKAN: Definisi interface ProjectDetailModalProps harus ADA di sini ---
interface ProjectDetailModalProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  onClose: () => void;
  isOpen: boolean; // Untuk kontrol animasi
}
// --- AKHIR PERBAIKAN: Definisi interface ---

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  technologies,
  onClose,
  isOpen, // Kita akan mengandalkan ini untuk render utama
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Efek untuk mengelola kelas `opacity` pada overlay dan content modal
  // serta fokus ke modal saat dibuka
  useEffect(() => {
    // Logika ini akan memastikan kelas diterapkan saat `isOpen` berubah
    if (modalRef.current) {
      if (isOpen) {
        // Saat modal seharusnya terbuka: atur opasitas/skala untuk transisi masuk
        modalRef.current.classList.remove("opacity-0", "scale-95", "hidden");
        // Tambahkan 'block' untuk memastikan elemen ditampilkan
        modalRef.current.classList.add("opacity-90", "scale-100", "block");
        modalRef.current.focus();
      } else {
        // Saat modal seharusnya tertutup: atur opasitas/skala untuk transisi keluar
        // Pastikan 'block' dihapus agar transisi berjalan
        modalRef.current.classList.remove("opacity-90", "scale-100", "block");
        modalRef.current.classList.add("opacity-0", "scale-95");
        // Setelah transisi keluar, sembunyikan sepenuhnya dari DOM
        const timer = setTimeout(() => {
          if (modalRef.current) modalRef.current.classList.add("hidden");
        }, 300); // Sesuaikan dengan duration-300 di Tailwind
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen]); // Jalankan efek ini setiap kali `isOpen` berubah

  // Ini adalah kondisi render utama: hanya render komponen jika `isOpen` true
  // atau jika sedang dalam proses animasi penutupan (dikelola oleh kelas CSS)
  // Kita akan memastikan komponen ini ada di DOM selama transisi
  if (
    !isOpen &&
    (!modalRef.current || modalRef.current.classList.contains("hidden"))
  ) {
    return null; // Tidak render sama sekali jika tidak open dan sudah sepenuhnya hidden
  }

  return (
    // Overlay Modal: Lebih solid dan selalu menutupi layar penuh
    <div
      ref={modalRef} // Gunakan modalRef di sini juga untuk mengontrol visibility overlay
      className={`
        fixed inset-0 bg-black flex items-center justify-center p-4 z-50
        transition-opacity duration-300
        ${isOpen ? "opacity-90" : "opacity-0 pointer-events-none"}
        ${
          isOpen ? "block" : "hidden"
        } {/* Ini akan mengontrol display, penting untuk transisi */}
      `}
      onClick={onClose}
    >
      {/* Konten Modal: Dengan transisi scale */}
      <div
        // Hapus ref dari sini, karena sudah di div utama
        className={`
          relative bg-dark-background p-6 rounded-lg max-w-4xl max-h-[90vh] overflow-auto
          transform transition-all duration-300 ease-out
          ${isOpen ? "scale-100" : "scale-95"}
        `}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-title"
      >
        {/* ... (Konten modal lainnya) ... */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-primary-orange hover:text-white text-3xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h3
          id="modal-title"
          className="text-3xl font-bold text-primary-orange mb-3"
        >
          {title}
        </h3>
        <p className="text-text-light mb-6">{description}</p>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-text-light mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {/* --- PERBAIKAN: Berikan tipe eksplisit pada parameter map --- */}
            {technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-primary-orange/20 text-primary-orange text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-start gap-4 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-orange text-dark-background font-bold py-2 px-6 rounded-full hover:bg-primary-orange/80 transition-all duration-300"
          >
            View GitHub
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-orange text-primary-orange font-bold py-2 px-6 rounded-full hover:bg-primary-orange hover:text-dark-background transition-all duration-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
