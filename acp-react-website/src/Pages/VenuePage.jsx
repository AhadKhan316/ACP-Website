import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Lazy-load the Cards component
const Cards = lazy(() => import("../components/Cards"));

// Import images for the slider (use smaller thumbnails if possible)
import venueImg1 from "../assets/venues/audi1.png";
import venueImg2 from "../assets/venues/audi2.png";
import venueImg3 from "../assets/venues/studio1.png";
import venueImg4 from "../assets/venues/studio2.png";
import venueImg5 from "../assets/venues/haseena-moin.png";
import venueImg6 from "../assets/venues/jaun-elia.png";
import venueImg7 from "../assets/venues/ampitheatre.png";
import venueImg8 from "../assets/venues/cafe.png";
import venueImg9 from "../assets/venues/art-gallery.png";
import venueImg10 from "../assets/venues/library.png";
import venueImg11 from "../assets/venues/rooftop.png";
import venueImg12 from "../assets/venues/lobby.png";
import venueImg13 from "../assets/venues/gulrang.png";
import venueImg14 from "../assets/venues/audio-studio.png";
import venueImg15 from "../assets/venues/parking.png";

const VenuesPage = () => {
  const venueData = [
    {
      id: 1,
      name: "Auditorium 1",
      image: venueImg1,
      description: "The Arts Council of Pakistan Karachi offers a luxurious, air-conditioned auditorium with 436 seats and a 1,215 sq. ft. stage, featuring modern theatrical lighting, live-streaming audio/video systems, and impeccable acoustics.",
    },
    {
      id: 2,
      name: "Auditorium 2",
      image: venueImg2,
      description: "The Arts Council of Pakistan Karachi’s Auditorium 2 features a luxurious, air-conditioned space with 272 seats and a 779 sq. ft. stage, offering state-of-the-art amenities for maximum comfort and convenience.",
    },
    {
      id: 3,
      name: "Studio 1",
      image: venueImg3,
      description: "Studio 1, located on the 4th floor of the Ahmed Shah Building, is a 4,725 sq. ft. versatile space designed for flexible setups, accommodating sets, props, and crew in a controlled environment.",
    },


    {
      id: 4,
      name: "Studio 2",
      image: venueImg4,
      description: "Studio 2, located on the 3rd floor of the Ahmed Shah Building, is a 5,032 sq. ft. versatile film and video production studio featuring a 56ft wide stage area, offering ample space for sets, props, and crew.",
    },

    {
      id: 5,
      name: "Haseena Moin Hall",
      image: venueImg5,
      description: "Haseena Moin Hall is located on the 1st floor of Ahmed Shah Building and has a size of 2193 sq. ft. hall which is specially designed for smaller gatherings, seminars, workshops, book launches, and conferences.",
    },

    {
      id: 6,
      name: "Jaun Elia Lawn",
      image: venueImg6,
      description: "Jaun Elia Lawn, Arts Council of Pakistan Karachi offers a space of 12462 sq. ft. that is an ideal spot for huge gatherings and a space that can be customized accordingly for the grand festivals/music concerts/corporate programs.",
    },

    {
      id: 7,
      name: "Z.A Bukhari Amphitheatre",
      image: venueImg7,
      description: "Our spectacular amphitheatre can accommodate up to 1300 guests specifically designed to please the audience and to provide conveniences to the artists. Our Amphitheatre is designed by a renowned architect Aqeel Bilgrami.",
    },

    {
      id: 8,
      name: "Café D' Art",
      image: venueImg8,
      description: "Café D' Art, located at ACPKHI, is a vibrant coffee house perfect for dining and relaxation. It hosts social gatherings, open mic events, music performances, stand-up comedy, and a variety of delicious cuisines.",
    },

    {
      id: 9,
      name: "Ahmed Pervez Art Gallery",
      image: venueImg9,
      description: "Located on the 2nd floor of Ahmed Shah Building Ahmed Pervez art gallery was established in 1989 and was named after the famous Pakistani artist Ahmed Pervez.",
    },

    {
      id: 10,
      name: "Josh Malihabadi Library",
      image: venueImg10,
      description: "The Josh Malihabadi Library, on the 2nd floor of the Ahmed Shah Building, honors the legendary Pakistani playwright and screenwriter. With over 25,000 books across various genres, it also serves as a venue for recording live events.",
    },

    {
      id: 11,
      name: "360° Rooftop Lounge",
      image: venueImg11,
      description: "Arts Council of Pakistan offers a flexible open-air 5227 sq. ft. of rooftop space with a 360-degree view of the city of lights. The rooftop is a delicate mix of nature and elegance.",
    },

    {
      id: 12,
      name: "Lobby Area",
      image: venueImg12,
      description: "The 4,136 sq. ft. lobby of the Arts Council of Pakistan Karachi serves as a versatile space for exhibitions, trade shows, networking, meetings, seminars, workshops, literary events, and ghazal performances.",
    },

    {
      id: 13,
      name: "Gulrang Café",
      image: venueImg13,
      description: "The Arts Council of Pakistan Karachi offers fully operational and hygienic cafeteria services that are designed for use by staff, students, and visitors and are generally the most visited area.",
    },

    {
      id: 14,
      name: "Audio Studio",
      image: venueImg14,
      description: "Located on the second floor of the academy building in ACPKHI. A well-structured audio studio with variable acoustics that allows the recording of artists, singers, dubbing artists, announcements for advertising, etc.",
    },

    {
      id: 15,
      name: "Parking Area",
      image: venueImg15,
      description: "ACPKHI provides spacious and secure parking areas and facilities that can be utilized as an ideal venue for various activities, such as festivals, book stalls, food stalls, and more.",
    },
  ];

  return (
    <div className="bg-[#111827] text-white py-12 sm:px-6 lg:px-8">
      <div className="mx-4">
        {/* Slider Section */}
        <div className="mb-12 flex flex-col lg:flex-row items-center bg-gray-800 p-6 rounded-lg">
          <div className="lg:w-3/5 lg:pr-6 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">XYZ Venues</h2>
            <p className="text-gray-300 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam, ducimus illo laudantium consequatur eveniet deserunt minus facilis amet ea est itaque eligendi maxime doloribus ullam nihil error iure officia commodi unde.
            </p>
          </div>

          <div className="lg:w-2/4 w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Navigation, Autoplay, FreeMode]}
              className="rounded-lg shadow-lg overflow-hidden"
              lazy={true} // Enable Swiper's built-in lazy loading
            >
              {venueData.map((venue) => (
                <SwiperSlide key={venue.id}>
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-auto object-cover swiper-lazy"
                    loading="lazy" // Native lazy loading as fallback
                  />
                  <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Venues Grid with Suspense for Lazy Loading */}
        <Suspense fallback={<div className="text-center text-gray-300">Loading Venues...</div>}>
          <Cards title="Venues" items={venueData} />
        </Suspense>
      </div>
    </div>
  );
};

export default VenuesPage;