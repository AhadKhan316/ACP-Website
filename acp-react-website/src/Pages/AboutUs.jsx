import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("history");

  const renderSection = () => {
    switch (activeSection) {
      case "history":
        return (
          <div className="flex flex-col lg:flex-row items-center mb-16 gap-8 bg-gray-800 p-6 rounded-lg mt-20"> 
            <div className="mb-6 lg:mb-0 lg:w-1/2"> 
              <div className="">
                <h2 className="text-3xl font-semibold text-white mb-4 text-center">Our History</h2> 
                <p className="text-white text-lg leading-relaxed max-w-3xl text-center">
                  Founded in 1980, the Arts Council of Pakistan has been a beacon for cultural
                  preservation, talent development, and a place of collaboration for artists from
                  all corners of Pakistan. We take pride in fostering artistic growth and supporting
                  a creative ecosystem that spans from traditional to contemporary forms.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2"> 
              <Swiper
                className="mb-8 rounded-lg"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide><img src="https://acpkhi.com/studio%20I/1.jpg" alt="Historical  1" className="rounded-lg w-full h-auto object-cover" /></SwiperSlide> 
                <SwiperSlide><img src="https://acpkhi.com/studio%20I/2.jpg" alt="Historical  2" className="rounded-lg w-full h-auto object-cover" /></SwiperSlide> 
                <SwiperSlide><img src="https://acpkhi.com/imgs/ACP%20Drone%202023.webp" alt="Historical  3" className="rounded-lg w-full h-auto object-cover" /></SwiperSlide>
              </Swiper>
            </div>
          </div>
        );
      case "vision":
        return (
          <div className="mb-16 bg-gray-800 p-6 rounded-lg mt-20">
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">Our Vision</h2>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto text-center">
              Our vision is to create a world where art unites people, transcending borders
              and creating a global dialogue through artistic expression. We aim to support artists
              and bring attention to the diverse, rich culture of Pakistan while influencing global
              trends through innovation and cultural engagement.
            </p>
          </div>
        );
      case "mission":
        return (
          <div className="mb-16 bg-gray-800 p-6 rounded-lg mt-20">
            <h2 className="text-3xl font-semibold text-white-400 mb-4 text-center">Our Mission</h2>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto text-center">
              Our mission is to serve as the premier institution supporting the development
              of artistic talents, fostering a rich cultural dialogue, and promoting the cultural
              heritage of Pakistan. We aim to provide a platform for artists, both emerging and
              established, to share their work with a broader audience, enrich society, and promote
              art as a universal language.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-10 min-h-screen bg-[#111827] text-white">
      <div className="mx-4 px-4 sm:px-6 lg:px-8"> 
        <h1 className="text-4xl font-bold text-white mb-12 text-center">About Us</h1> 

        <div className="mb-8 flex justify-center gap-4 sm:gap-6"> 
          <button
            onClick={() => setActiveSection("history")}
            className={`py-2 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base ${activeSection === "history" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"}`} 
          >
            Our History
          </button>
          <button
            onClick={() => setActiveSection("vision")}
            className={`py-2 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base ${activeSection === "vision" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"}`}  
          >
            Our Vision
          </button>
          <button
            onClick={() => setActiveSection("mission")}
            className={`py-2 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base ${activeSection === "mission" ? "bg-gray-800 text-white " : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"}`}  
          >
            Our Mission
          </button>
        </div>

        {renderSection()}

        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Join Us in Our Mission</h2> 
          <p className="text-base sm:text-lg mb-6 text-center">Be part of a growing movement to nurture creativity, support artists, and celebrate art in all its forms.</p> 
          <div className="text-center"> 
            <a
              href="#cta"
              className="inline-block bg-white text-[#000000] font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-200 transition duration-300" 
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;