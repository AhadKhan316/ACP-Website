import React from "react";
import { motion } from "framer-motion";

// Animation variants for text and buttons
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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

const glowVariants = {
  hidden: { textShadow: "0 0 0 rgba(255, 255, 255, 0)" },
  visible: {
    textShadow: [
      "0 0 10px rgba(255, 255, 255, 0.5)",
      "0 0 20px rgba(255, 255, 255, 0.8)",
      "0 0 10px rgba(255, 255, 255, 0.5)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatVariants = {
  hover: {
    y: [0, -10, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

function WcfHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('https://acpkhi.com/imgs/ACP%20Drone%202023.webp')` }}
    >
      {/* Gradient overlay to enhance contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Dynamic SVG Background Animation */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="displacementFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <g filter="url(#displacementFilter)">
          <circle
            cx="10%"
            cy="20%"
            r="100"
            fill="rgba(255, 255, 255, 0.1)"
            className="animate-pulse"
          />
          <circle
            cx="80%"
            cy="30%"
            r="150"
            fill="rgba(255, 255, 255, 0.1)"
            className="animate-pulse"
          />
          <circle
            cx="50%"
            cy="70%"
            r="120"
            fill="rgba(255, 255, 255, 0.1)"
            className="animate-pulse"
          />
        </g>
      </svg>

      {/* Content Container */}
      <div className="relative z-10 mx-4 px-4 sm:px-6 lg:px-8 text-center">
        {/* Content with Framer Motion animations */}
        <motion.div
          className="space-y-6 lg:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase"
            variants={fadeInUpVariants}
            whileHover={glowVariants}
          >
            WHERE CULTURE <span className="text-red-600 underline">COMES ALIVE!</span>
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
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
            variants={fadeInUpVariants}
          >
            <motion.button
              href="#"
              className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg"
              whileHover="hover"
              variants={floatVariants}
            >
              FOR REGISTRATION
            </motion.button>
            {/* <motion.button
              href="#"
              className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
              whileHover="hover"
              variants={floatVariants}
            >
              FOR TICKETS
            </motion.button> */}
            {/* <motion.a
              href="#"
              className="text-white text-xl hover:text-red-600 transition-all duration-300 underline underline-offset-4 hover:underline-offset-8"
              whileHover={{ scale: 1.05 }}
            >
              DOWNLOAD SCHEDULE
            </motion.a> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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