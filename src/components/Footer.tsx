// src/components/Footer.tsx
import React from "react";

// Hapus baris ini jika ada:
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-background border-t border-primary-orange/30 py-8 text-center text-text-muted">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Amar Ma'ruf. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          {/* GitHub (Menggunakan Devicon - karena sudah berfungsi) */}
          <a
            href="https://github.com/Aroef018"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary-orange transition-colors"
            aria-label="GitHub Profile"
          >
            <i className="devicon-github-original text-3xl"></i>
          </a>

          {/* LinkedIn (Menggunakan Devicon - karena sudah berfungsi) */}
          <a
            href="https://www.linkedin.com/in/amar-ma-ruf-5b07a6249/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary-orange transition-colors"
            aria-label="LinkedIn Profile"
          >
            <i className="devicon-linkedin-plain text-3xl"></i>
          </a>

          <a
            href="https://www.instagram.com/aroef_/?hl=id" // Ganti dengan URL Instagram Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary-orange transition-colors"
            aria-label="Instagram Profile"
          >
            <i className="fa-brands fa-instagram text-3xl"></i>{" "}
            {/* Ikon Instagram Font Awesome */}
          </a>

          {/* Email (Menggunakan Font Awesome dari CDN) */}
          <a
            href="mailto:amarsaja42@gmail.com"
            className="text-text-muted hover:text-primary-orange transition-colors"
            aria-label="Send email"
          >
            <i className="fa-solid fa-envelope text-3xl"></i>{" "}
            {/* Gunakan kelas Font Awesome */}
          </a>

          {/* Jika ingin menggunakan Font Awesome untuk GitHub dan LinkedIn juga: */}
          {/* <a href="https://github.com/Amar-Ma'ruf" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-orange transition-colors" aria-label="GitHub Profile">
            <i className="fa-brands fa-github text-3xl"></i>
          </a>
          <a href="https://linkedin.com/in/amar-ma'ruf" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-orange transition-colors" aria-label="LinkedIn Profile">
            <i className="fa-brands fa-linkedin-in text-3xl"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
