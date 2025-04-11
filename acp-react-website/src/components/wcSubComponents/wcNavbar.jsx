import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

// Replace with your Women's Conference logo
import WcLogo from "/src/assets/wc-assets/wc-logo.png";

const WcNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="bg-gray-900 text-white shadow-lg sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/wc" className="flex items-center">
                <img
                  src={WcLogo}
                  alt="WC Logo"
                  className="h-20 w-auto mr-2 transform hover:scale-110 transition duration-300"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {[
                { to: "/wc", label: "Home" },
                { to: "/wc/about", label: "About" },
                { to: "/wc/speakers", label: "Speakers" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`hover:text-pink-400 transition duration-300 font-bold ${location.pathname === item.to ? "text-pink-400" : ""
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Events Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="hover:text-pink-400 transition duration-300 font-bold flex items-center"
                >
                  Events
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-900 text-white rounded-lg shadow-lg z-10 transform transition-all duration-300">
                    {[
                      { to: "/wc/events/keynotes", label: "Keynotes" },
                      { to: "/wc/events/workshops", label: "Workshops" },
                      { to: "/wc/events/panels", label: "Panels" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2 hover:bg-pink-400 transition duration-300"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/wc/contact"
                className={`hover:text-pink-400 transition duration-300 font-bold ${location.pathname === "/wc/contact" ? "text-pink-400" : ""
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 transform transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { to: "/wc", label: "Home" },
                { to: "/wc/about", label: "About" },
                { to: "/wc/speakers", label: "Speakers" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3 py-2 text-white hover:bg-pink-400 rounded-md ${location.pathname === item.to ? "bg-pink-400" : ""
                    }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}

              {/* Events Dropdown in Mobile */}
              <div>
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left px-3 py-2 text-white hover:bg-gray-800 rounded-md flex items-center justify-between"
                >
                  Events
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {[
                      { to: "/wc/events/keynotes", label: "Keynotes" },
                      { to: "/wc/events/workshops", label: "Workshops" },
                      { to: "/wc/events/panels", label: "Panels" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`block px-3 py-2 text-white hover:bg-pink-400 rounded-md ${location.pathname === item.to ? "bg-pink-400" : ""
                          }`}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/wc/contact"
                className={`block px-3 py-2 text-white hover:bg-pink-400 rounded-md ${location.pathname === "/wc/contact" ? "bg-pink-400" : ""
                  }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>

              {/* Social Media Icons in Mobile Menu */}
              <div className="flex justify-center space-x-4 mt-4">
                {[
                  {
                    href: "#", // Replace with actual WC Instagram URL
                    icon: <FaInstagram className="h-6 w-6" />,
                    alt: "Instagram",
                  },
                  {
                    href: "#", // Replace with actual WC Facebook URL
                    icon: <FaFacebookF className="h-6 w-6" />,
                    alt: "Facebook",
                  },
                  {
                    href: "#", // Replace with actual WC TikTok URL
                    icon: <FaTiktok className="h-6 w-6" />,
                    alt: "TikTok",
                  },
                  {
                    href: "#", // Replace with actual WC YouTube URL
                    icon: <FaYoutube className="h-6 w-6" />,
                    alt: "YouTube",
                  },
                ].map((item) => (
                  <a
                    key={item.alt}
                    href={item.href}
                    className="text-white hover:text-pink-400 transition duration-300"
                    aria-label={item.alt}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Social Media Sidebar (Desktop Only) */}
      <div className="hidden md:block fixed top-1/2 transform -translate-y-1/2 right-0 z-50">
        <div className="bg-gray-800 text-white p-2 rounded-l-lg shadow-lg">
          <div className="space-y-4">
            {[
              {
                href: "#", // Replace with actual WC Instagram URL
                icon: <FaInstagram className="h-6 w-6" />,
                alt: "Instagram",
              },
              {
                href: "#", // Replace with actual WC Facebook URL
                icon: <FaFacebookF className="h-6 w-6" />,
                alt: "Facebook",
              },
              {
                href: "#", // Replace with actual WC TikTok URL
                icon: <FaTiktok className="h-6 w-6" />,
                alt: "TikTok",
              },
              {
                href: "#", // Replace with actual WC YouTube URL
                icon: <FaYoutube className="h-6 w-6" />,
                alt: "YouTube",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                className="block text-white hover:text-pink-400 transition duration-300"
                aria-label={item.alt}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WcNavbar;