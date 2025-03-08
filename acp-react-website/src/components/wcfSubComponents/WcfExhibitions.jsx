import React from 'react';
import { motion } from 'framer-motion';

function WcfExhibitions() {
  const exhibitions = [
    {
      title: "Sindh Artists Exhibition",
      image: "/path/to/sindh-artists.jpg",
    },
    {
      title: "Art Exhibition Masters' & Contemporary Art",
      image: "/path/to/art-exhibition-masters.jpg",
    },
    {
      title: "Candy Forest",
      image: "/path/to/candy-forest.jpg",
    },
    {
      title: "Behind The Stage",
      image: "/path/to/behind-the-stage.jpg",
    },
    {
      title: "Modern Art Showcase",
      image: "/path/to/modern-art.jpg",
    },
  ];

  return (
    <section className="py-10 sm:px-6 lg:px-8 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Exhibitions
      </h2>

      <div className="mx-4 bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {exhibitions.slice(0, 3).map((exhibition, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  {/* <span className="text-white text-lg font-semibold">🎨 View Exhibition</span> */}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {exhibition.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {exhibitions.slice(3, 5).map((exhibition, index) => (
            <motion.div
              key={index + 3} 
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 0.99 }}
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  {/* <span className="text-white text-lg font-semibold">🎨 View Exhibition</span> */}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {exhibition.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WcfExhibitions;