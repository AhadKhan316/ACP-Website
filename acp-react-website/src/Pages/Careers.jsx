import React from "react";

const Career = () => {
  return (
    <div className="py-10 bg-white text-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="w-full mx-4 bg-white p-6 sm:p-8 overflow-hidden relative">
        <img
          src="https://acpkhi.com/imgs/ACP%20Drone%202023.webp" // Use the provided image or a placeholder
          alt="Arts Council of Pakistan Karachi"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-6"
          loading="lazy"
        />
        <div className="absolute inset-0 to-transparent rounded-3xl"></div>
        <h1 className="text-2xl sm:text-4xl font-bold text-black text-center mb-4 relative z-10">
          Join ACP Team
        </h1>
        {/* <a
          href="#apply"
          className="bottom-6 right-6 bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-200 relative z-10"
          aria-label="Apply today"
        >
          Apply today <span className="ml-2">➡️</span>
        </a> */}
      </div>

      {/* Introduction */}
      <div className="w-full max-w-3xl text-black text-center mb-12">
        <p className="text-base sm:text-lg leading-relaxed">
          We are always on the lookout for talented individuals to join our dynamic team at ACPKHI, fostering growth, innovation, and diversity in the workplace. Check this page regularly for upcoming job opportunities and become part of a passionate and driven team.
        </p>
      </div>

      {/* Open Job Vacancies */}
      <div className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black text-center mb-6">
          Open Job Vacancies
        </h2>
        <div className="space-y-6">
          {/* Example Open Vacancy Card (Add more as needed) */}
          <div className="bg-white p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
              Trainer - Projects & Maintenance
            </h3>
            <p className="text-black text-base sm:text-lg mb-4">
              We are seeking a skilled Trainer for Projects & Maintenance to support our operations at ACPKHI.
            </p>
            <div className="text-black text-sm sm:text-base">
              <p>Status: Open</p>
              <p>Last Date: 30th September 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Job Vacancies */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black text-center mb-6">
          Previous Job Vacancies
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
              <img
                src="https://acpkhi.com/logo.png"
                alt="ACP Logo"
                className="w-16 h-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-black">
                  Trainer - Projects & Maintenance
                </h3>
                <p className="text-black text-sm sm:text-base">
                  Status: Closed | Last Date: 30th September 2024
                </p>
              </div>
            </div>
            <p className="text-black text-base sm:text-lg">
              We previously sought a skilled Trainer for Projects & Maintenance to support our operations at ACPKHI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;