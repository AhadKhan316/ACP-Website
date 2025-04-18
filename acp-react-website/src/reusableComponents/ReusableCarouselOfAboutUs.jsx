// src/components/SectionWithSwiper.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SectionWithSwiper = ({
  title,
  description,
  images,
  slidesPerView = 1,
  spaceBetween = 30,
  navigation = true,
  // pagination = true,
  autoplay = true,
  autoplayDelay = 2500,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8 mb-16 mt-20 ${className}`}
    >
      {/* Centered Title and Description */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          {title}
        </h2>
        <p className="text-black text-base sm:text-lg md:text-xl lg:max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Swiper Section */}
      <div className="w-full lg:w-1/2">
        <Swiper
          className="rounded-xl overflow-hidden"
          modules={[Navigation, Autoplay, FreeMode]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          navigation={navigation}
          // pagination={pagination ? { clickable: true } : false}
          autoplay={
            autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false
          }
          lazy={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SectionWithSwiper;