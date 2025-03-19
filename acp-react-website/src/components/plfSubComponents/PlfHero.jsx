import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const PlfHero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://www.artscouncil.org.pk/wp-content/uploads/2023/11/Pakistan-Literature-Festival-sukkur-end-at-IBA-Univesity-Sukkur-by-Arts-Council-Karachi-9.jpg')", // Replace with your hero image
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-amber-400/30"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-4 text-ivory-100"
        >
          Pakistan Literature Festival
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl font-sans mb-6 text-ivory-100"
        >
          Sukkur Chapter 2 | 25th & 26th Feb 2024
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl font-sans mb-8 text-ivory-100"
        >
          Venue: Sukkur IBA University
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/register"
            className="inline-block bg-amber-500 text-navy-900 font-sans font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-amber-400 transition duration-300"
          >
            Register Yourself
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlfHero;