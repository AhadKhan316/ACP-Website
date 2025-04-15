import React from "react";
import { motion } from "framer-motion";

const academies = () => {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="academies"
      className="py-6 sm:py-6 bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Subtle Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black pointer-events-none"></div> */}

      <div className="mx-4 px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-b from-white/25 to-gray rounded-xl overflow-hidden px-4 py-4 ">
          <div className="sm:p-6 md:p-6 lg:p-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            {/* Animated Image */}
            <motion.div
              className="lg:w-1/2 lg:-ml-16 mb-8 lg:mb-0 z-10"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl group">
                <img
                  src="https://acpkhi.com/imgs/academies.webp"
                  alt="President speaking"
                  className="w-full h-auto object-covert transition-all duration-300"
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-gray-200 rounded-lg transition-all duration-300"></div>
              </div>
            </motion.div>

            {/* Animated Text Content */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3"
                custom={1}
                variants={childVariants}
              >
                Academies
              </motion.h2>
              <motion.p
                className="text-black italic text-sm sm:text-base mb-6 sm:mb-8"
                custom={2}
                variants={childVariants}
              >
                Nurturing Creativity Since 1954
              </motion.p>
              <motion.div
                // className="h-1 w-20 bg-black mx-auto lg:mx-0 mb-6 sm:mb-8 rounded"
                custom={3}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              ></motion.div>
              <motion.p
                className="text-black text-base sm:text-lg md:text-xl leading-relaxed"
                custom={4}
                variants={childVariants}
              >
                ACPKHI houses multiple arts academies. Our core belief is nurturing young talents to become creative, accomplished individuals, bringing pride to our nation. With academies catering to those passionate about theatre, singing, music, dance, fine arts, textile design, and communication design, we train hundreds of students yearly and have continued to do so with expert instructors since 1954.
              </motion.p>
              {/* Uncomment if you want to add the president's name */}
              {/* <motion.p
                className="text-gray-400 font-semibold mt-4"
                custom={5}
                variants={childVariants}
              >
                - President, Arts Council of Pakistan, Karachi
              </motion.p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default academies;