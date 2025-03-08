import React from 'react';
import { motion } from 'framer-motion';

function WcfVideoSection() {
  // Animation variants for text and video
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="py-10 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <div className="mx-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            World Culture Festival Karachi 2024
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6">
            26 Sep to 30 Oct | Arts Council of Pakistan Karachi
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Join us for an unforgettable celebration of culture, art, and music featuring 35+ countries, 250+ artists, and 100+ performances.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInRightVariants}
        >
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/y2B89Bf5SHA?si=PKFZkNlKqjJa5go_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WcfVideoSection;