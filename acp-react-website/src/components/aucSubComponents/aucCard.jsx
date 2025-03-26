import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import AucDelegateCard from "../aucReusableComponents/aucDelegatesCard";

// Sample delegate data (replace with your actual data)
const delegates = [
  {
    name: "Dr. Ahmed Khan",
    title: "Urdu Literature Expert",
    imageUrl: "../src/assets/auc-assets/auc-card.jpeg",
    bio: "Renowned scholar with over 20 years of research in Urdu poetry.",
  },
  {
    name: "Prof. Sara Malik",
    title: "Linguistics Scholar",
    imageUrl: "../src/assets/auc-assets/auc-card.jpeg",
    bio: "Expert in Urdu linguistics and its evolution in modern times.",
  },
  {
    name: "Mr. Zain Iqbal",
    title: "Poet & Writer",
    imageUrl: "../src/assets/auc-assets/auc-card.jpeg",
    bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
];

const AucCard = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  // Duplicate delegates for seamless looping
  const duplicatedDelegates = [...delegates, ...delegates];

  // Smooth, continuous carousel animation
  const carouselAnimation = {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  };

  useEffect(() => {
    controls.start(carouselAnimation);
  }, [controls]);

  return (
    <section className="py-12 bg-[#F9FAFB]">
      <div className="mx-4 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 text-center mb-15">
          Meet Our Delegates
        </h2>
        <div className="overflow-hidden relative">
          <motion.div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6" // Reduced gap on mobile
            animate={controls}
            style={{ width: `${duplicatedDelegates.length * 15}rem` }} // Adjusted for smaller base width
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedDelegates.map((delegate, index) => (
              <AucDelegateCard
                key={index}
                name={delegate.name}
                title={delegate.title}
                imageUrl={delegate.imageUrl}
                bio={delegate.bio}
              />
            ))}
          </motion.div>
          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-[#F9FAFB] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-[#F9FAFB] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AucCard;