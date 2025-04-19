import React from "react";
import { motion } from "framer-motion";

const ExhibitionGrid = ({ exhibitions = [], title = "Exhibitions" }) => {
  // Smooth animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-4">
        {/* Clean Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          {/* <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div> */}
        </div>

        {/* Optimized Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={index}
              className="group"
              variants={card}
              whileHover="hover"
            >
              <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Full-size image container */}
                <div className="relative pt-[100%]"> {/* 1:1 aspect ratio */}
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                </div>

                {/* Text content */}
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {exhibition.title}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-black">On display</span>
                    <button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                      View details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
            View All Exhibitions
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionGrid;