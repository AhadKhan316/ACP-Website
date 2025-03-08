import React from 'react';
import Card from '../WcfReusableCard'; // Import the reusable Card component

const WcfArtists = () => {
  const artists = [
    {
      id: 1,
      name: 'Aashir Wajahat',
      image: '/placeholder-artist1.jpg', 
      country: 'Pakistan',
    },
    {
      id: 2,
      name: 'Abdul Hannan',
      image: '/placeholder-artist2.jpg',
      country: 'Pakistan',
    },
    {
      id: 3,
      name: 'Abdur Rahman Sajid',
      image: '/placeholder-artist3.jpg',
      country: 'Pakistan',
    },
    {
      id: 4,
      name: 'Acma The Band',
      image: '/placeholder-artist4.jpg',
      country: 'Pakistan',
    },
    {
      id: 5,
      name: 'Adnan Butt',
      image: '/placeholder-artist5.jpg',
      country: 'Pakistan',
    },
    {
      id: 6,
      name: 'Akhtar Chanal Zahri',
      image: '/placeholder-artist6.jpg',
      country: 'Pakistan',
    },
    {
      id: 7,
      name: 'Alex Liu',
      image: '/placeholder-artist7.jpg',
      country: 'Spain',
    },
    {
      id: 8,
      name: 'Ali Mohammad Roonjho & Sattar Jogi',
      image: '/placeholder-artist8.jpg',
      country: 'Pakistan',
    },
    {
      id: 9,
      name: 'Bashir Khan',
      image: '/placeholder-artist9.jpg',
      country: 'Pakistan',
    },
    {
      id: 10,
      name: 'Bayaan',
      image: '/placeholder-artist10.jpg',
      country: 'Pakistan',
    },
    {
      id: 11,
      name: 'Bhawani Karki',
      image: '/placeholder-artist11.jpg',
      country: 'Nepal',
    },
    {
      id: 12,
      name: 'Chris Kelly',
      image: '/placeholder-artist12.jpg',
      country: 'Spain',
    },
    {
      id: 13,
      name: 'Cosmic Fluid',
      image: '/placeholder-artist13.jpg',
      country: 'Pakistan',
    },
    {
      id: 14,
      name: 'Daniele Fabio',
      image: '/placeholder-artist14.jpg',
      country: 'Italy',
    },
    {
      id: 15,
      name: 'Daryl Giullano',
      image: '/placeholder-artist15.jpg',
      country: 'Canada',
    },
    {
      id: 16,
      name: 'Delah Dube',
      image: '/placeholder-artist16.jpg',
      country: 'Rwanda',
    },
    {
      id: 17,
      name: 'Dominike',
      image: '/placeholder-artist17.jpg',
      country: 'UK',
    },
    {
      id: 18,
      name: 'Erica Lauren',
      image: '/placeholder-artist18.jpg',
      country: 'Spain',
    },
    {
      id: 19,
      name: 'Faraz Anwar',
      image: '/placeholder-artist19.jpg',
      country: 'Pakistan',
    },
    {
      id: 20,
      name: 'Gasasira Rugamba Serge',
      image: '/placeholder-artist20.jpg',
      country: 'Rwanda',
    },
    {
      id: 21,
      name: 'Gizri',
      image: '/placeholder-artist21.jpg',
      country: 'Pakistan',
    },
    {
      id: 22,
      name: 'Hamza Akram',
      image: '/placeholder-artist22.jpg',
      country: 'Pakistan',
    },
    {
      id: 23,
      name: 'Hanna Dibella',
      image: '/placeholder-artist23.jpg',
      country: 'Spain',
    },
    {
      id: 24,
      name: 'Imran Momina',
      image: '/placeholder-artist24.jpg',
      country: 'Pakistan',
    },
    {
      id: 25,
      name: 'Jambroz',
      image: '/placeholder-artist25.jpg',
      country: 'Pakistan',
    },
    {
      id: 26,
      name: 'Jazz Art',
      image: '/placeholder-artist26.jpg',
      country: 'South Africa',
    },
    {
      id: 27,
      name: 'Jihadi Urbansong',
      image: '/placeholder-artist27.jpg',
      country: 'Rwanda',
    },
    {
      id: 28,
      name: 'Kamaliya',
      image: '/placeholder-artist28.jpg',
      country: 'Ukraine',
    },
    {
      id: 29,
      name: 'Kamran Karimov',
      image: '/placeholder-artist29.jpg',
      country: 'Azerbaijan',
    },
    {
      id: 30,
      title: 'Khumariyaan',
      image: '/placeholder-artist30.jpg',
      country: 'Pakistan',
    },
    {
      id: 31,
      title: 'Lee Dia',
      image: '/placeholder-artist31.jpg',
      country: 'Rwanda',
    },
    {
      id: 32,
      title: 'Luise Volkmann',
      image: '/placeholder-artist32.jpg',
      country: 'Germany',
    },
    {
      id: 33,
      title: 'Maanu',
      image: '/placeholder-artist33.jpg',
      country: 'Pakistan',
    },
    {
      id: 34,
      title: 'Madan Gopal',
      image: '/placeholder-artist34.jpg',
      country: 'Nepal',
    },
    {
      id: 35,
      title: 'Mai Dhai',
      image: '/placeholder-artist35.jpg',
      country: 'Pakistan',
    },
    {
      id: 36,
      title: 'Max Andrzejewski',
      image: '/placeholder-artist36.jpg',
      country: 'Germany',
    },
    {
      id: 37,
      title: 'Muneeb Khan',
      image: '/placeholder-artist37.jpg',
      country: 'Pakistan',
    },
    {
      id: 38,
      title: 'Mustafa Baloch',
      image: '/placeholder-artist38.jpg',
      country: 'Pakistan',
    },
    {
      id: 39,
      title: 'Nafees Ahmed Khan',
      image: '/placeholder-artist39.jpg',
      country: 'Pakistan',
    },
    {
      id: 40,
      title: 'Natalia Gul',
      image: '/placeholder-artist40.jpg',
      country: 'Pakistan',
    },
    {
      id: 41,
      title: 'Natasha Baig',
      image: '/placeholder-artist41.jpg',
      country: 'Pakistan',
    },
    {
      id: 42,
      title: 'Noman Al Sheikh',
      image: '/placeholder-artist42.jpg',
      country: 'Pakistan',
    },
    {
      id: 43,
      title: 'Paul Jarret',
      image: '/placeholder-artist43.jpg',
      country: 'Germany',
    },
    {
      id: 44,
      title: 'Peace Joils',
      image: '/placeholder-artist44.jpg',
      country: 'Rwanda',
    },
    {
      id: 45,
      title: 'Sahib Pashazade',
      image: '/placeholder-artist45.jpg',
      country: 'Azerbaijan',
    },
    {
      id: 46,
      title: 'Samra Khan',
      image: '/placeholder-artist46.jpg',
      country: 'Pakistan',
    },
    {
      id: 47,
      title: 'Sarah Dillamore',
      image: '/placeholder-artist47.jpg',
      country: 'Spain',
    },
    {
      id: 48,
      title: 'Schumaila Hussain',
      image: '/placeholder-artist48.jpg',
      country: 'Pakistan',
    },
    {
      id: 49,
      title: 'Shahzeb Ali',
      image: '/placeholder-artist49.jpg',
      country: 'Pakistan',
    },
    {
      id: 50,
      title: 'Sikandar & Raina',
      image: '/placeholder-artist50.jpg',
      country: 'Pakistan',
    },
    {
      id: 51,
      title: 'Sounds of Kolachi',
      image: '/placeholder-artist51.jpg',
      country: 'Pakistan',
    },
    {
      id: 52,
      title: 'Street Dancers',
      image: '/placeholder-artist52.jpg',
      country: 'Congo',
    },
    {
      id: 53,
      title: 'Sultan Baloch',
      image: '/placeholder-artist53.jpg',
      country: 'Pakistan',
    },
    {
      id: 54,
      title: 'Veronica',
      image: '/placeholder-artist54.jpg',
      country: 'Belarus',
    },
    {
      id: 55,
      title: 'Wahab Bugti',
      image: '/placeholder-artist55.jpg',
      country: 'Pakistan',
    },
    // Add more artists here
  ];

  return (
    <div className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Artists</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              image={artist.image}
              title={artist.name}
              date={artist.date} // This will be undefined, and that's OK
              time={artist.time} // This will be undefined, and that's OK
              artist={artist.country} // Pass country as artist prop
            // No buttonType prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WcfArtists;