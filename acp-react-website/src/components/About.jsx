
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-900">
      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 py-4 rounded-lg shadow-xl overflow-hidden">
          <div className="px-4 sm:p-10 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-amber-100 font-bold text-center mb-4 sm:mb-6">
              About
            </h2>
            <p className="text-amber-100 text-center mx-auto leading-relaxed text-base sm:text-lg md:text-xl lg:max-w-3xl">
              Arts Council supports cultural activities while educating youth in the field of arts.
              It strives to promote literature, fine arts, and performing arts in Pakistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
