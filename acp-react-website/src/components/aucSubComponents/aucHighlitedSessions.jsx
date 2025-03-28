import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Sample session data with images (replace with your actual data)
const sessions = [
  {
    title: "Urdu in the Digital Age",
    date: "April 15, 2025",
    description: "Exploring the impact of technology on Urdu literature.",
    isHighlighted: true,
    image: "../src/assets/auc-assets/auc-session.jpeg", // Replace with actual image URL
  },
  {
    title: "Global Urdu Voices",
    date: "June 20, 2025",
    description: "A showcase of Urdu writers from around the world.",
    isHighlighted: true,
    image: "https://placehold.co/201x251", // Replace with actual image URL
  },
  {
    title: "Origins of Urdu",
    date: "March 10, 2023",
    description: "A deep dive into the historical roots of Urdu.",
    isHighlighted: false,
    image: "https://placehold.co/201x251", // Replace with actual image URL
  },
  {
    title: "Modern Urdu Poetry",
    date: "October 5, 2024",
    description: "Celebrating contemporary Urdu poets.",
    isHighlighted: false,
    image: "https://placehold.co/201x251", // Replace with actual image URL
  },
];

const SessionCard = ({ title, date, description, isHighlighted, image }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position into tilt angles
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = (event.clientX - rect.left - centerX) / centerX;
    const mouseY = (event.clientY - rect.top - centerY) / centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fallbackImage = "https://placehold.co/201x251";

  return (
    <motion.div
      ref={ref}
      className={`relative w-full max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden ${isHighlighted
        ? "bg-gradient-to-br from-red-50 to-white border-2 border-red-700"
        : "border-2 border-gray-200"
        } transition-all duration-300 flex flex-col`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: isHighlighted
          ? "0 0 20px rgba(185, 28, 28, 0.5)"
          : "0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[201/251] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <img
          src={image || fallbackImage}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = fallbackImage)}
        />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-[#1F2A44] mb-2 truncate">{title}</h3>
        <p className="text-xs sm:text-sm text-[#6B7280] mb-2">{date}</p>
        <p className="text-xs sm:text-sm text-[#6B7280] line-clamp-3 flex-1">{description}</p>
      </div>

      {/* Highlight Indicator */}
      {isHighlighted && (
        <div className="absolute top-2 right-2 w-4 h-4 bg-red-700 rounded-full animate-pulse" />
      )}
    </motion.div>
  );
};

const AucHighlightedSessions = () => {
  return (
    <section className="py-12 bg-[#F9FAFB]">
      <div className="mx-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 text-center mb-12"
        >
          Highlighted Sessions
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {sessions.map((session, index) => (
            <SessionCard
              key={index}
              title={session.title}
              date={session.date}
              description={session.description}
              isHighlighted={session.isHighlighted}
              image={session.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AucHighlightedSessions;