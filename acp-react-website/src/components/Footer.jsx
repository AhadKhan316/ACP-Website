import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-40 grid grid-cols-1 md:grid-cols-3">
        {/* Column 1: Logo and Text */}
        <div className="flex flex-col items-center md:items-start">
          <img src="https://acpkhi.com/logo.png" alt="Arts Council Logo" className="w-24 h-24 mb-4" style={{ filter: 'invert(1)' }} />
          <p className="text-sm text-center md:text-left">
            We are a Non-Profit Organization <br /> for the promotion of Art & Culture.
          </p>
        </div>

        {/* Column 2: Contact Info and Links */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <span className="mr-2 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div>
              <p className="font-bold">Phone</p>
              <p>+92-300-0802391</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <p className="font-bold">Email</p>
              <p>info@acpkhi.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="font-bold">Location</p>
              <p>M.R. Kiyani Road, Karachi, Pakistan.</p>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Links and Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-600 transition duration-300">About ACP</a></li>
                <li><a href="#" className="hover:text-red-600 transition duration-300">Governing Body</a></li>
                <li><a href="#" className="hover:text-red-600 transition duration-300">Venues</a></li>
                <li><a href="#" className="hover:text-red-600 transition duration-300">Career</a></li>
                <li><a href="#" className="hover:text-red-600 transition duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-600 transition duration-300">Aalmi Urdu Conference</a></li>
                <li><a href="#" className="hover:text-red-600 transition duration-300">Pakistan Literature Festival</a></li>
                <li><a href="#" className="hover:text-red-600 transition duration-300">Women Conference</a></li>
                <li><a href="#" className="hover:text-red-600 transition duration-300">Pakistan Youth Festival</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-4 w-full md:w-auto">
            <form className="flex items-center">
              <input type="email" placeholder="Email" className="bg-white text-black px-4 py-2 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition duration-300">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-sm">Copyright © Arts Council of Pakistan Karachi.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;