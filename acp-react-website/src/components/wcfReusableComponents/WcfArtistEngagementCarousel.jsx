import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const EngagementCarousel = ({
  slides = [], // Array of slide data
  title = "Section Title", // Section title
  sectionClassName = "", // Custom class for the section
  cardClassName = "", // Custom class for the card
  titleClassName = "", // Custom class for the title
  imageAspectRatio = "3/2", // Aspect ratio for images (updated for 2048x1366)
  maxImageHeight = "400px", // Maximum height for images (adjust as needed)
}) => {
  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } },
  };

  return (
    <section className={`py-8 md:py-12 ${sectionClassName}`}>
      <h2
        className={`text-xl md:text-2xl font-semibold mb-8 text-center text-gray-800 ${titleClassName}`}
      >
        {title}
      </h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${cardClassName}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: imageAspectRatio,
                  maxHeight: maxImageHeight,
                }}
              >
                <img
                  src={slide.image.src}
                  alt={slide.image.alt}
                  className="w-full h-full object-cover transition-all duration-500"
                  loading="lazy"
                />
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
              </div>

              {/* Caption and Button */}
              <motion.div
                className="absolute bottom-0 left-0 p-6 text-white z-20"
                variants={captionVariants}
              >
                <p className="text-sm md:text-base font-medium mb-4 leading-relaxed">
                  {slide.caption}
                </p>
                <a
                  href={slide.link}
                  className="inline-block px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Learn More
                </a>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-red-800 to-red-500 rounded-full z-20 pointer-events-none"></div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EngagementCarousel;