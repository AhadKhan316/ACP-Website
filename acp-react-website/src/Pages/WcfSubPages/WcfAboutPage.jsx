// src/components/AboutPage.jsx
import React from 'react';

function WcfAboutPage() {
  return (
    <div className="bg-gray-50"> {/* Overall background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/your-video-id?autoplay=0&mute=0&rel=0" // Replace!
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <img src="/path/to/your/festival-logo.png" alt="Festival Logo" className="mx-auto h-48" />
          <h1 className="text-4xl md:text-6xl font-bold mt-8">WHERE CULTURE COMES ALIVE!</h1>
          <p className="text-lg md:text-xl mt-4">35+ Countries - 250+ Artists - 100+ Performances</p>
          <p className="text-lg md:text-xl">THEATRE - MUSIC - DANCE - FINEARTS</p>
          <p className="text-xl md:text-2xl font-bold mt-4">26<sup>TH</sup> SEP TO 30<sup>TH</sup> OCT AT ARTS COUNCIL KARACHI</p>
          <button className="mt-8 bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full">
            Watch on <span className='font-bold text-red-600'>YouTube</span>
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Arts Council of Pakistan, Karachi</h2>
          <p className="text-lg text-center">
            Since our inception in 1954, the Arts Council of Pakistan has been dedicated to various forms of art. ACP is currently the finest non-profit organization in the country for the promotion of Fine and Performing Arts. We host more than 500 events annually and train local talent in our Fine and Performing Arts academies.
          </p>
          <br />
          <p className='text-lg text-center'>
            The Council facilitates art and artists from all segments of the society. The team, led by our President Ahmed Shah (SI), aims to promote peace and artistic professionalism. We work with the collective goal of shining a bright spotlight on Pakistan through our art, and culture. This is done through various literary conferences, artistic endeavors, cultural events, and competitive talent showcases.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">World Culture Festival Karachi</h2>
          <p className="text-lg text-center">
            Experience a world without borders at the World Culture Festival - Karachi, the grandest global artistic gathering ever hosted in Pakistan. The event, a significant step in the Council's efforts of cultural diplomacy, is set to bring together over 250 artists from over 35 countries, across all continents to showcase the best talent in music, theatre, dance, and fine arts in a manner never seen before.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WcfAboutPage;