// src/components/ImageModal.tsx
import React, { useEffect, useRef } from "react";

interface ImageModalProps {
  imageUrl: string;
  imageAlt: string;
  onClose: () => void;
  isOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  imageAlt,
  onClose,
  isOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      if (isOpen) {
        modalRef.current.classList.remove("opacity-0", "scale-95", "hidden");
        modalRef.current.classList.add("opacity-90", "scale-100", "block");
        modalRef.current.focus();
      } else {
        modalRef.current.classList.remove("opacity-90", "scale-100", "block"); // Pastikan 'block' dihapus
        modalRef.current.classList.add("opacity-0", "scale-95");
        const timer = setTimeout(() => {
          if (modalRef.current) modalRef.current.classList.add("hidden");
        }, 300); // Sesuaikan dengan duration-300 di Tailwind
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen]);

  if (
    !isOpen &&
    (!modalRef.current || modalRef.current.classList.contains("hidden"))
  ) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      className={`
        fixed inset-0 bg-black flex items-center justify-center p-4 z-50
        transition-opacity duration-300
        ${isOpen ? "opacity-90" : "opacity-0 pointer-events-none"}
        ${isOpen ? "block" : "hidden"}
      `}
      onClick={onClose}
    >
      <div
        className={`
          relative bg-dark-background p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-auto
          transform transition-all duration-300 ease-out
          ${isOpen ? "scale-100" : "scale-95"}
        `}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-image-title" // Ganti id ini agar unik
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-primary-orange hover:text-white text-3xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        <p id="modal-image-title" className="text-center text-text-light mt-4">
          {imageAlt}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
