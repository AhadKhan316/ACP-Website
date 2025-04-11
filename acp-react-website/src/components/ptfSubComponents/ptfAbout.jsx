import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PtfAbout = () => {
  // Framer Motion Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 10px rgba(239, 68, 68, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-white text-black py-12 sm:py-16 lg:py-20">
      <motion.div
        className="mx-4 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={contentVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {/* About{" "} */}
              <span className="text-red-700">Pakistan Theatre Festival</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
              Pakistan Theatre Festival 2023, presented by Arts Council of Pakistan, Karachi is a landmark event that transcends borders and languages. A dynamic lineup of 7 international and 27 prominent national theatre groups. For an incredible span of 30 days, immerse yourself in the magic of 45 captivating shows, interactive workshops and talks. Explore global cultural diversity and a variety of genres under one roof. The festival will feature plays in various languages, including Urdu, English, Turkish, German, Sinhala, Persian, Punjabi & Sindhi.
            </p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              className="inline-block"
            >
              <Link
                to="/festival/ptf/tickets"
                className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-red-500 transition duration-300 text-sm sm:text-base"
              >
                Ticket Closed
              </Link>
            </motion.div>
          </motion.div>

          {/* Promo Video */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full pb-[56.25%] bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/KaZUFhZdSgg?si=4GkuXnoMWjb_EoTo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PtfAbout;