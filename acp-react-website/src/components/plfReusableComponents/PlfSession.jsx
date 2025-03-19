import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";

const PlfSession = ({ sessions, title = "Event Sessions" }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleSession = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-ivory-100 text-navy-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
          {title}
        </h2>
        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-amber-500 h-full"></div>

          {/* Session Cards */}
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full border-4 border-ivory-100 z-10"></div>

              {/* Session Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative bg-navy-700 text-ivory-100 rounded-lg shadow-lg p-6 mx-12 md:mx-0 md:w-3/4 lg:w-1/2 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  } cursor-pointer transition-all duration-300 hover:shadow-amber-500/50 hover:shadow-xl`}
                onClick={() => toggleSession(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-amber-500" />
                    <h3 className="text-xl font-sans font-semibold">
                      {session.time} - {session.event}
                    </h3>
                  </div>
                  {expandedIndex === index ? (
                    <FaChevronUp className="text-amber-500" />
                  ) : (
                    <FaChevronDown className="text-amber-500" />
                  )}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-sm font-sans">{session.day}</p>
                      <p className="text-sm font-sans mt-2">
                        Join us for this exciting session as we explore the rich literary heritage of Pakistan. This event will feature renowned speakers and interactive discussions.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlfSession;