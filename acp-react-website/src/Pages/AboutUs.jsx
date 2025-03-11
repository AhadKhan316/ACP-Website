import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWithSwiper from "../reusableComponents/ReusableCarousel";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("history");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "history":
        return (
          <SectionWithSwiper
            title="Our History"
            description="Founded in 1980, the Arts Council of Pakistan has been a beacon for cultural preservation, talent development, and a place of collaboration for artists from all corners of Pakistan. We take pride in fostering artistic growth and supporting a creative ecosystem that spans from traditional to contemporary forms."
            images={[
              {
                src: "https://acpkhi.com/studio%20I/1.jpg",
                alt: "Historical 1",
              },
              {
                src: "https://acpkhi.com/studio%20I/2.jpg",
                alt: "Historical 2",
              },
              {
                src: "https://acpkhi.com/imgs/ACP%20Drone%202023.webp",
                alt: "Historical 3",
              },
            ]}
          />
        );
      case "vision":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg mt-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F1E1] mb-6 text-center">
              Our Vision
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
              Our vision is to create a world where art unites people, transcending borders and creating a global dialogue through artistic expression. We aim to support artists and bring attention to the diverse, rich culture of Pakistan while influencing global trends through innovation and cultural engagement.
            </p>
          </motion.div>
        );
      case "mission":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg mt-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F1E1] mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
              Our mission is to serve as the premier institution supporting the development of artistic talents, fostering a rich cultural dialogue, and promoting the cultural heritage of Pakistan. We aim to provide a platform for artists, both emerging and established, to share their work with a broader audience, enrich society, and promote art as a universal language.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#111827] text-white py-10 sm:px-6 lg:px-8">
      <div className="mx-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-[#F5F1E1] mb-12 text-center"
        >
          About Us
        </motion.h1>

        <div className="mb-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {["history", "vision", "mission"].map((section) => (
            <motion.button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`py-2 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base ${activeSection === section
                ? "bg-[#1E293B] text-white border border-red-700 shadow-md"
                : "bg-gray-800 text-white hover:bg-gray-700 hover:text-red-700 cursor-pointer"
                }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              aria-label={`Switch to ${section.charAt(0).toUpperCase() + section.slice(1)}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>

        {renderSection()}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F1E1] mb-6 text-center">
            Join Us in Our Mission
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 text-center">
            Be part of a growing movement to nurture creativity, support artists, and celebrate art in all its forms.
          </p>
          <div className="text-center">
            <a
              href="#cta"
              className="inline-block bg-red-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-xl hover:bg-red-600 transition duration-300"
              aria-label="Get Involved"
            >
              Get Involved
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;