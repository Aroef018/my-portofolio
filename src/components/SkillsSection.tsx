// src/components/SkillsSection.tsx
import React from "react";

// Hapus semua import gambar ikon jika Anda ingin menggunakan Devicon sebagai gantinya:
// import htmlIcon from '../assets/html.png';
// import cssIcon from '../assets/css.png';
// import jsIcon from '../assets/js.png';
// import reactIcon from '../assets/react.png';
// import tsIcon from '../assets/typescript.png';
// import tailwindIcon from '../assets/tailwind.png';

const skills = [
  // --- Ubah objek skill untuk menggunakan nama kelas Devicon ---
  // Front-end / Bahasa
  { name: "React.js", class: "devicon-react-original" },
  { name: "JavaScript", class: "devicon-javascript-plain" },
  { name: "TypeScript", class: "devicon-typescript-plain" },
  { name: "C++", class: "devicon-cplusplus-plain" }, // Untuk C++

  // Back-end
  { name: "Express.js", class: "devicon-express-original" }, // Ikon Express.js
  { name: "Laravel", class: "devicon-laravel-plain" },
  { name: "Nest.js", class: "devicon-nestjs-plain" }, // Ikon Laravel

  // Database
  { name: "MySQL", class: "devicon-mysql-plain" },
  { name: "MongoDB", class: "devicon-mongodb-plain" },

  // Version Control
  { name: "Git", class: "devicon-git-plain" },
  // Anda bisa mencari kelas Devicon lainnya di https://devicon.dev/
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 text-primary-orange">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-dark-background border border-primary-orange/30 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {/* --- Ganti <img> dengan <i> dan kelas Devicon --- */}
            <i className={`${skill.class} text-6xl text-text-light mb-4`}></i>
            {/* `text-6xl` dari Tailwind untuk mengatur ukuran ikon, `text-text-light` untuk warna ikon */}
            <p className="text-lg font-semibold text-text-light">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
