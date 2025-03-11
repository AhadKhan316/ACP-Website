import React from "react";
import { motion } from "framer-motion";

function WcfUpcomingShows() {
  const steps = [
    {
      id: 1,
      title: "Discover Shows",
      description: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
      image: "/path/to/discover-shows.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Choose Your Event",
      description: "Amet venenatis urna cursus eget nunc scelerisque viverra mauris inali quam sem",
      image: "/path/to/choose-event.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Book Tickets",
      description: "Mauris inali quam sem amet venenatis urna cursus eget nunc scelerisque viverra",
      image: "/path/to/book-tickets.jpg", // Replace with actual image path
    },
  ];

  // Animation variants for the steps
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Section Header */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Upcoming Events
      </motion.h2>

      {/* Steps Container */}
      <motion.div
        className="mx-4 flex flex-col lg:flex-row items-center justify-between gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex-1 flex flex-col items-center text-center"
            variants={stepVariants}
          >
            {/* Image */}
            <div className="w-full max-w-100 h-64 bg-white rounded-2xl overflow-hidden mb-6 shadow-md">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-4">
              <span className="w-10 h-10 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                {step.id}
              </span>
              {/* Connecting Line (hidden on the last step) */}
              {/* {index < steps.length - 1 && (
                <div className=""></div>
              )} */}
            </div>

            {/* Step Title and Description */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-white text-lg max-w-xs">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WcfUpcomingShows;