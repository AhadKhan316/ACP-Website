import React from "react";
import StepCarousel from "../wcfReusableComponents/WcfLandingPageStepCarousel";

import show1 from "/src/assets/wcf-assets/Road_show.jpg"
import show2 from "/src/assets/venues/Audi1/2.jpg"

// Step Data
const steps = [
  {
    id: 1,
    title: "Discover Shows",
    description: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
    image: show1,
  },
  {
    id: 2,
    title: "Choose Your Event",
    description: "Amet venenatis urna cursus eget nunc scelerisque viverra mauris inali quam sem",
    image: show2,
  },
  {
    id: 3,
    title: "Book Tickets",
    description: "Mauris inali quam sem amet venenatis urna cursus eget nunc scelerisque viverra",
    image: show2,
  },
  {
    id: 4,
    title: "Book Tickets",
    description: "Mauris inali quam sem amet venenatis urna cursus eget nunc scelerisque viverra",
    image: show2,
  },
  {
    id: 5,
    title: "Book Tickets",
    description: "Mauris inali quam sem amet venenatis urna cursus eget nunc scelerisque viverra",
    image: show2,
  },
];

function WcfUpcomingShows() {
  return (
    <StepCarousel
      steps={steps}
      title="Upcoming Events"
      slidesPerView={1}
      spaceBetween={20}
      autoplayDelay={3000}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      pagination={false} // Enable pagination if needed
      imageAspectRatio="1/1" // For square images (1500x1500)
      maxImageHeight="450px" // Cap the height to avoid overly large images
    />
  );
}

export default WcfUpcomingShows;