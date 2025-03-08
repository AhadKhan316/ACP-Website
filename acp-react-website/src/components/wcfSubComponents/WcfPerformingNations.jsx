import React from 'react';
import { motion } from 'framer-motion';

function WcfPerformances() {
  const nations = [
    { name: 'Russia', image: '/path/to/russia.jpg' },
    { name: 'South Korea', image: '/path/to/south-korea.jpg' },
    { name: 'Palestine', image: '/path/to/palestine.jpg' },
    { name: 'Burundi', image: '/path/to/burundi.jpg' },
    { name: 'Italy', image: '/path/to/italy.jpg' },
    { name: 'USA', image: '/path/to/usa.jpg' },
    { name: 'France', image: '/path/to/france.jpg' },
    { name: 'Japan', image: '/path/to/japan.jpg' },
    { name: 'Germany', image: '/path/to/germany.jpg' },
    { name: 'Brazil', image: '/path/to/brazil.jpg' },
    { name: 'India', image: '/path/to/india.jpg' },
    { name: 'China', image: '/path/to/china.jpg' },
  ];

  const duplicatedNations = [...nations, ...nations];

  // Animation variants for horizontal scrolling
  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Performing Nations
      </motion.h2>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {duplicatedNations.map((nation, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 sm:w-56 md:w-64 mx-4 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={nation.image}
                alt={nation.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 text-center">
                  {nation.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WcfPerformances;