import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import Autoplay styles
import Cards from "../components/Cards";

import departmentImg1 from "../assets/academies/communication-design.png";
import departmentImg2 from "../assets/academies/textile-design.png";
import departmentImg3 from "../assets/academies/textile-design.png";
import sliderImg1 from "../assets/academies/acp-drone-2023.png";
import sliderImg2 from "../assets/academies/music.png";
// import academicImg from "../assets/academies/dance.webp";

const AcademiesPage = () => {

  const academyData = [
    { id: 1, name: "Graphic Design", description: "See More", image: departmentImg1, buttonText: "Learn More" },
    { id: 2, name: "Dance", description: "See More", image: departmentImg2, buttonText: "Learn More" },
    { id: 3, name: "Fine Arts", description: "See More", image: departmentImg3, buttonText: "Learn More" },
    { id: 4, name: "Textile Design", description: "See More", image: departmentImg1, buttonText: "Learn More" },
    { id: 5, name: "Theatre", description: "See More", image: departmentImg2, buttonText: "Learn More" },
    { id: 6, name: "Music", description: "See More", image: departmentImg3, buttonText: "Learn More" },
  ];

  return (
    <div className="py-10 min-h-screen bg-[#111827] text-white">
      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        {/* Slider Section */}
        <div className="mb-12 flex flex-col lg:flex-row items-center bg-gray-800 p-7 rounded-lg">
          {/* Text Box (60% on large screens) */}
          <div className="lg:w-3/5 lg:pr-6 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-center">XYZ Heading Here</h2>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt architecto voluptate reprehenderit similique magnam laborum modi ratione nihil fugit quam! Vel dolor explicabo iste? Inventore voluptate ipsa adipisci expedita quaerat, aliquid dolore sapiente optio assumenda? Tenetur ducimus aliquam fugit optio consectetur pariatur sint architecto maiores blanditiis modi, nemo quis doloribus soluta voluptate nostrum rerum laudantium. Voluptatum repellendus quis tenetur aliquid veritatis sed voluptate aspernatur debitis asperiores iste. Nobis accusamus possimus aut harum, animi, saepe quae sunt dolorum, aliquam illo debitis!
            </p>
          </div>

          {/* Slider (40% on large screens) */}
          <div className="lg:w-2/4 w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <SwiperSlide>
                <img src={sliderImg1} alt="Slider 1" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderImg2} alt="Slider 2" className="w-full h-auto object-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Departments Section */}
        <Cards title="Departments" items={academyData} />

      </div>
    </div>
  );
};

export default AcademiesPage;