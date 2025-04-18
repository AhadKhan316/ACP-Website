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
    <div className="py-6 bg-white text-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="w-full mx-4 bg-white p-6 sm:p-8 mb-6 overflow-hidden">
        <img
          src="https://acpkhi.com/imgs/ACP%20Drone%202023.webp"
          alt="Arts Council of Pakistan Karachi"
          className="w-full h-120 object-cover rounded-2xl mb-6"
          loading="lazy"
        />
        <h1 className="text-2xl sm:text-4xl font-bold text-black text-center mb-4">
          Arts Council of Pakistan Karachi
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-black text-center mb-6">
          Voter Verification for Election 2025–26
        </h2>
      </div>

      {/* Verification Form */}
      <div className="w-full max-w-[800px] bg-white text-black p-6 sm:p-8 mb-6">
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label
              htmlFor="membershipInput"
              className="block text-lg font-medium text-black mb-2"
            >
              Enter Membership No., CNIC, or Name:
            </label>
            <input
              type="text"
              id="membershipInput"
              value={membershipInput}
              onChange={handleInputChange}
              placeholder="Enter details here"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
              aria-label="Membership, CNIC, or Name"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#B90602] text-white curdor-pointer hover:bg-black/80 to-black/90 hover:shadow-lg cursor-pointer py-3 px-6 rounded-lg transition duration-200"
          >
            Verify Membership
          </button>
        </form>
      </div>

    </div>
  );
};

export default VoterVerification;