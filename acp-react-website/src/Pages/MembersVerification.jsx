import React, { useState } from "react";

const VoterVerification = () => {
  const [membershipInput, setMembershipInput] = useState("");

  const handleInputChange = (e) => {
    setMembershipInput(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Add your verification logic here (e.g., API call or form submission)
    console.log("Verifying membership:", membershipInput);
  };

  return (
    <div className="py-10 bg-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="w-full mx-4 bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-12 overflow-hidden">
        <img
          src="https://acpkhi.com/imgs/ACP%20Drone%202023.webp" // Use the provided image or a placeholder
          alt="Arts Council of Pakistan Karachi"
          className="w-full h-120 object-cover rounded-2xl mb-6"
          loading="lazy"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F1E1] text-center mb-4">
          Arts Council of Pakistan Karachi
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-6">
          Voter Verification for Election 2025–26
        </h2>
      </div>

      {/* Verification Form */}
      <div className="w-full max-w-[800px] bg-gray-800 text-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12">
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label
              htmlFor="membershipInput"
              className="block text-lg font-medium text-white mb-2"
            >
              Enter Membership No., CNIC, or Name:
            </label>
            <input
              type="text"
              id="membershipInput"
              value={membershipInput}
              onChange={handleInputChange}
              placeholder="Enter details here"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5F1E1] focus:border-transparent transition duration-200"
              aria-label="Membership, CNIC, or Name"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Verify Membership
          </button>
        </form>
      </div>

    </div>
  );
};

export default VoterVerification;