import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Placeholder image for the president's photo (replace with actual WC asset)
const hudaShahMessage = "https://placehold.co/600x400";

const WcHudaShahMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-white relative overflow-hidden">
      {/* Decorative Blur Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={hudaShahMessage}
              alt="President's Photo"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-xl object-cover transform -rotate-3 hover:-translate-y-2 transition-transform duration-300"
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-300 rounded-full opacity-30 blur-xl z-[-1]" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800 mb-6 relative">
              President's Message
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-pink-600 rounded-full" />
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Welcome to the Women's Conference, a platform dedicated to empowering and uplifting women worldwide. As President, I am honored to lead this inspiring gathering where we celebrate resilience, foster leadership, and build a community of change-makers. Join us to share your voice, connect with others, and shape a brighter future together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-lg text-base font-medium hover:bg-pink-500 transition-colors duration-300 w-fit"
            >
              <Link to="/wc/register">Join the Conference</Link>
            </motion.button>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default WcHudaShahMessage;