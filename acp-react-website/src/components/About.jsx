// src/components/PYFAbout.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

import presidentImg from '../assets/governing-body-new/ahmed-shah.png'

const About = () => {
  const [activeTab, setActiveTab] = useState("about"); // Default tab: About

  // Tab content data
  const tabs = [
    {
      id: "about",
      title: "About",
      content: (
        <div className="px-4 sm:p-10 md:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-amber-100 font-bold text-center mb-4 sm:mb-6">
            About
          </h2>
          <p className="text-amber-100 text-center mx-auto leading-relaxed text-base sm:text-lg md:text-xl lg:max-w-3xl">
            Arts Council supports cultural activities while educating youth in the field of arts.
            It strives to promote literature, fine arts, and performing arts in Pakistan.
          </p>
        </div>
      ),
    },
    {
      id: "president",
      title: "President's Message",
      content: (
        <div className="px-4 sm:p-10 md:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-amber-100 font-bold text-center mb-4 sm:mb-6">
            President's Message
          </h2>
          {/* President's Image */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-black shadow-lg">
              <img
                src={presidentImg}
                // ../assets/team/daniyal.png
                alt="President Mohammad Ahmed Shah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl text-amber-100 font-bold text-center mb-4 sm:mb-6">
            Mohammad Ahmed Shah (HI, SI)
          </h4>
          <p className="text-amber-100 text-center mx-auto leading-relaxed text-base sm:text-lg md:text-xl lg:max-w-3xl">
            The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage. Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe.
          </p>
        </div>
      ),
    },
  ];

  // Framer Motion variants for tab content animation
  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  // Framer Motion variants for tab buttons
  const buttonVariants = {
    active: {
      backgroundColor: "#b91c1c", // Red-700 for active tab
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    inactive: {
      backgroundColor: "#4b5563", // Gray-600 for inactive tab
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#b91c1c", // Red-700 on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="about" className="py-10 bg-gray-900">
      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 py-4 rounded-lg shadow-xl overflow-hidden">
          {/* Tab Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className="px-4 py-2 rounded-lg text-white font-semibold text-sm sm:text-base"
                variants={buttonVariants}
                initial="inactive"
                animate={activeTab === tab.id ? "active" : "inactive"}
                whileHover={activeTab === tab.id ? {} : "hover"}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab} // Ensures animation retriggers on tab change
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;