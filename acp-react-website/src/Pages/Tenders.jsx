import React, { useState } from "react";

const Tenders = () => {
  const [filterDate, setFilterDate] = useState("");

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-[#1E293B] to-[#111827] text-gray-800 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F1E1] mb-6">
          Tenders
        </h1>
      </div>

      {/* Filter Section */}
      <div className="w-full max-w-3xl mb-12">
        <div className="flex justify-center mb-6">
          <label
            htmlFor="filterDate"
            className="text-lg font-medium text-white mr-4"
          >
            FILTER BY DATE:
          </label>
          <input
            type="date"
            id="filterDate"
            value={filterDate}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-black"
            aria-label="Filter tenders by date"
          />
        </div>
      </div>

      {/* Tender Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Pre-Qualification Notice
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-4">
          for PLF Sukkur Chapter 2
        </p>
        <p className="text-gray-500 text-sm sm:text-base mb-4">
          Start Date: 12th February 2025
        </p>
        <p className="text-gray-500 text-sm sm:text-base mb-4">
          End Date: 17th February 2025
        </p>
        <p className="text-gray-500 text-sm sm:text-base mb-4">
          Tender ID: TD-ACPKHI-0002
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#download"
            className="w-full sm:w-auto bg-red-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200 text-center"
            aria-label="Download tender document"
          >
            Download Tender
          </a>
          <a
            href="#apply"
            className="w-full sm:w-auto bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 text-center"
            aria-label="Apply now for tender"
          >
            Apply Now
          </a>
        </div>
      </div>

    </div>
  );
};

export default Tenders;