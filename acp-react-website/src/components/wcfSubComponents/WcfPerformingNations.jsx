import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Card Data
const cards = [
  {
    id: 1,
    title: "Cultural Showcase",
    description: "Experience the rich heritage of global traditions in an unforgettable celebration.",
    image: "/path/to/cultural-showcase.jpg", // Replace with actual image path
    link: "#",
  },
  {
    id: 2,
    title: "Artistic Performances",
    description: "Witness world-class performances from renowned artists across continents.",
    image: "/path/to/artistic-performances.jpg", // Replace with actual image path
    link: "#",
  },
  {
    id: 3,
    title: "Global Harmony",
    description: "Join us in fostering peace and unity through cultural exchange.",
    image: "/path/to/global-harmony.jpg", // Replace with actual image path
    link: "#",
  },
  {
    id: 4,
    title: "Traditional Crafts",
    description: "Discover the art of traditional craftsmanship from around the world.",
    image: "/path/to/traditional-crafts.jpg", // Replace with actual image path
    link: "#",
  },
  {
    id: 5,
    title: "Music & Dance",
    description: "Enjoy vibrant music and dance performances celebrating diversity.",
    image: "/path/to/music-dance.jpg", // Replace with actual image path
    link: "#",
  },
];

function WcfPerformances() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <div className="mx-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
          Performing Nations
        </h2>

        {/* Swiper Container */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg swiper-slide-active:scale-110 swiper-slide-active:shadow-xl">
                {/* Card Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    className="inline-block px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-red-800 to-red-500 rounded-full"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default WcfPerformances;