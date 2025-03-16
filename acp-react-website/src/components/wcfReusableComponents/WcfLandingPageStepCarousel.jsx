import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Reusable StepCarousel Component
const StepCarousel = ({
  steps = [], // Array of step data
  title = "Default Title", // Section title
  slidesPerView = 1, // Default slides per view
  spaceBetween = 20, // Space between slides
  autoplayDelay = 3000, // Autoplay delay in milliseconds
  breakpoints = {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }, // Responsive breakpoints
  pagination = false, // Enable/disable pagination
  sectionClassName = "", // Custom class for the section
  stepClassName = "", // Custom class for each step
  titleClassName = "", // Custom class for the title
  stepIndicatorClassName = "", // Custom class for the step indicator
  imageAspectRatio = "1/1", // Default aspect ratio for images (e.g., "4/3", "16/9", "1/1")
  maxImageHeight = "400px", // Maximum height for images
}) => {
  // Animation variants for the steps
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section
      className={`py-12 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden ${sectionClassName}`}
    >
      {/* Section Header */}
      <motion.h2
        className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 ${titleClassName}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Swiper Carousel Container */}
      <motion.div
        className="mx-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          loop={true}
          pagination={pagination ? { clickable: true } : false}
          breakpoints={breakpoints}
          className="w-full"
        >
          {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <motion.div
                className={`flex-1 flex flex-col items-center text-center swiper-slide-active:scale-110 swiper-slide-active:shadow-xl ${stepClassName}`}
                variants={stepVariants}
              >
                {/* Image */}
                <div
                  className="w-full max-w-md rounded-2xl overflow-hidden mb-6 shadow-md"
                  style={{
                    aspectRatio: imageAspectRatio, // Maintain aspect ratio
                    maxHeight: maxImageHeight, // Cap the maximum height
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Step Indicator */}
                <div className="flex items-center justify-center mb-4">
                  <span
                    className={`w-10 h-10 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-full flex items-center justify-center text-lg font-semibold ${stepIndicatorClassName}`}
                  >
                    {step.id}
                  </span>
                </div>

                {/* Step Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-white text-lg max-w-xs">{step.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default StepCarousel;