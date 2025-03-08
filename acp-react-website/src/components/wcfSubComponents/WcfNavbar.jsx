import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

function WcfNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="bg-white py-3 md:py-4 shadow-md sticky top-0 z-50">
      <div className="mx-4 flex flex-wrap items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo and Hamburger (Combined for Mobile/Tablet) */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/festival/wcf" className="flex items-center">
            <img src="../src/assets/wcf-assets/wcf-logo.png" alt="Logo" className="h-10 md:h-12 mr-2 md:mr-4 hover:scale-105 transition-transform duration-200" />
          </Link>
          <button onClick={toggleMenu} className="lg:hidden text-primary focus:outline-none" aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links (Desktop & Mobile/Tablet) */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto mt-2 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6 xl:space-x-2 p-4 lg:p-0">
            {[
              { to: "/festival/wcf", label: "Home" },
              { to: "/festival/wcf/about", label: "About" },
              { to: "/festival/wcf/performances", label: "Performances" },
              { to: "/festival/wcf/workshops", label: "Workshops" },
              { to: "/festival/wcf/communityBuilding", label: "Community Building" },
              { to: "/festival/wcf/artist", label: "Artists" },
              { to: "/festival/wcf/artistEngagement", label: "Artist Engagements" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block lg:inline-block px-4 py-2 text-black font-bold hover:text-red-500 transition duration-300 ${location.pathname === item.to ? 'text-primary font-semibold' : ''}`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons (Combined) */}
        <div className="flex space-x-4 mt-4 lg:mt-0">
          {[
            { href: "#", icon: <FaInstagram className="h-6 w-6" />, alt: "Instagram" },
            { href: "#", icon: <FaFacebookF className="h-6 w-6" />, alt: "Facebook" },
            { href: "#", icon: <FaTiktok className="h-6 w-6" />, alt: "TikTok" },
            { href: "#", icon: <FaYoutube className="h-6 w-6" />, alt: "YouTube" },
          ].map((item) => (
            <a key={item.alt} href={item.href} className="text-black hover:text-red-500 transition duration-300" aria-label={item.alt}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default WcfNavbar;