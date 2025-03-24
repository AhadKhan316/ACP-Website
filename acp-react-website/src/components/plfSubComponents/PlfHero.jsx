import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFeatherAlt, FaBook, FaMapMarkerAlt } from "react-icons/fa";

// Typewriter effect hook
const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayText;
};

const PlfHero = () => {
  // Typewriter effect for the title
  const titleText = useTypewriter("Pakistan Literature Festival", 100);
  const subtitleText = useTypewriter("Sukkur Chapter 2 | 25th & 26th Feb 2024", 50);
  const venueText = useTypewriter("Venue: Sukkur IBA University", 50);

  // Floating animation variants for cultural elements
  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-[600px] md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-00 to-green-800">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 bg-green-900 opacity-10"
        style={{
          backgroundImage: "url('../src/assets/plf-assets/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating Cultural Elements */}
      <motion.div
        className="absolute top-20 left-10 md:left-20 text-green-600 opacity-50"
        variants={floatVariants}
        animate="animate"
      >
        <FaFeatherAlt size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 md:right-20 text-green-600 opacity-50"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <FaBook size={40} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-1/4 text-green-600 opacity-30 hidden md:block"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Title with Typewriter Effect */}
        <h1 className="text-4xl underline sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent mb-3 sm:mb-4">
          {titleText}
          <motion.span
            className="inline-block w-1 h-8 md:h-10 bg-green-900 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-100"
        >
          {subtitleText}
        </motion.p>

        {/* Venue with Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-lg sm:text-lg md:text-2xl font-bold mb-6 sm:mb-8 flex justify-center items-center text-gray-100"
        >
          <FaMapMarkerAlt className="mr-2 text-green-900" />
          {venueText}
        </motion.p>

        {/* Register Button with Pulse Effect */}
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(13, 84, 43, 0.7)",
              "0 0 0 15px rgba(13, 84, 43, 0)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        >
          <Link
            to="/register"
            className="inline-flex items-center bg-green-900 text-white font-sans font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transition duration-300 text-sm sm:text-base"
          >
            <FaFeatherAlt className="mr-1 sm:mr-2" />
            Register Yourself
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlfHero;