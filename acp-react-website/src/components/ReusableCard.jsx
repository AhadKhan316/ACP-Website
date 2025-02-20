// src/components/Card.jsx
import React from "react";
import { motion } from "framer-motion";

const Card = ({ name, description, image, buttonText = "Learn More" }) => {
  return (
    <motion.div
      className="relative bg-[#1E293B] rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Image Section */}
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Text Section */}
      <div className="absolute bottom-4 left-4 text-left">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <motion.button
          className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;