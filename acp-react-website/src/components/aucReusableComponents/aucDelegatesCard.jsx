import React from "react";
import { motion } from "framer-motion";

const AucDelegateCard = ({ name, title, imageUrl, bio }) => {
  return (
    <motion.div
      className="w-80 sm:w-74 md:w-92 flex-shrink-0 relative bg-white rounded-lg shadow-md overflow-hidden" // Adjusted base width
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-white z-0"
        whileHover={{ x: -10, y: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Content Layer */}
      <div className="relative z-10 p-4 flex flex-col items-center text-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-[231px] h-[281px] object-cover rounded-md mb-4 border border-gray-200"
          />
        )}
        <h3 className="text-2xl font-semibold text-red-700">{name}</h3>
        <p className="text-lg text-gray-600">{title}</p>
        <div className="w-12 h-px bg-[#D1D5DB] my-3" />
        <p className="text-xl text-gray-600">{bio}</p>
      </div>

      {/* Decorative Accent */}
      <div className="absolute top-2 right-2 w-4 h-4 bg-red-700 rounded-full opacity-50" />
    </motion.div>
  );
};

export default AucDelegateCard;