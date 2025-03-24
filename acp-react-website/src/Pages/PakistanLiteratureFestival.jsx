import React from "react";
import { Routes, Route } from "react-router-dom";

import PlfNavbar from "../components/plfSubComponents/PlfNavbar";
import HeroSection from "../components/plfSubComponents/PlfHero";
import VideoSection from "../components/plfSubComponents/PlfVideo";
import AboutSection from "../components/plfSubComponents/PlfAbout";
import SessionsSection from "../components/plfReusableComponents/PlfSession";
import PlfSpeakerCard from "../components/plfReusableComponents/plfSpeaker";
import NewsletterSection from "../components/plfSubComponents/PlfNewsletter";
import FooterSection from "../components/plfSubComponents/PlfFooter";

// Delegates Images 201 by 251
import johnDoeImg from "/src/assets/plf-assets/delegate2.jpeg"; 

const PlfMainPage = () => {
  const sessions = [
    { time: "9:00 AM", event: "Opening Ceremony", day: "25th Feb" },
    { time: "11:00 AM", event: "Poetry Recitation", day: "25th Feb" },
    { time: "2:00 PM", event: "Panel Discussion", day: "25th Feb" },
    { time: "10:00 AM", event: "Literary Talks", day: "26th Feb" },
    { time: "1:00 PM", event: "Cultural Performance", day: "26th Feb" },
  ];

  const speakers = [
    {
      name: "John Doe",
      role: "Author",
      bio: "Renowned Author & Poet",
      image: johnDoeImg 
    },
    {
      name: "Jane Smith",
      role: "Critic",
      bio: "Literary Critic",
      image: "../src/assets/plf-assets/delegate1.jpeg" 
    },
    {
      name: "Ali Khan",
      role: "Historian",
      bio: "Cultural Historian",
      image: "../src/assets/plf-assets/delegate1.jpeg"
    },
  ];

  return (
    <>
      <PlfNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <VideoSection />
              <AboutSection />
              <SessionsSection sessions={sessions} title="Previous Chapter" />
              <PlfSpeakerCard speakers={speakers} title="Delegates" />
              <NewsletterSection />
            </>
          }
        />
      </Routes>
      <FooterSection />
    </>
  );
};

export default PlfMainPage;


















// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import PlfNavbar from "../components/plfSubComponents/PlfNavbar";
// import HeroSection from "../components/plfSubComponents/PlfHero";
// import VideoSection from "../components/plfSubComponents/PlfVideo";
// import AboutSection from "../components/plfSubComponents/PlfAbout";
// import SessionsSection from "../components/plfReusableComponents/PlfSession";
// import DelegatesSection from "../components/plfReusableComponents/PlfSpeakerCard";
// // import PoetsSection from "../components/plfSubComponents/PlfPoet";
// // import EntertainmentSection from "../components/plfSubComponents/PlfEntertainment";
// // import ArtistsSection from "../components/plfSubComponents/PlfArtists";
// // import JournalistsSection from "../components/plfSubComponents/PlfJournalist";
// // import SponsorsSection from "../components/plfReusableComponents/PlfSponsors";
// import NewsletterSection from "../components/plfSubComponents/PlfNewsletter";
// import FooterSection from "../components/plfSubComponents/PlfFooter";

// // Subpages
// // import PlfAboutPage from "./PlfSubPages/PlfAboutPage";
// // import PlfSpeakersPage from "./PlfSubPages/PlfSpeakersPage";
// // import PlfSessionsPage from "./PlfSubPages/PlfSessionsPage";
// // import PlfPoetsPage from "./PlfSubPages/PlfPoetsPage";
// // import PlfEntertainmentPage from "./PlfSubPages/PlfEntertainmentPage";
// // import PlfArtistsPage from "./PlfSubPages/PlfArtistsPage";
// // import PlfJournalistsPage from "./PlfSubPages/PlfJournalistsPage";
// // import PlfSponsorsPage from "./PlfSubPages/PlfSponsorsPage";
// // import PlfContactPage from "./PlfSubPages/PlfContactPage";

// const PlfMainPage = () => {
//   const sessions = [
//     { time: "9:00 AM", event: "Opening Ceremony", day: "25th Feb" },
//     { time: "11:00 AM", event: "Poetry Recitation", day: "25th Feb" },
//     { time: "2:00 PM", event: "Panel Discussion", day: "25th Feb" },
//     { time: "10:00 AM", event: "Literary Talks", day: "26th Feb" },
//     { time: "1:00 PM", event: "Cultural Performance", day: "26th Feb" },
//   ];

//   const speakers = [
//     {
//       image: "https://example.com/speaker1.jpg",
//       name: "John Doe",
//       bio: "Renowned Author & Poet",
//     },
//     {
//       image: "https://example.com/speaker2.jpg",
//       name: "Jane Smith",
//       bio: "Literary Critic",
//     },
//     {
//       image: "https://example.com/speaker3.jpg",
//       name: "Ali Khan",
//       bio: "Cultural Historian",
//     },
//     // Add more speakers as needed
//   ];

//   // const sponsors = [
//   //   { name: "Sponsor 1", image: "https://via.placeholder.com/150" },
//   //   { name: "Sponsor 2", image: "https://via.placeholder.com/150" },
//   //   { name: "Sponsor 3", image: "https://via.placeholder.com/150" },
//   //   { name: "Sponsor 4", image: "https://via.placeholder.com/150" },
//   // ];

//   return (
//     <>
//       <PlfNavbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <VideoSection />
//               <AboutSection />
//               <SessionsSection sessions={sessions} title="Previous Chapter" />
//               <DelegatesSection speakers={speakers} title="Delegates" />
//               {/* <PoetsSection /> */}
//               {/* <EntertainmentSection /> */}
//               {/* <ArtistsSection /> */}
//               {/* <JournalistsSection /> */}
//               {/* <SponsorsSection sponsors={sponsors} /> */}
//               <NewsletterSection />
//             </>
//           }
//         />
//         {/* <Route path="about" element={<PlfAboutPage />} />
//         <Route path="speakers" element={<PlfSpeakersPage />} />
//         <Route path="sessions" element={<PlfSessionsPage />} />
//         <Route path="poets" element={<PlfPoetsPage />} />
//         <Route path="entertainment" element={<PlfEntertainmentPage />} />
//         <Route path="artists" element={<PlfArtistsPage />} />
//         <Route path="journalists" element={<PlfJournalistsPage />} />
//         <Route path="sponsors" element={<PlfSponsorsPage />} />
//         <Route path="contact" element={<PlfContactPage />} /> */}
//       </Routes>
//       <FooterSection />
//     </>
//   );
// };

// export default PlfMainPage;