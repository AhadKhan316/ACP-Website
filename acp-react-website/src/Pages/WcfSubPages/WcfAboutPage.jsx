// src/components/AboutPage.jsx
import React, { useState } from "react";
function WcfAboutPage() {

  const [activeTab, setActiveTab] = useState("arts-council");

  const tabs = [
    { id: "arts-council", label: "About Arts Council" },
    { id: "world-culture", label: "About World Culture Festival" },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <section className="relative py-8 sm:py-12 md:py-20">
        <div className="mx-4 px-4 sm:px-6 lg:px-12 bg-gray-800 rounded-lg shadow-lg py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            {/* Left Side: Content */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                WHERE CULTURE <span className="text-red-600 underline">COMES ALIVE!</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                35+ Countries - 250+ Artists - 100+ Performances
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                THEATRE - MUSIC - DANCE - FINEARTS
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                26<sup>TH</sup> SEP TO 30<sup>TH</sup> OCT AT ARTS COUNCIL KARACHI
              </p>
              <a
                href="https://www.youtube.com/watch?v=y2B89Bf5SHA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-colors text-sm sm:text-base md:text-lg"
              >
                Watch on <span className="font-bold">YouTube</span>
              </a>
            </div>

            {/* Right Side: Video */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div
                className="relative rounded-xl overflow-hidden shadow-lg"
                style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/y2B89Bf5SHA?si=PKFZkNlKqjJa5go_"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Fallback for video error */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 items-center justify-center text-center text-gray-400 text-sm sm:text-base hidden iframe-error">
                  An error occurred. Please watch this video on{" "}
                  <a
                    href="https://www.youtube.com/watch?v=y2B89Bf5SHA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 underline"
                  >
                    YouTube
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-900 text-white overflow-hidden">
        {/* Tab Navigation */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`py-2 px-4 text-lg font-semibold transition-colors duration-300 ${activeTab === tab.id
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-white hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mx-4 px-4 py-12">
          {activeTab === "arts-council" && (
            <section className="py-20 bg-gray-900">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                  Arts Council of Pakistan, Karachi
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-center text-gray-400 mb-6">
                    Since our inception in 1954, the Arts Council of Pakistan has been dedicated to various forms of art. ACP is currently the finest non-profit organization in the country for the promotion of Fine and Performing Arts. We host more than 500 events annually and train local talent in our Fine and Performing Arts academies.
                  </p>
                  <p className="text-lg text-center text-gray-400">
                    The Council facilitates art and artists from all segments of the society. The team, led by our President Ahmed Shah (SI), aims to promote peace and artistic professionalism. We work with the collective goal of shining a bright spotlight on Pakistan through our art, and culture. This is done through various literary conferences, artistic endeavors, cultural events, and competitive talent showcases.
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeTab === "world-culture" && (
            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                  World Culture Festival Karachi
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-center text-gray-400">
                    Experience a world without borders at the World Culture Festival - Karachi, the grandest global artistic gathering ever hosted in Pakistan. The event, a significant step in the Council's efforts of cultural diplomacy, is set to bring together over 250 artists from over 35 countries, across all continents to showcase the best talent in music, theatre, dance, and fine arts in a manner never seen before.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

    </div>
  );
}

export default WcfAboutPage;