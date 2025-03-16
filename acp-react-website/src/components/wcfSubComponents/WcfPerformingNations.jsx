import React from "react";
import CardCarousel from "../wcfReusableComponents/WcfLandingPageCardCarousel"; // Adjust the import path as needed

// Card Data
const cards = [
  {
    id: 1,
    title: "Cultural Showcase",
    description: "Experience the rich heritage of global traditions in an unforgettable celebration.",
    image: "../src/assets/wcf-assets/Generation_25.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Artistic Performances",
    description: "Witness world-class performances from renowned artists across continents.",
    image: "../src/assets/venues/Audi1/3.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Global Harmony",
    description: "Join us in fostering peace and unity through cultural exchange.",
    image: "../src/assets/venues/Audi1/3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Global Harmony",
    description: "Join us in fostering peace and unity through cultural exchange.",
    image: "../src/assets/venues/Audi1/3.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Global Harmony",
    description: "Join us in fostering peace and unity through cultural exchange.",
    image: "../src/assets/venues/Audi1/3.jpg",
    link: "#",
  },
];

function WcfPerformances() {
  return (
    <CardCarousel
      cards={cards}
      title="Performing Nations"
      slidesPerView={1}
      spaceBetween={20}
      autoplayDelay={3000}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      imageAspectRatio="1/1" // For square images (1500x1500)
      maxImageHeight="600px" // Cap the height to avoid overly large images
    />
  );
}

export default WcfPerformances;