import React from "react";
import { motion } from "framer-motion";

const PresidentMessage = () => {
  return (
    <section id="president-message" className="py-10 bg-gray-900">
      <div className="mx-4 px-4 sm:px-6 lg:px-6">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center">
            {/* Animated Image */}
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <img
                src="https://acpkhi.com/imgs/academies.webp"
                alt="President speaking"
                className="rounded-lg shadow-lg w-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Animated Text Content */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-4 text-[#F5F1E1]">
                Academies
              </h2>
              <p className="text-[#F5F1E1] text-lg mb-6 leading-relaxed">
                ACPKHI houses multiple arts academies. Our core belief is nurturing young talents to become creative, accomplished individuals, bringing pride to our nation. With academies catering to those passionate about theatre, singing, music, dance and fine arts, textile design, communication design we train hundreds of students yearly and have continued to do so with expert instructors since 1954.
              </p>
              <p className="text-gray-700 font-semibold">
                {/* - President, Arts Council of Pakistan, Karachi. */}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
