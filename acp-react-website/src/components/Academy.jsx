import React from "react";
import { motion } from "framer-motion";

const Academies = () => {
  return (
    <section id="president-message" className="py-10 bg-[#111827]">
      <div className="mx-15 px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center bg-[#1F2937] rounded-lg">
        {/* Animated Image */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 md:order-2" // Added md:order-2
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
          className="md:w-1/2 md:pr-8 lg:pr-12 md:order-1" // Added md:pr-8, lg:pr-12, and md:order-1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#F5F1E1]">
            Academies
          </h2>
          <p className="text-[#F5F1E1] text-base sm:text-lg mb-6 leading-relaxed">
            ACPKHI houses multiple arts academies. Our core belief is nurturing
            young talents to become creative, accomplished individuals, bringing
            pride to our nation. With academies catering to those passionate
            about theatre, singing, music, dance and fine arts, textile design,
            communication design we train hundreds of students yearly and have
            continued to do so with expert instructors since 1954.
          </p>
          {/* Removed empty paragraph */}
        </motion.div>
      </div>
    </section>
  );
};

export default Academies;