// src/components/ContactSection.tsx
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Di sini Anda bisa mengintegrasikan layanan form pihak ketiga seperti Formspree
    // Contoh Formspree: action="https://formspree.io/f/yourformid" method="POST"
    console.log("Form data submitted:", formData);
    alert(
      "Pesan Anda telah dikirim! (Fungsionalitas email perlu diintegrasikan)"
    );
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold text-primary-orange mb-12">
        Get In Touch
      </h2>
      <div className="max-w-2xl mx-auto bg-dark-background border border-primary-orange/30 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-text-muted mb-6">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk
          menghubungi saya!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-dark-background border border-primary-orange/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-text-light"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-dark-background border border-primary-orange/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-text-light"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-dark-background border border-primary-orange/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-text-light resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-orange text-dark-background font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-orange/80 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
