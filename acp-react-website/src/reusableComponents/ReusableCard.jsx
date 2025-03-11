// src/components/Card.jsx
import React from "react";
import { motion } from "framer-motion";

const Card = ({ name, description, image, buttonText = "Learn More" }) => {
  return (
    <motion.div
      className="relative rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        {/* Use object-contain to show the entire image, maintaining aspect ratio */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent"></div>
      </div>
      <div className="absolute bottom-4 left-4 text-left">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <motion.button
          className="mt-3 px-5 py-2 bg-red-700 hover:bg--red-600 text-white font-semibold rounded-md"
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