import React from "react";

const Feedback = () => {
  return (
    <section id="user-feedback" className="py-10 bg-[#111827]">
      <div className="mx-15 px-4 sm:px-6 lg:px-8 py-6 text-center bg-[#1F2937] rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#F5F1E1]">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feedback Card 1 */}
          <div className="bg-[#111827] shadow-lg rounded-lg p-6 flex flex-col">
            <p className="text-[#F5F1E1] italic text-base sm:text-lg flex-grow">
              "The workshops offered by the Arts Council are amazing! I
              discovered my hidden talents and met inspiring people."
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://t3.ftcdn.net/jpg/02/81/81/86/360_F_281818663_XXRCNuGktKeZsnknqWkKI0rR4JPWui3H.jpg"
                  alt="User profile"
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-2 sm:mr-4"
                />
              </div>
              <div>
                <h4 className="text-[#F5F1E1] font-semibold text-base sm:text-lg">
                  Sarah Ahmed
                </h4>
                <span className="text-[#F5F1E1] text-sm sm:text-base me-16">
                  Artist
                </span>
              </div>
            </div>
          </div>

          {/* Feedback Card 2 */}
          <div className="bg-[#111827] shadow-lg rounded-lg p-6 flex flex-col">
            <p className="text-[#F5F1E1] text-base sm:text-lg flex-grow">
              "Dynamic music festivals were an incredible experience. The Arts
              Council has truly created a cultural hub for everyone."
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://live.staticflickr.com/4070/4489718226_6d0b3d1bd5_z.jpg"
                  alt="User profile"
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-2 sm:mr-4"
                />
              </div>
              <div>
                <h4 className="text-[#F5F1E1] font-semibold text-base sm:text-lg">
                  Ali Khan
                </h4>
                <span className="text-[#F5F1E1] text-sm sm:text-base">
                  Musician
                </span>
              </div>
            </div>
          </div>

          {/* Feedback Card 3 */}
          <div className="bg-[#111827] shadow-lg rounded-lg p-6 flex flex-col">
            <p className="text-[#F5F1E1] text-base sm:text-lg flex-grow">
              "Innovative performing arts programs have truly enriched my
              understanding of theater and culture. Highly recommend it!"
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                  alt="User profile"
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-2 sm:mr-4"
                />
              </div>
              <div>
                <h4 className="text-[#F5F1E1] font-semibold text-base sm:text-lg">
                  Ayesha Naeem
                </h4>
                <span className="text-[#F5F1E1] text-sm sm:text-base">
                  Theater Enthusiast
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;