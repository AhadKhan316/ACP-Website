import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-900 py-6 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-12 sm:mb-16 lg:mb-20 relative overflow-hidden"
        >
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl shadow-lg overflow-hidden">
            <motion.img
              src="https://acpkhi.com/imgs/ACP%20Drone%202023.webp"
              alt="Arts Council of Pakistan Karachi"
              className="w-full h-full object-cover"
              loading="lazy"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
              <div className="bg-white/90 p-6 sm:p-8 lg:p-6 rounded-xl shadow-lg text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto text-center">
            Get in touch with us regarding any questions, queries, and bookings. We would love to hear from you.
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* For Query */}
            <motion.div
              className="p-6 sm:p-8 bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                For Query
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h18M9 3v2m6-2v2M3 19h18M5 7h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2zm0 12h14a2 2 0 002-2v-8H3v8a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">Call:</p>
                    <a
                      href="tel:+923000802391"
                      className="text-gray-900 text-base sm:text-lg hover:text-gray-600 transition-colors duration-300"
                      aria-label="Call for query at +92-300-0802391"
                    >
                      +92-300-0802391
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 10l6 4 6-4"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">Email:</p>
                    <a
                      href="mailto:info@acpkhi.com"
                      className="text-gray-900 text-base sm:text-lg hover:text-gray-600 transition-colors duration-300"
                      aria-label="Email for query at info@acpkhi.com"
                    >
                      info@acpkhi.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* For Venues Bookings */}
            <motion.div
              className="p-6 sm:p-8 bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                For Venues Bookings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h18M9 3v2m6-2v2M3 19h18M5 7h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2zm0 12h14a2 2 0 002-2v-8H3v8a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">Call:</p>
                    <a
                      href="tel:+923000802392"
                      className="text-gray-900 text-base sm:text-lg hover:text-gray-600 transition-colors duration-300"
                      aria-label="Call for venues bookings at +92-300-0802392"
                    >
                      +92-300-0802392
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 10l6 4 6-4"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">Email:</p>
                    <a
                      href="mailto:booking@acpkhi.com"
                      className="text-gray-900 text-base sm:text-lg hover:text-gray-600 transition-colors duration-300"
                      aria-label="Email for venues bookings at booking@acpkhi.com"
                    >
                      booking@acpkhi.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Find Us Section with Iframe Map */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          className="mb-12 sm:mb-8 lg:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 tracking-tight">
            Find Us
          </h2>
          <div className="relative">
            <div className="p-6 sm:p-8 max-w-md mx-auto mb-8 sm:mb-6 z-10 relative text-center">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                Arts Council of Pakistan Karachi,<br />
                M.R Kiyani Road, Saddar Karachi,<br />
                Pakistan.
              </p>
            </div>
            <div className="w-full h-72 sm:h-96 lg:h-[500px] rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <iframe
                title="Arts Council of Pakistan Karachi Location"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Arts+Council+of+Pakistan+Karachi,+M.R.+Kiyani+Road,+Saddar,+Karachi,+Pakistan&hl=en&z=14&t=m&output=embed&style=feature:all|element:geometry.fill|saturation:-100|lightness:10"
                className="rounded-xl"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactUs;