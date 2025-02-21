import React, { useState } from "react";
import { motion } from "framer-motion";
import Cards from "../components/Cards"; // Reusable component for cards

// Importing images
import presidentImg from "../assets/governing-body-new/ahmed-shah.png";
import img1 from "../assets/governing-body-new/munawar-saeed.png";
import img2 from "../assets/governing-body-new/ejaz-farooqi.png";
import img3 from "../assets/governing-body-new/noorul-huda-shah.png";
import img4 from "../assets/governing-body-new/qudsia-Akbar.png";
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
import img18 from "../assets/governing-body-new/Amjad-siraj-memon.png";

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
      { id: 4, name: "Qudsia Akbar", description: "Treasurer", image: img4, buttonText: "Learn More" },
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
    <div className="bg-[#111827] text-white py-10 sm:px-6 lg:px-8">
      <div className="mx-4">
        {/* President's Message */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E293B] p-6 sm:p-8 rounded-xl shadow-lg mb-12 flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-[#F5F1E1]">
              <img
                src={presidentImg}
                alt="President"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#F5F1E1]">President’s Message</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage. Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe.
            </p>
          </div>
        </motion.section>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 border-b border-gray-700">
            {["Office Bearers", "Governing Body", "Co-opted Members"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2 text-lg font-medium rounded-t-lg ${activeTab === tab
                  ? "bg-[#1E293B] text-green-400 border-b-2 border-green-500 shadow-md"
                  : "text-gray-400 hover:text-green-400 hover:bg-gray-700"
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