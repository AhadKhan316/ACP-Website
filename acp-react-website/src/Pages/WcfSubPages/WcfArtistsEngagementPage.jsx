import WcfReusableSlider from '../WcfReusableSlider';

const WcfArtistEngagement = () => {
  // Sample slide data for Artist Engagement page
  const slides = [
    {
      images: [
        { src: 'https://via.placeholder.com/600x400?text=Artist+1', alt: 'Artist 1' },
        { src: 'https://via.placeholder.com/600x400?text=Artist+2', alt: 'Artist 2' },
      ],
      caption: 'LOCAL ARTISTS COLLABORATING ON A MURAL PROJECT IN KARACHI.',
    },
    {
      images: [
        { src: 'https://via.placeholder.com/600x400?text=Artist+3', alt: 'Artist 3' },
        { src: 'https://via.placeholder.com/600x400?text=Artist+4', alt: 'Artist 4' },
      ],
      caption: 'INTERNATIONAL ARTISTS SHARING THEIR WORK AT A GALLERY EVENT.',
    },
    {
      images: [
        { src: 'https://via.placeholder.com/600x400?text=Artist+5', alt: 'Artist 5' },
      ],
      caption: 'AN ARTIST CONDUCTING A LIVE PAINTING SESSION AT THE FESTIVAL.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">


      {/* Main Content */}
      <main className="flex-1 py-6 md:py-10 px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">ARTIST ENGAGEMENT</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-10 max-w-3xl mx-auto">
          THE WORLD CULTURE FESTIVAL-KARACHI BRINGS ARTISTS TOGETHER TO INSPIRE, COLLABORATE, AND CREATE MEANINGFUL CONNECTIONS.
        </p>

        {/* Swiper Slider Section */}
        <section className="mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">ARTIST COLLABORATIONS</h2>
          <WcfReusableSlider slides={slides} />
        </section>
      </main>

    </div>
  );
};

export default WcfArtistEngagement;