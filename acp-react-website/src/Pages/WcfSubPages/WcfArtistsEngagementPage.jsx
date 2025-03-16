import React from "react";
import EngagementCarousel from "../../components/wcfReusableComponents/WcfArtistEngagementCarousel"; // Adjust the import path as needed

const WcfArtistEngagement = () => {
  // Data for Artist Collaborations section
  const collaborationSlides = [
    {
      image: { src: '/src/assets/wcf-assets/artist-engagement1.png', alt: 'Artist 1' },
      caption: 'LOCAL ARTISTS COLLABORATING ON A MURAL PROJECT IN KARACHI.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
    {
      image: { src: 'https://via.placeholder.com/2048x1366?text=Artist+2', alt: 'Artist 2' },
      caption: 'INTERNATIONAL ARTISTS SHARING THEIR WORK AT A GALLERY EVENT.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
    {
      image: { src: 'https://via.placeholder.com/2048x1366?text=Artist+3', alt: 'Artist 3' },
      caption: 'AN ARTIST CONDUCTING A LIVE PAINTING SESSION AT THE FESTIVAL.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
    {
      image: { src: 'https://via.placeholder.com/2048x1366?text=Artist+3', alt: 'Artist 3' },
      caption: 'AN ARTIST CONDUCTING A LIVE PAINTING SESSION AT THE FESTIVAL.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
  ];

  // Data for Artist Workshops section (example)
  const workshopSlides = [
    {
      image: { src: '/src/assets/wcf-assets/artist-engagement1.png', alt: 'Workshop 1' },
      caption: 'WORKSHOP ON TRADITIONAL PAINTING TECHNIQUES IN KARACHI.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
    {
      image: { src: 'https://via.placeholder.com/2048x1366?text=Workshop+2', alt: 'Workshop 2' },
      caption: 'INTERACTIVE SESSION ON MODERN SCULPTURE AT THE FESTIVAL.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
    {
      image: { src: 'https://via.placeholder.com/2048x1366?text=Workshop+3', alt: 'Workshop 3' },
      caption: 'ARTISTS TEACHING DIGITAL ART TO YOUNG STUDENTS.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
    {
      image: { src: 'https://via.placeholder.com/2048x1366?text=Workshop+3', alt: 'Workshop 3' },
      caption: 'ARTISTS TEACHING DIGITAL ART TO YOUNG STUDENTS.',
      link: '#', // Placeholder link, replace with actual link or modal trigger
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Main Content */}
      <main className="flex-1 py-6 md:py-10 px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">
          ARTIST ENGAGEMENT
        </h1>
        <p className="text-center text-white mb-6 md:mb-10 max-w-3xl mx-auto">
          THE WORLD CULTURE FESTIVAL-KARACHI BRINGS ARTISTS TOGETHER TO INSPIRE, COLLABORATE, AND CREATE MEANINGFUL CONNECTIONS.
        </p>

        {/* Artist Collaborations Section */}
        <EngagementCarousel
          slides={collaborationSlides}
          title="ARTIST COLLABORATIONS"
          sectionClassName="mb-6 md:mb-10"
          cardClassName="max-w-sm mx-auto"
          titleClassName="text-xl md:text-2xl text-white"
          imageAspectRatio="4/3" // Updated for 2048x1366 images
          maxImageHeight="400px" // Adjust as needed
        />

        {/* Artist Workshops Section */}
        <EngagementCarousel
          slides={workshopSlides}
          title="ARTIST WORKSHOPS"
          sectionClassName="mb-6 md:mb-10"
          cardClassName="max-w-sm mx-auto"
          titleClassName="text-xl md:text-2xl text-white"
          imageAspectRatio="4/3" // Updated for 2048x1366 images
          maxImageHeight="400px" // Adjust as needed
        />
      </main>
    </div>
  );
};

export default WcfArtistEngagement;