import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import PtfLogo from "/src/assets/ptf-assets/ptf-logo.png";

const PtfNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Menu items array
  const menuItems = [
    { to: "/festival/ptf", label: "Home" },
    { to: "/festival/ptf/about", label: "About" },
    { to: "/festival/ptf/artists", label: "Artists" },
    { to: "/festival/ptf/shows", label: "Shows" },
    { to: "/festival/ptf/media-courage", label: "Media Courage" },
    { to: "/festival/ptf/contact-us", label: "Contact Us" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="bg-white text-black shadow-lg sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-35">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/festival/ptf" className="flex items-center">
                <img
                  src={PtfLogo}
                  alt="PTF Logo"
                  className="h-30 w-35 mr-2 transform hover:scale-110 transition duration-300"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`hover:text-red-600 transition duration-300 font-bold ${location.pathname === item.to ? "text-red-600" : ""
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black transform transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3 py-2 text-white hover:bg-red-600 rounded-md ${location.pathname === item.to ? "bg-red-600" : ""
                    }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              {/* Social Media Icons in Mobile Menu */}
              <div className="flex justify-center space-x-4 mt-4">
                {[
                  {
                    href: "#",
                    icon: <FaInstagram className="h-6 w-6" />,
                    alt: "Instagram",
                  },
                  {
                    href: "#",
                    icon: <FaFacebookF className="h-6 w-6" />,
                    alt: "Facebook",
                  },
                  {
                    href: "#",
                    icon: <FaTiktok className="h-6 w-6" />,
                    alt: "TikTok",
                  },
                  {
                    href: "#",
                    icon: <FaYoutube className="h-6 w-6" />,
                    alt: "YouTube",
                  },
                ].map((item) => (
                  <a
                    key={item.alt}
                    href={item.href}
                    className="text-white hover:text-red-600 transition duration-300"
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
        <div className="bg-black text-white p-2 rounded-l-lg shadow-lg">
          <div className="space-y-4">
            {[
              {
                href: "#",
                icon: <FaInstagram className="h-6 w-6" />,
                alt: "Instagram",
              },
              {
                href: "#",
                icon: <FaFacebookF className="h-6 w-6" />,
                alt: "Facebook",
              },
              {
                href: "#",
                icon: <FaTiktok className="h-6 w-6" />,
                alt: "TikTok",
              },
              {
                href: "#",
                icon: <FaYoutube className="h-6 w-6" />,
                alt: "YouTube",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                className="block text-white hover:text-red-600 transition duration-300"
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

export default PtfNavbar;