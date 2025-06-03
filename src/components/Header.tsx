// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png"; // Pastikan path ini benar

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mobile menu

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Tutup menu mobile setelah klik
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-dark-background/90 backdrop-blur-sm z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Nama di Kiri */}
        <Link
          to="#home"
          className="flex items-center z-20" // Tambah z-20 agar di atas menu mobile
          onClick={(e) => handleScroll(e, "home")}
        >
          <img
            src={profileImage}
            alt="Logo Amar Ma'ruf"
            className="rounded-full h-12 w-12 object-cover mr-2"
          />
          <div className="text-2xl font-bold text-primary-orange">
            Amar Ma'ruf
          </div>
        </Link>

        {/* Hamburger Menu Icon (Hanya tampil di layar kecil) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-primary-orange focus:outline-none z-20" // Z-20 agar di atas menu mobile
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              // Ikon 'X' saat menu terbuka
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              // Ikon Hamburger saat menu tertutup
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>

        {/* Navigasi Desktop (Selalu tampil di layar besar) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-primary-orange transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-primary-orange transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#experience"
              onClick={(e) => handleScroll(e, "experience")}
              className="hover:text-primary-orange transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="hover:text-primary-orange transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-primary-orange transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="#awards"
              onClick={(e) => handleScroll(e, "awards")}
              className="hover:text-primary-orange transition-colors"
            >
              Awards
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navigasi Mobile (Tampil sebagai overlay saat menu terbuka) */}
      {/* Menggunakan kelas dinamis untuk opacity dan translate untuk animasi sliding */}
      <div
        className={`
          md:hidden fixed inset-0 top-[64px] bg-dark-background/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-4
          transform transition-transform duration-300 ease-out
          ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
        style={{ height: "calc(100vh - 64px)" }} // Atur tinggi agar pas setelah header
      >
        <ul className="flex flex-col space-y-8 text-2xl">
          <li>
            <Link
              to="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-primary-orange transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-primary-orange transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#experience"
              onClick={(e) => handleScroll(e, "experience")}
              className="hover:text-primary-orange transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="hover:text-primary-orange transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-primary-orange transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="#awards"
              onClick={(e) => handleScroll(e, "awards")}
              className="hover:text-primary-orange transition-colors"
            >
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
