import { useState, useEffect, useRef } from "react";

// Sample images for PTF
import sponsorImg1 from "/src/assets/wcf-assets/sponsor1.png";
import sponsorImg2 from "/src/assets/wcf-assets/sponsor2.png";
import sponsorImg3 from "/src/assets/wcf-assets/sponsor3.png";

const sponsors = [
  { id: 1, name: "ArtFund Pakistan", logo: sponsorImg1 },
  { id: 2, name: "Lahore Stage Society", logo: sponsorImg2 },
  { id: 3, name: "Karachi Arts Council", logo: sponsorImg3 },
  { id: 4, name: "TheatreWorks India", logo: sponsorImg3 },
  { id: 5, name: "Cultural Trust", logo: sponsorImg2 },
];

const PtfSponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const getVisibleItems = () => {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 768) return 3;
    return 1;
  };

  const visibleItems = getVisibleItems();
  const maxIndex = Math.ceil(sponsors.length - visibleItems);

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isPaused]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div className="mx-6 py-20 px-6">
      <h2 className="text-4xl md:text-6xl font-bold text-red-700 text-center mb-12 relative z-10 tracking-tight">
        Our Sponsors
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex-shrink-0 w-full md:w-1/3 xl:w-1/4 px-4"
              >
                <div className="h-64 w-ful flex flex-col items-center justify-center p-6 duration-300">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-44 max-w-full object-contain mb-4"
                    loading="lazy"
                  />
                  {/* <h3 className="text-xl font-medium text-gray-800">{sponsor.name}</h3> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Navigation */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 max-w-md flex items-center">
            <div className="w-full h-1 bg-red-100 relative">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <div
                  key={idx}
                  className="absolute h-4 w-4 rounded-full bg-white cursor-pointer transform -translate-y-1/2"
                  style={{ left: `${(idx / maxIndex) * 100}%` }}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-red-600 scale-125 border-red-700" : "bg-red-200"
                      }`}
                  />
                  {/* <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-sm text-red-600 whitespace-nowrap">
                    {sponsors[idx].name}
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PtfSponsors;