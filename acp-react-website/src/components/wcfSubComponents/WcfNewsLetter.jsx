import React from 'react';

function WcfNewsletterSignup() {
  return (
    <section className="py-20 md:px-12 lg:px-24 bg-gray-900">
      <div className="mx-4 text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The WCFK is uniting 450+ artists from 40+ countries in a global celebration.</h2>
        <p className="text-gray-300 mb-6">Stay Connected: Join Our Mailing List!</p>
        <p className="text-gray-300 mb-6">Join Our Newsletter & Follow Us On Social Media For Latest Updates!</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-2/3 py-3 px-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}

export default WcfNewsletterSignup;