import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const AucNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle events dropdown
  const toggleEvents = () => setIsEventsOpen(!isEventsOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsEventsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsEventsOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/festival/auc" },
    { name: "About", href: "/festival/auc/about" },
    { name: "Speakers", href: "/festival/auc/delegate" },
    {
      name: "Events",
      href: "#", // We'll handle this with a dropdown
      dropdown: [
        {
          name: "Karachi",
          subDropdown: [
            { name: "1 to 16", href: "/festival/auc/events/karachi/1-16" }, // Replaced # with a proper route
          ],
        },
        { name: "Houston", href: "/festival/auc/events/houston" }, // Replaced # with a proper route
      ],
    },
    { name: "Sessions", href: "/festival/auc/sessions" }, // Replaced # with a proper route
    { name: "Contact Us", href: "/festival/auc/contactUs" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/festival/auc" className="flex items-center">
                <img
                  src="/src/assets/auc-assets/auc-logo.png"
                  alt="AUC Logo"
                  className="w-24 h-18 transform hover:scale-110 transition duration-300"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={toggleEvents}
                        className="hover:text-red-700 transition duration-300 font-bold flex items-center"
                      >
                        {link.name}
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
                      {isEventsOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-gray-900 text-white rounded-lg shadow-lg z-10 transform transition-all duration-300">
                          {link.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.subDropdown ? (
                                <div>
                                  {dropdownItem.subDropdown.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="block px-4 py-2 hover:bg-red-700 transition duration-300"
                                      onClick={toggleMenu}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <Link
                                  to={dropdownItem.href}
                                  className="block px-4 py-2 hover:bg-red-700 transition duration-300"
                                  onClick={toggleMenu}
                                >
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`hover:text-red-700 transition duration-300 font-bold ${location.pathname === link.href ? "text-red-700" : ""
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <button className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300">
                Register Now
              </button>
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
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={toggleEvents}
                        className="w-full text-left px-3 py-2 text-white hover:bg-red-700 rounded-md flex items-center justify-between"
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-300 ${isEventsOpen ? "rotate-180" : ""
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
                      {isEventsOpen && (
                        <div className="pl-4 space-y-1">
                          {link.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.subDropdown ? (
                                <div>
                                  {dropdownItem.subDropdown.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className={`block px-3 py-2 text-white hover:bg-red-700 rounded-md ${location.pathname === subItem.href ? "bg-red-700" : ""
                                        }`}
                                      onClick={toggleMenu}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <Link
                                  to={dropdownItem.href}
                                  className={`block px-3 py-2 text-white hover:bg-red-700 rounded-md ${location.pathname === dropdownItem.href ? "bg-red-700" : ""
                                    }`}
                                  onClick={toggleMenu}
                                >
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block px-3 py-2 text-white hover:bg-red-700 rounded-md ${location.pathname === link.href ? "bg-red-700" : ""
                        }`}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <button className="bg-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300 w-full">
                Register Now
              </button>

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
                    className="text-white hover:text-red-700 transition duration-300"
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
                className="block text-white hover:text-red-700 transition duration-300"
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

export default AucNavbar;