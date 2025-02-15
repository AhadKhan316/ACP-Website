import React from "react";

const Feedback = () => {
  return (
    <section id="user-feedback" className="py-10 bg-[#111827]">
      <div className="mx-15 py-6 px-8 text-center  bg-[#1F2937] rounded-lg" >
        <h2 className="text-3xl font-bold mb-8 text-[#F5F1E1]">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feedback Card 1 */}
          <div className="bg-[#111827] shadow-lg rounded-lg p-6">
            <p className="text-[#F5F1E1] italic text-lg">
              "The workshops offered by the Arts Council are amazing! I discovered my hidden talents and met inspiring people."
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="https://t3.ftcdn.net/jpg/02/81/81/86/360_F_281818663_XXRCNuGktKeZsnknqWkKI0rR4JPWui3H.jpg"
                alt="User profile"
                className="rounded-full w-20 h-20 mr-4"
              />
              <div>
                <h4 className="text-[#F5F1E1] font-semibold text-lg">Sarah Ahmed</h4>
                <span className="text-[#F5F1E1] text-lg me-16">Artist</span>
              </div>
            </div>
          </div>

          {/* Feedback Card 2 */}
          <div className="bg-[#111827] shadow-lg rounded-lg p-6">
            <p className="text-[#F5F1E1] text-lg">
              "Dynamic music festivals were an incredible experience. The Arts Council has truly created a cultural hub for everyone."
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="https://live.staticflickr.com/4070/4489718226_6d0b3d1bd5_z.jpg"
                alt="User profile"
                className="rounded-full w-20 h-20 mr-4"
              />
              <div>
                <h4 className="text-[#F5F1E1] font-semibold text-lg">Ali Khan</h4>
                <span className="text-[#F5F1E1] text-lg">Musician</span>
              </div>
            </div>
          </div>

          {/* Feedback Card 3 */}
          <div className="bg-[#111827] shadow-lg rounded-lg p-6">
            <p className="text-[#F5F1E1] text-lg">
              "Innovative performing arts programs have truly enriched my understanding of theater and culture. Highly recommend it!"
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                alt="User profile"
                className="rounded-full w-20 h-20 mr-4"
              />
              <div>
                <h4 className="text-[#F5F1E1] font-semibold text-lg me-5">Ayesha Naeem</h4>
                <span className="text-[#F5F1E1] text-lg">Theater Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Feedback;
