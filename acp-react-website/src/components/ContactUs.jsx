import React from 'react';

const ContactUs = () => {
  return (
    <div className="py-10 bg-[#0F172A] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="w-full mx-4 bg-[#1E293B] rounded-3xl shadow-2xl p-6 sm:p-8 mb-12 overflow-hidden relative">
        <img
          src="https://acpkhi.com/imgs/ACP%20Drone%202023.webp" 
          alt="Arts Council of Pakistan Karachi"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-6"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center">CONTACT</h1>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full mx-4 rounded-3xl p-6 sm:p-8 mb-12 overflow-hidden relative">
        <div className="mx-4 text-center">
          {/* <h2 className="text-2xl font-semibold mb-6">Contact Us</h2> */}
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us regarding any questions, queries, and bookings. We would love to hear from you.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Query */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-4xl font-semibold mb-4">For Query</h3>
              <p className="mb-2">
                <h1 className='text-2xl'>Call:</h1>
                <a href="tel:+923000802391" className="text-white text-2xl hover:text-red-600">
                  +92-300-0802391
                </a>
              </p>
              <p>
                <h1 className='text-2xl'>Email:</h1>
                <a href="mailto:info@acpkhi.com" className="text-white text-2xl hover:text-red-600">
                  info@acpkhi.com
                </a>
              </p>
            </div>
            {/* For Venues Bookings */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-4xl font-semibold mb-4">For Venues Bookings</h3>
              <p className="mb-2">
                <h1 className='text-2xl'>Call:</h1>
                <a href="tel:+923000802392" className="text-white text-2xl hover:text-red-600">
                  +92-300-0802392
                </a>
              </p>
              <p>
                <h1 className='text-2xl'>Email:</h1>
                <a href="mailto:booking@acpkhi.com" className="text-white text-2xl hover:text-red-600">
                  booking@acpkhi.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Find Us Section with Iframe Map */}
      <div className="w-full mx-4 rounded-3xl p-6 sm:p-8 mb-12 overflow-hidden relative">
        <div className="mx-4 text-center">
          <h2 className="text-4xl font-semibold mb-6">Find Us</h2>
          <p className="text-white mb-8">
            Arts Council of Pakistan Karachi,<br />
            M.R Kiyani Road, Saddar Karachi,<br />
            Pakistan.
          </p>
          <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Arts Council of Pakistan Karachi Location"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Arts+Council+of+Pakistan+Karachi,+M.R.+Kiyani+Road,+Saddar,+Karachi,+Pakistan&hl=en&z=14&output=embed"
              className="rounded-lg shadow-md"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;