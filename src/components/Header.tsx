// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import profileImage from "../assets/profile.png";

const Header: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault(); // Mencegah perilaku default Link yang bisa menyebabkan refresh jika tidak ada Route yang cocok
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-dark-background/90 backdrop-blur-sm z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="#home"
          className="flex items-center"
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
        <ul className="flex space-x-6">
          {/* Ganti <a> dengan <Link> dan tambahkan onClick untuk smooth scrolling */}
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
          <li>
            {/* <Link
              to="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-primary-orange transition-colors"
            >
              Contact
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
