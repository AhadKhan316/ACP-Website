import React from "react";
import { motion } from "framer-motion";

const ProductionMessage = () => {
  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Framer Motion variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="production-message"
      className="py-12 sm:py-16 bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Subtle Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black pointer-events-none"></div> */}

      <div className="mx-4 px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-b from-black/25 to-gray rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center relative">
            {/* Vertical Divider */}
            {/* <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600 transform -translate-x-1/2 hidden lg:block"></div> */}

            {/* Animated Text Content */}
            <motion.div
              className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3"
                custom={0}
                variants={childVariants}
              >
                Productions
              </motion.h2>
              <motion.p
                className="text-black italic text-sm sm:text-base mb-6 sm:mb-8"
                custom={1}
                variants={childVariants}
              >
                Celebrating Artistic Expression
              </motion.p>
              <motion.div
                className="h-1 w-20 bg-black mx-auto lg:mx-0 mb-6 sm:mb-8 rounded"
                custom={2}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              ></motion.div>
              <motion.p
                className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-6"
                custom={3}
                variants={childVariants}
              >
                We believe in the transformative power of the arts, uniting talents from Pakistan and beyond, and fostering artistic expression and exchange while making culture accessible to all through our digital productions and archives.
              </motion.p>
              <motion.div custom={4} variants={childVariants}>
                <p className="text-black text-base sm:text-lg md:text-xl mb-4">
                  Some of our biggest events of the year include:
                </p>
                <ul className="space-y-2">
                  {[
                    "World Culture Festival",
                    "Aalmi Urdu Conference",
                    "Pakistan Literature Festival",
                    "Pakistan Theatre Festival",
                    "Pakistan Music Festival",
                    "Women’s Conference",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-black text-base sm:text-lg"
                      custom={5 + index}
                      variants={childVariants}
                    >
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.p
                className="text-black text-base sm:text-lg md:text-xl leading-relaxed mt-6"
                custom={11}
                variants={childVariants}
              >
                We believe in the transformative power of the arts, uniting talents from Pakistan and beyond, and fostering artistic expression and exchange while making culture accessible to all through our digital productions and archives.
              </motion.p>
            </motion.div>

            {/* Animated Image */}
            <motion.div
              className="lg:w-1/2 lg:pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl group">
                <img
                  src="https://acpkhi.com/imgs/Producations.webp"
                  alt="Productions"
                  className="w-full h-auto object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-gray-200 rounded-lg transition-all duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductionMessage;