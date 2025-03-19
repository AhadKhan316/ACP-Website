import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const PlfFooter = () => {
  return (
    <footer className="py-8 px-4 md:px-8 bg-gradient-to-b from-navy-800 to-navy-900 text-ivory-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="particles"></div> {/* Add particle animation via CSS or a library */}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0">
          <img
            src="https://via.placeholder.com/40"
            alt="PLF Logo"
            className="h-10 w-10 mb-2"
          />
          <p className="text-sm font-sans">
            Pakistan Literature Festival © 2024
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {["Info", "Chapters", "Social"].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1, color: "#F4A261" }}
              className="transition duration-300"
            >
              {link}
            </motion.a>
          ))}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[
            { href: "#", icon: <FaInstagram className="h-6 w-6" />, alt: "Instagram" },
            { href: "#", icon: <FaFacebookF className="h-6 w-6" />, alt: "Facebook" },
            { href: "#", icon: <FaTiktok className="h-6 w-6" />, alt: "TikTok" },
            { href: "#", icon: <FaYoutube className="h-6 w-6" />, alt: "YouTube" },
          ].map((item) => (
            <motion.a
              key={item.alt}
              href={item.href}
              whileHover={{ scale: 1.2, color: "#F4A261" }}
              className="transition duration-300"
              aria-label={item.alt}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PlfFooter;