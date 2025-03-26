import { motion } from "framer-motion";

const AucNewsletter = () => {
  return (
    <section className="py-24 px-4 md:px-8 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#C4A484"
            fillOpacity="0.8"
            d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,128C672,139,768,149,864,149.3C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,128C672,139,768,149,864,149.3C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,96C672,107,768,117,864,117.3C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,128C672,139,768,149,864,149.3C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>
      <div className="mx-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 mb-6">
          Subscribe to AUC Newsletter
        </h2>
        <p className="text-lg md:text-xl font-sans mb-8 text-gray-500">
          Stay informed about the latest updates, events, and insights from the Aalmi Urdu Conference.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 p-3 rounded-lg bg-[#2F3B5A]/50 backdrop-blur-md text-black border border-[#C4A484]/30 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          />
          <motion.button
            type="submit"
            className="bg-red-700 text-white font-sans font-semibold py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default AucNewsletter;