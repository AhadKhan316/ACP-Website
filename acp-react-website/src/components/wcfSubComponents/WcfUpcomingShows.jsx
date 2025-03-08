import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WcfUpcomingShows() {
  const shows = [
    {
      title: "Shakespeare's Fool",
      // date: "23rd October | 8:00 PM",
      image: "/path/to/shakespeares-fool.jpg",
    },
    {
      title: "Berlin Nach Lahore",
      // date: "23 October 2024",
      image: "/path/to/berlin-nach-lahore.jpg",
    },
    {
      title: "The Three Gifts of the North Wind",
      // date: "12:00 noon 24th October 2024",
      image: "/path/to/three-gifts.jpg",
    },
    {
      title: "Inspiritus",
      // date: "8:00 PM | 25 OCTOBER 2024",
      image: "/path/to/inspiritus.jpg",
    },
    // Add more shows if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerSlide = () => {
    if (window.innerWidth >= 1024) return 3; 
    if (window.innerWidth >= 768) return 2; 
    return 1; 
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (shows.length - cardsPerSlide + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, [shows.length, cardsPerSlide]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900">
      
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white text-center relative mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Upcoming Shows
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-gray-800 p-6 rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-full max-w-4xl flex items-center justify-center gap-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {shows.slice(currentIndex, currentIndex + cardsPerSlide).map((show, index) => (
              <motion.div
                key={index}
                className="w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.02 }}
              >
                
                <div className="relative w-full h-66 overflow-hidden">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    {/* <span className="text-white text-lg font-semibold">🎭 Book Now</span> */}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {show.title}
                  </h3>
                  <p className="text-gray-600">{show.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: shows.length - cardsPerSlide + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default WcfUpcomingShows;