import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const upcomingChapters = [
  {
    time: "10:00 AM",
    event: "Literary Symposium",
    day: "20th June 2025",
    description: "A discussion on modern Pakistani literature.",
  },
  {
    time: "2:00 PM",
    event: "Poetry Workshop",
    day: "22nd June 2025",
    description: "Interactive session with renowned poets.",
  },
  {
    time: "11:00 AM",
    event: "Cultural Exchange",
    day: "25th June 2025",
    description: "Celebrating diversity in Pakistani culture.",
  },
  {
    time: "1:00 PM",
    event: "Book Launch",
    day: "28th June 2025",
    description: "Launching new works by local authors.",
  },
];

const previousChapter = [
  { time: "9:00 AM", event: "Opening Ceremony", day: "25th Feb" },
  { time: "11:00 AM", event: "Poetry Recitation", day: "25th Feb" },
  { time: "2:00 PM", event: "Panel Discussion", day: "25th Feb" },
  { time: "10:00 AM", event: "Literary Talks", day: "26th Feb" },
  { time: "1:00 PM", event: "Cultural Performance", day: "26th Feb" },
];

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-green-700 hover:text-green-800 transition duration-300 sm:w-12 sm:h-12 w-8 h-8 custom-arrow`}
      style={{ ...style, display: "block", right: "15px" }}
      onClick={onClick}
    >
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
      </svg>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-green-700 hover:text-green-800 transition duration-300 sm:w-12 sm:h-12 w-8 h-8 custom-arrow`}
      style={{ ...style, display: "block", left: "15px", zIndex: 1 }}
      onClick={onClick}
    >
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
      </svg>
    </div>
  );
};

const PlfSession = () => {
  // Placeholder image for sessions (replace with actual images if available)
  const placeholderImage = "../src/assets/auc-assets/auc-chapter-sukkur.jpg";

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="mx-8 px-4 sm:px-6 lg:px-8">
        {/* Upcoming Chapters (Plural) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mt-12 mb-8">
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative z-10 max-w-[1280px] mx-auto"
          >
            <Slider {...settings}>
              {upcomingChapters.map((session, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    className="relative w-full max-w-[450px] sm:max-w-[400px] md:max-w-[380px] lg:max-w-[370px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
                  >
                    {/* Image Section (50%) */}
                    <div className="w-full sm:w-1/2 h-48 sm:h-auto">
                      <img
                        src={placeholderImage}
                        alt={session.event}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section (50%) */}
                    <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-[#1F2A44] mb-1">
                        {session.event}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {session.time} | {session.day}
                      </p>
                      <p className="text-sm text-gray-600">
                        {session.description || "A key event from the upcoming chapters of PLF."}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>

        {/* Previous Chapter */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mt-12 mb-8">
          Previous Chapter
        </h2>
        <div className="relative">
          {/* Ribbon Background */}
          <motion.div
            className="absolute inset-0 h-1 rounded-full z-0"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative z-10 max-w-[1280px] mx-auto"
          >
            <Slider {...settings}>
              {previousChapter.map((session, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    className="relative w-full max-w-[450px] sm:max-w-[400px] md:max-w-[380px] lg:max-w-[370px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
                  >
                    {/* Image Section (50%) */}
                    <div className="w-full sm:w-1/2 h-48 sm:h-auto">
                      <img
                        src={placeholderImage}
                        alt={session.event}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section (50%) */}
                    <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-[#1F2A44] mb-1">
                        {session.event}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {session.time} | {session.day}
                      </p>
                      <p className="text-sm text-gray-600">
                        {session.description || "A key event from the previous chapter of PLF."}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlfSession;