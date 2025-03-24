import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const PlfAbout = () => {
  const [activeTab, setActiveTab] = useState("plf"); // Default to "About PLF"

  return (
    <section className="py-10 sm:px-6 md:px-8 bg-green-800 text-ivory-100">
      {/* Tab Navigation */}
      <div className="mx-4 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("plf")}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-sans text-base sm:text-lg font-semibold transition duration-300 ${activeTab === "plf"
                ? "bg-gray-900 text-white"
                : "bg-green-900 text-gray-100 hover:bg-green-700"
              }`}
          >
            About PLF
          </button>
          <button
            onClick={() => setActiveTab("acp")}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-sans text-base sm:text-lg font-semibold transition duration-300 ${activeTab === "acp"
                ? "bg-gray-900 text-white"
                : "bg-green-900 text-gray-100 hover:bg-green-700"
              }`}
          >
            About ACP
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "plf" && (
          <motion.div
            key="plf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mx-4 flex flex-col lg:flex-row items-center gap-6"
          >
            {/* About PLF Text Section.ConcurrentMode */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 p-4 sm:p-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white">
                About Pakistan Literature Festival
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-sans mb-6 sm:mb-8 text-gray-100">
                The Pakistan Literature Festival is a first-of-its-kind mega event in the country. The festival will celebrate and honor our culture, languages, literature, and art on a global scale in a way that has never been done before.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <a
                  href="#"
                  className="flex items-center text-gray-100 hover:text-gray-200 transition duration-300 text-base sm:text-lg"
                >
                  <FaCalendarAlt className="mr-2" /> 25th & 26th Feb
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-100 hover:text-gray-200 transition duration-300 text-base sm:text-lg"
                >
                  <FaMapMarkerAlt className="mr-2" /> Sukkur IBA University
                </a>
              </div>
            </motion.div>

            {/* About PLF Video Section */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 p-4 sm:p-6"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/5UavsFzUT0Q?si=kWMBDRwoNFXNJRfA&autoplay=1&loop=1&mute=1&playlist=5UavsFzUT0Q"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-navy-900/50 rounded-lg pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === "acp" && (
          <motion.div
            key="acp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mx-4 p-4 sm:p-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white">
                About Arts Council of Pakistan
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-sans mb-6 sm:mb-8 text-gray-100">
                The Arts Council of Pakistan, Karachi, is a leading cultural institution dedicated to promoting art, literature, and cultural heritage across Pakistan. Established in 1954, it has been a beacon for artists and intellectuals, hosting events like the Pakistan Literature Festival to foster creativity and cultural exchange.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlfAbout;