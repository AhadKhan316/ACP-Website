import React from 'react';
import { motion } from 'framer-motion';

function WcfAboutSection() {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  return (
    <>
      {/* About Festival Section */}
      <section className="py-10 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <motion.div
          className="mx-4 text-center bg-gray-800 p-6 rounded-lg shadow-lg"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
            variants={fadeInVariants}
          >
            World Culture Festival Karachi
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            variants={fadeInVariants}
          >
            Experience a world without borders at the World Culture Festival - Karachi, the grandest global artistic gathering ever hosted in Pakistan. The event, a significant step in the Council's efforts of cultural diplomacy, is set to bring together over 250 talented artists from over 35 countries, across all continents to showcase the best talent in music, theatre, dance, and fine arts in a manner never seen before.
          </motion.p>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-10 sm:px-6 lg:px-8 bg-gray-900">
        <motion.div
          className="mx-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gray-800 p-6 rounded-lg shadow-lg "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Image */}
          <motion.img
            src="../src/assets/governing-body-new/ahmed-shah.png"
            alt="Ahmed Shah (H.I, S.I)"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
            variants={fadeInVariants}
          />

          {/* Quote and Author */}
          <motion.div className="text-center md:text-left" variants={staggerContainer}>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed italic mb-4"
              variants={fadeInVariants}
            >
              "The World Culture Festival is the grand celebration of Arts Council of Pakistan, Karachi's efforts of cultural diplomacy. We look forward to welcoming you to experience the world at your doorstep."
            </motion.p>
            <motion.p
              className="text-gray-300 font-bold"
              variants={fadeInVariants}
            >
              - Ahmed Shah (H.I, S.I)
            </motion.p>
            <motion.p
              className="text-gray-300"
              variants={fadeInVariants}
            >
              President Arts Council of Pakistan, Karachi
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Arts Council Section */}
      <section className="py-10 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <motion.div
          className="mx-4 text-center bg-gray-800 p-6 rounded-lg shadow-lg"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
            variants={fadeInVariants}
          >
            Arts Council of Pakistan Karachi
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            variants={fadeInVariants}
          >
            The Arts Council of Pakistan, Karachi, has been a beacon of cultural promotion and preservation since 1954, championing the arts both locally and globally, especially in the past decade and a half. With the World Culture Festival - Karachi, we're taking our mission to the next level, hosting Pakistan’s largest international cultural event. This grand festival embodies our commitment to bridging cultural divides and enhancing Pakistan's cultural diplomacy on the world stage.
          </motion.p>
        </motion.div>
      </section>

    </>
  );
}

export default WcfAboutSection;