import React from "react";
import { motion } from "framer-motion";

const PresidentMessage = () => {
  return (
    <section id="president-message" className="py-10 bg-gray-900">
      <div className="mx-4 px-4 sm:px-6 lg:px-6">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center">
            {/* Animated Text Content */}
            <motion.div
              className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-amber-100 text-center">
                Mohammad Ahmed Shah (HI, SI)
              </h2>
              <p className="text-amber-100 mb-6 leading-relaxed text-base sm:text-lg text-center">
                "The Arts Council of Pakistan endeavors to uphold and champion the
                rich tapestry of Pakistani arts and culture on the world stage. Our
                aspiration is to provide a nurturing and inspirational environment
                that fosters talent, connections, and collaboration among
                communities not only within Pakistan but across the globe."
              </p>
              <p className="text-amber-100 font-semibold text-base sm:text-lg">
                - President, Arts Council of Pakistan, Karachi.
              </p>
            </motion.div>

            {/* Animated Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://acpkhi.com/imgs/Ahmed%20Shah.webp"
                  alt="President speaking"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;