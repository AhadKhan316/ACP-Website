import React from 'react';
import { motion } from 'framer-motion';

function WcfHero() {
  // Animation variants for text and buttons
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('/path/to/your/hero-image.webp')` }}>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
       
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src="../src/assets/wcf-assets/main-wcf-poster.jpeg"
            alt="World Culture Festival Karachi"
            className="w-64 md:w-80 lg:w-96 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content with Framer Motion animations */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 lg:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
         
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            variants={fadeInUpVariants}
          >
            WHERE CULTURE <span className="text-primary">COMES ALIVE!</span>
          </motion.h1>

         
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90"
            variants={fadeInUpVariants}
          >
            35+ Countries - 250+ Artists - 100+ Performances
            <br />
            <span className="font-semibold">THEATRE - MUSIC - DANCE - FINEARTS</span>
          </motion.p>

          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/90"
            variants={fadeInUpVariants}
          >
            26 SEP TO 02<sup>nd</sup> NOV AT ARTS COUNCIL KARACHI
          </motion.p>

         
          <motion.div
            className="flex flex-col md:flex-row justify-center lg:justify-start items-center space-y-4 md:space-y-0 md:space-x-6"
            variants={fadeInUpVariants}
          >
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              FOR REGISTRATION
            </a>
            <a
              href="#"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              FOR TICKETS
            </a>
            <a
              href="#"
              className="text-white hover:text-primary transition-all duration-300 underline underline-offset-4 hover:underline-offset-8"
            >
              DOWNLOAD SCHEDULE
            </a>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default WcfHero;