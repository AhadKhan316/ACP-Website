import React, { useState } from "react";
import { motion } from "framer-motion";
import Cards from "../components/Cards";

// Importing images
import presidentImg from "../assets/governing-body-new/ahmed-shah.png";
import img1 from "../assets/governing-body-new/munawar-saeed.png";
import img2 from "../assets/governing-body-new/ejaz-farooqi.png";
import img3 from "../assets/governing-body-new/noorul-huda-shah.png";
import img5 from "../assets/governing-body-new/huma-mir.png";
import img6 from "../assets/governing-body-new/s-m-qaiser-sajjad.png";
import img7 from "../assets/governing-body-new/syed-asjad-hussain-bukhari.png";
import img8 from "../assets/governing-body-new/farrukh-tanveer-shahab.png";
import img9 from "../assets/governing-body-new/syed-shahzad-raza-naqvi.png";
import img10 from "../assets/governing-body-new/ambreen-haseeb-amber.png";
import img11 from "../assets/governing-body-new/akhlaq-ahmed-khan.png";
import img12 from "../assets/governing-body-new/ghazi-salah-uddin.png";
import img13 from "../assets/governing-body-new/muhammad-ayoub-shaikh.png";
import img14 from "../assets/governing-body-new/Abdullah-Sultan.webp";
import img15 from "../assets/governing-body-new/amjad-hussain-shah.png";
import img16 from "../assets/governing-body-new/syed-sajid-hassan.png";
import img17 from "../assets/governing-body-new/muhammad-iqbal-lateef.png";
import img18 from "../assets/governing-body-new/amjad-siraj-memon.png";

const GoverningBody = () => {
  const [activeTab, setActiveTab] = useState("Office Bearers");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const members = {
    "Office Bearers": [
      { id: 1, name: "Munawar Saeed", description: "Vice President", image: img1, buttonText: "Learn More" },
      { id: 2, name: "Ejaz Farooqi", description: "Secretary", image: img2, buttonText: "Learn More" },
      { id: 3, name: "Noor Ul Huda Shah", description: "Joint Secretary", image: img3, buttonText: "Learn More" },
    ],
    "Governing Body": [
      { id: 1, name: "Huma Mir", description: "Member", image: img5, buttonText: "Learn More" },
      { id: 2, name: "S.M Qaiser Sajjad", description: "Member", image: img6, buttonText: "Learn More" },
      { id: 3, name: "Syed Asjad Hussain Bukhari", description: "Member", image: img7, buttonText: "Learn More" },
      { id: 4, name: "Farrukh Tanveer Shahab", description: "Member", image: img8, buttonText: "Learn More" },
      { id: 5, name: "Syed Shahzad Raza Naqvi", description: "Member", image: img9, buttonText: "Learn More" },
      { id: 6, name: "Ambreen Haseeb Amber", description: "Member", image: img10, buttonText: "Learn More" },
      { id: 7, name: "Akhlaq Ahmed Khan", description: "Member", image: img11, buttonText: "Learn More" },
      { id: 8, name: "Ghazi Salah Uddin", description: "Member", image: img12, buttonText: "Learn More" },
      { id: 9, name: "Muhammad Ayoub Shaikh", description: "Member", image: img13, buttonText: "Learn More" },
      { id: 10, name: "Abdullah Sultan", description: "Member", image: img14, buttonText: "Learn More" },
      { id: 11, name: "Amjad Hussain Shah", description: "Member", image: img15, buttonText: "Learn More" },
      { id: 12, name: "Syed Sajid Hassan", description: "Member", image: img16, buttonText: "Learn More" },
    ],
    "Co-opted Members": [
      { id: 1, name: "Muhammad Iqbal Lateef", description: "Member", image: img17, buttonText: "Learn More" },
      { id: 2, name: "Amjad Siraj Memon", description: "Member", image: img18, buttonText: "Learn More" },
    ],
  };

  return (
    <div className="bg-white text-black py-6 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-4">
        {/* President's Message */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="p-6 sm:p-8 lg:p-8 mb-6 sm:mb-8 lg:mb-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-16"
        >
          {/* Image with Card Styling */}
          <motion.div
            className="relative rounded-xl overflow-hidden w-full md:w-1/2 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative w-full aspect-[4/5] max-h-72 sm:max-h-96 lg:max-h-[28rem] min-h-0 overflow-hidden">
              <img
                src={presidentImg}
                alt="President"
                className="w-full h-full object-contain transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Content - Keep It Intact */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
              President’s Message
            </h2>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage. Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe.
            </p>
          </div>
        </motion.section>

        {/* Tabs */}
        <div className="mb-8 sm:mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {["Office Bearers", "Governing Body", "Co-opted Members"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 ${activeTab === tab
                  ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                  : "bg-[#B90602] text-white curdor-pointer hover:bg-black/80 to-black/90 hover:shadow-lg cursor-pointer"
                  }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Members Section (Using Reusable Cards) */}
        <Cards title={activeTab} items={members[activeTab]} />
      </div>
    </div>
  );
};

export default GoverningBody;