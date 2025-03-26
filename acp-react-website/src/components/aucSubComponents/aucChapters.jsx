import React from "react";
import { motion } from "framer-motion";

// Sample chapter data (replace with your actual data)
const upcomingChapters = [
  {
    title: "Chapter 5: Urdu in the Digital Age",
    date: "April 15, 2025",
    description: "Exploring the impact of technology on Urdu literature.",
  },
  {
    title: "Chapter 6: Global Urdu Voices",
    date: "June 20, 2025",
    description: "A showcase of Urdu writers from around the world.",
  },
  {
    title: "Chapter 6: Global Urdu Voices",
    date: "June 20, 2025",
    description: "A showcase of Urdu writers from around the world.",
  },
  {
    title: "Chapter 6: Global Urdu Voices",
    date: "June 20, 2025",
    description: "A showcase of Urdu writers from around the world.",
  },
];

const previousChapters = [
  {
    title: "Chapter 1: Origins of Urdu",
    date: "March 10, 2023",
    description: "A deep dive into the historical roots of Urdu.",
  },
  {
    title: "Chapter 4: Modern Urdu Poetry",
    date: "October 5, 2024",
    description: "Celebrating contemporary Urdu poets.",
  },
  {
    title: "Chapter 4: Modern Urdu Poetry",
    date: "October 5, 2024",
    description: "Celebrating contemporary Urdu poets.",
  },
  {
    title: "Chapter 4: Modern Urdu Poetry",
    date: "October 5, 2024",
    description: "Celebrating contemporary Urdu poets.",
  },
];

const ChapterItem = ({ title, date, description, isUpcoming }) => {
  return (
    <motion.div
      className={`relative w-full sm:w-80 p-4 bg-white rounded-lg shadow-md border-l-4 ${isUpcoming ? "border-red-700" : "border-red-700"
        }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
    >
      <h3 className="text-lg font-semibold text-[#1F2A44]">{title}</h3>
      <p className="text-sm text-[#6B7280]">{date}</p>
      <p className="text-xs text-[#6B7280] mt-2">{description}</p>
    </motion.div>
  );
};

const AucChapters = () => {
  return (
    <section className="py-12 bg-[#F9FAFB]">
      <div className="mx-4 px-4">
        {/* Upcoming Chapters */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 text-center mb-8">
          Upcoming Chapters
        </h2>
        <div className="relative">
          {/* Ribbon Background */}
          <motion.div
            className="absolute inset-0 h-1 rounded-full z-0"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center">
            {upcomingChapters.map((chapter, index) => (
              <ChapterItem
                key={index}
                title={chapter.title}
                date={chapter.date}
                description={chapter.description}
                isUpcoming={true}
              />
            ))}
          </div>
        </div>

        {/* Previous Chapters */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 text-center mt-12 mb-8">
          Previous Chapters
        </h2>
        <div className="relative">
          {/* Ribbon Background */}
          <motion.div
            className="absolute inset-0 h-1 rounded-full z-0"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center">
            {previousChapters.map((chapter, index) => (
              <ChapterItem
                key={index}
                title={chapter.title}
                date={chapter.date}
                description={chapter.description}
                isUpcoming={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AucChapters;