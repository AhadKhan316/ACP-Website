import React from "react";
import { motion } from "framer-motion";

// Reusable ExhibitionGrid Component
const ExhibitionGrid = ({
  exhibitions = [], // Array of exhibition data
  title = "Default Title", // Section title
  gridCols = {
    base: 1, // Default grid columns for base (mobile)
    sm: 2, // Default grid columns for small screens
    lg: 3, // Default grid columns for large screens
  }, // Responsive grid columns
  offsetRows = true, // Enable/disable offset rows for visual effect
  sectionClassName = "", // Custom class for the section
  gridClassName = "", // Custom class for the grid container
  cardClassName = "", // Custom class for each card
  titleClassName = "", // Custom class for the section title
  cardTitleClassName = "", // Custom class for the card title
  imageAspectRatio = "1/1", // Default aspect ratio for images (e.g., "4/3", "16/9", "1/1")
  maxImageHeight = "400px", // Maximum height for images
  useHexClip = true, // Enable/disable hexagonal clip path
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className={`relative py-12 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden ${sectionClassName}`}
    >
      {/* Section Header */}
      <motion.h2
        className={`text-4xl md:text-5xl font-bold text-white text-center mb-12 relative z-10 ${titleClassName}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Exhibition Grid */}
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className={`grid grid-cols-${gridCols.base} sm:grid-cols-${gridCols.sm} lg:grid-cols-${gridCols.lg} gap-8 bg-gray-800 p-8 rounded-lg shadow-xl ${gridClassName}`}
        >
          {exhibitions.map((exhibition, index) => {
            const isOffset =
              offsetRows && index % 2 === 1 && window.innerWidth >= 640;
            return (
              <motion.div
                key={exhibition.title}
                className={`relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 ${isOffset ? "mt-12 sm:mt-16" : ""} ${cardClassName}`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Image Container */}
                <div
                  className={`relative w-full overflow-hidden ${useHexClip ? "clip-hexagon" : ""}`}
                  style={{
                    aspectRatio: imageAspectRatio, 
                    maxHeight: maxImageHeight, 
                  }}
                >
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Glowing border effect */}
                  </motion.div>
                </div>

                {/* Title */}
                <motion.div
                  className="p-4 text-center"
                  variants={titleVariants}
                >
                  <h3
                    className={`text-xl md:text-2xl font-bold text-white ${cardTitleClassName}`}
                  >
                    {exhibition.title}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ExhibitionGrid;