import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const PlfAbout = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-navy-800 text-ivory-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            About PLF Sukkur Chapter 2
          </h2>
          <p className="text-lg md:text-xl font-sans mb-8">
            The Pakistan Literature Festival (PLF) celebrates the rich literary heritage of Pakistan, bringing together writers, poets, artists, and intellectuals from across the country. Sukkur Chapter 2, hosted by the Arts Council of Pakistan, Karachi, aims to foster cultural dialogue and inspire the youth through literature and art.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="flex items-center text-amber-500 hover:text-amber-400 transition duration-300"
            >
              <FaCalendarAlt className="mr-2" /> 25th & 26th Feb
            </a>
            <a
              href="#"
              className="flex items-center text-amber-500 hover:text-amber-400 transition duration-300"
            >
              <FaMapMarkerAlt className="mr-2" /> Sukkur IBA University
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <img
            src="https://acpkhi.com/events/sukkur%20chapter%202.webp"
            alt="PLF Sukkur Chapter 2"
            className="w-full h-auto max-h-[800px] object-contain rounded-lg border border-navy-700 shadow-lg"
          />
          <div className="absolute inset-0 bg-navy-900/50 rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlfAbout;