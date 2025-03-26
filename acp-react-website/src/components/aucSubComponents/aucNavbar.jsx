import { useState } from "react";
import { Link } from "react-router-dom";

const AucNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isEventsOpen, setIsEventsOpen] = useState(false); // Events dropdown toggle
  const [isSubEventsOpen, setIsSubEventsOpen] = useState(false); // Sub-dropdown toggle

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleEvents = () => setIsEventsOpen(!isEventsOpen);
  const toggleSubEvents = () => setIsSubEventsOpen(!isSubEventsOpen);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Speakers", href: "#" },
    {
      name: "Events",
      href: "#",
      dropdown: [
        { name: "Workshops", href: "#" },
        {
          name: "Seminars",
          href: "#",
          subDropdown: [
            { name: "Poetry", href: "#" },
            { name: "Literature", href: "#" },
            { name: "Culture", href: "#" },
          ],
        },
        { name: "Exhibitions", href: "#" },
      ],
    },
    { name: "Sessions", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-26">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="../src/assets/auc-assets/auc-logo.png"
              alt="Arts Council Logo"
              className="w-24 h-18"
            />
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-700 focus:outline-none transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ms-4">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={toggleEvents}
                        className="text-white hover:text-red-700 transition duration-300 flex items-center"
                      >
                        {link.name}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {/* Dropdown */}
                      <ul
                        className={`absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg transition-all duration-300 ease-in-out ${isEventsOpen ? "block opacity-100" : "hidden opacity-0"
                          }`}
                      >
                        {link.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.name} className="relative group">
                            {dropdownItem.subDropdown ? (
                              <div>
                                <button
                                  onClick={toggleSubEvents}
                                  className="w-full text-left px-4 py-2 text-white hover:bg-red-700 hover:text-white transition duration-300 flex items-center justify-between"
                                >
                                  {dropdownItem.name}
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </button>
                                {/* Sub-Dropdown */}
                                <ul
                                  className={`absolute left-full top-0 w-48 bg-gray-800 rounded-md shadow-lg transition-all duration-300 ease-in-out ${isSubEventsOpen ? "block opacity-100" : "hidden opacity-0"
                                    }`}
                                >
                                  {dropdownItem.subDropdown.map((subItem) => (
                                    <li key={subItem.name}>
                                      <a
                                        href={subItem.href}
                                        className="block px-4 py-2 text-white hover:bg-red-700 hover:text-white transition duration-300"
                                      >
                                        {subItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <a
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-white hover:bg-red-700 hover:text-white transition duration-300"
                              >
                                {dropdownItem.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="relative group text-white hover:text-red-700 transition duration-300"
                    >
                      {link.name}
                      <span className="absolute inset-x-0 bottom-[-8px] h-1 bg-red-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {/* Language Toggle */}
            {/* <button className="text-white hover:text-red-700 transition duration-300">
              EN/UR
            </button> */}
            {/* CTA Button */}
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300 animate-[glow_2s_infinite] cursor-pointer">
              Register Now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-26 left-0 w-full bg-gray-900 transition-all duration-500 ease-in-out ${isOpen ? "block animate-[slideIn_0.5s_ease-in-out]" : "hidden"
            }`}
        >
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={toggleEvents}
                      className="text-white hover:text-red-700 transition duration-300 flex items-center justify-center w-full"
                    >
                      {link.name}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Mobile Dropdown */}
                    <ul
                      className={`w-full bg-gray-800 transition-all duration-300 ease-in-out ${isEventsOpen ? "block" : "hidden"
                        }`}
                    >
                      {link.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.name} className="w-full">
                          {dropdownItem.subDropdown ? (
                            <div>
                              <button
                                onClick={toggleSubEvents}
                                className="w-full text-left px-4 py-2 text-white hover:bg-red-700 hover:text-white transition duration-300 flex items-center justify-between"
                              >
                                {dropdownItem.name}
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </button>
                              {/* Mobile Sub-Dropdown */}
                              <ul
                                className={`w-full bg-gray-700 transition-all duration-300 ease-in-out ${isSubEventsOpen ? "block" : "hidden"
                                  }`}
                              >
                                {dropdownItem.subDropdown.map((subItem) => (
                                  <li key={subItem.name}>
                                    <a
                                      href={subItem.href}
                                      className="block px-6 py-2 text-white hover:bg-red-700 hover:text-white transition duration-300"
                                      onClick={toggleMenu}
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <a
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-white hover:bg-red-700 hover:text-white transition duration-300"
                              onClick={toggleMenu}
                            >
                              {dropdownItem.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-white text-lg hover:text-red-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
            <button className="text-white text-lg hover:text-red-700 transition duration-300">
              EN/UR
            </button>
            <button className="bg-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300 animate-[glow_2s_infinite]">
              Register Now
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AucNavbar;