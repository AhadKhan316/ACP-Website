import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Reusable CardDisplay Component
const CardCarousel = ({
  cards = [], // Array of card data
  title = "Default Title", // Section title
  useCarousel = true, // Toggle between carousel and grid layout
  slidesPerView = 1, // Default slides per view (carousel only)
  spaceBetween = 20, // Space between slides (carousel only)
  autoplayDelay = 3000, // Autoplay delay in milliseconds (carousel only)
  breakpoints = {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }, // Responsive breakpoints (carousel only)
  sectionClassName = "", // Custom class for the section
  cardClassName = "", // Custom class for the card
  titleClassName = "", // Custom class for the title
  imageAspectRatio = "1/1", // Default aspect ratio for images (e.g., "4/3", "16/9", "1/1")
  maxImageHeight = "500px", // Maximum height for images
  gridGap = "1.5rem", // Gap between cards in grid layout (default: 1.5rem)
}) => {
  // Card rendering logic (shared between carousel and grid)
  const renderCard = (card) => (
    <div
      key={card.id}
      className={`relative rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg ${useCarousel ? "swiper-slide-active:scale-110 swiper-slide-active:shadow-xl" : ""} ${cardClassName}`}
    >
      {/* Card Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: imageAspectRatio,
          maxHeight: maxImageHeight,
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0"></div>
        {/* Card Content Overlay */}
        <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/100 to-transparent">
          <h3 className="text-3xl font-bold mb-2 tracking-wide">{card.title}</h3>
          <p className="text-lg mb-4 leading-relaxed">{card.description}</p>
          {card.link && (
            <a
              href={card.link}
              className="inline-block px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Learn More
            </a>
          )}
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-red-800 to-red-500 rounded-full"></div>
    </div>
  );

  return (
    <section
      className={`py-12 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden ${sectionClassName}`}
    >
      <div className="mx-4">
        {/* Section Header */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight ${titleClassName}`}
        >
          {title}
        </h2>

        {/* Render Carousel or Grid based on useCarousel prop */}
        {useCarousel ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            centeredSlides={true}
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            loop={true}
            breakpoints={breakpoints}
            className="w-full"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>{renderCard(card)}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            style={{ gap: gridGap }} // Apply custom gap to grid
          >
            {cards.map((card) => renderCard(card))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardCarousel;