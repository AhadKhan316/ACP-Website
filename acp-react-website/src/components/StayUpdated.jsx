import React, { useState } from "react";
import { motion } from "framer-motion";

const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await fetch("http://localhost/organization-website/backend/save_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        setMessage({ type: "success", content: data.message });
        setEmail("");
      } else {
        setMessage({ type: "error", content: data.message });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", content: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-10 bg-gray-900">
      <div className="mx-15 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100 mb-4">
              Stay Updated with Our Promotions
            </h2>
            <p className="text-amber-100 mb-8 text-base sm:text-lg lg:text-xl">
              Sign up with your email to receive the latest updates and offers.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 rounded-lg border border-gray-600 bg-gray-700 text-amber-100 text-base sm:text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full sm:w-auto bg-red-700 text-white text-base sm:text-lg font-semibold py-3 px-6 rounded-lg transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'
                  }`}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message.content && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
              >
                {message.content}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayUpdated;