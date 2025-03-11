// src/pages/AcademiesPage.jsx
import React from "react";
import SectionWithSwiper from "../reusableComponents/ReusableCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
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

  const swiperImages = [
    { src: sliderImg1, alt: "Slider 1" },
    { src: sliderImg2, alt: "Slider 2" },
  ];

  return (
    <div className="py-10 min-h-screen bg-[#111827] text-white">
      <div className="mx-4 px-4 sm:px-6 lg:px-8">

        <SectionWithSwiper
          title="XYZ Heading Here"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt architecto voluptate reprehenderit similique magnam laborum modi ratione nihil fugit quam! Vel dolor explicabo iste? Inventore voluptate ipsa adipisci expedita quaerat, aliquid dolore sapiente optio assumenda? Tenetur ducimus aliquam fugit optio consectetur pariatur sint architecto maiores blanditiis modi, nemo quis doloribus soluta voluptate nostrum rerum laudantium. Voluptatum repellendus quis tenetur aliquid veritatis sed voluptate aspernatur debitis asperiores iste. Nobis accusamus possimus aut harum, animi, saepe quae sunt dolorum, aliquam illo debitis!"
          images={swiperImages}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={false}
          autoplay={true}
          autoplayDelay={2500}
        />

        {/* Departments Section */}
        <Cards title="Departments" items={academyData} />
      </div>
    </div>
  );
};

export default AcademiesPage;