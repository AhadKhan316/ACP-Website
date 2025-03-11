// src/components/Cards.jsx
import React from "react";
import { motion } from "framer-motion";
import Card from "../reusableComponents/ReusableCard";

const Cards = ({ title, items }) => {
  return (
    <div className="bg-gray-800 py-10 px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl overflow-hidden mb-12">
      <div className="mx-4">
        <motion.h2
          className="text-4xl font-bold text-center text-[#F5F1E1] mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;