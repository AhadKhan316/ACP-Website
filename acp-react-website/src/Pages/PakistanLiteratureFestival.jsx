import React from "react";
import { Routes, Route } from "react-router-dom";

import PlfNavbar from "../components/plfSubComponents/PlfNavbar";
import HeroSection from "../components/plfSubComponents/PlfHero";
import VideoSection from "../components/plfSubComponents/PlfVideo";
import AboutSection from "../components/plfSubComponents/PlfAbout";
import SessionsSection from "../components/plfReusableComponents/PlfSession";
import SpeakersSection from "../components/plfReusableComponents/PlfSpeakers";
import PoetsSection from "../components/plfSubComponents/PlfPoet";
import EntertainmentSection from "../components/plfSubComponents/PlfEntertainment";
import ArtistsSection from "../components/plfSubComponents/PlfArtists";
import JournalistsSection from "../components/plfSubComponents/PlfJournalist";
import SponsorsSection from "../components/plfReusableComponents/PlfSponsors";
import NewsletterSection from "../components/plfSubComponents/PlfNewsletter";
import FooterSection from "../components/plfSubComponents/PlfFooter";

// Subpages
// import PlfAboutPage from "./PlfSubPages/PlfAboutPage";
// import PlfSpeakersPage from "./PlfSubPages/PlfSpeakersPage";
// import PlfSessionsPage from "./PlfSubPages/PlfSessionsPage";
// import PlfPoetsPage from "./PlfSubPages/PlfPoetsPage";
// import PlfEntertainmentPage from "./PlfSubPages/PlfEntertainmentPage";
// import PlfArtistsPage from "./PlfSubPages/PlfArtistsPage";
// import PlfJournalistsPage from "./PlfSubPages/PlfJournalistsPage";
// import PlfSponsorsPage from "./PlfSubPages/PlfSponsorsPage";
// import PlfContactPage from "./PlfSubPages/PlfContactPage";

const PlfMainPage = () => {
  const sessions = [
    { time: "9:00 AM", event: "Opening Ceremony", day: "25th Feb" },
    { time: "11:00 AM", event: "Poetry Recitation", day: "25th Feb" },
    { time: "2:00 PM", event: "Panel Discussion", day: "25th Feb" },
    { time: "10:00 AM", event: "Literary Talks", day: "26th Feb" },
    { time: "1:00 PM", event: "Cultural Performance", day: "26th Feb" },
  ];

  const speakers = [
    { name: "Ghazi Salahuddin", image: "https://via.placeholder.com/300" },
    { name: "Mushahid Syed", image: "https://via.placeholder.com/300" },
    { name: "Waheeda Mahesar", image: "https://via.placeholder.com/300" },
  ];

  const sponsors = [
    { name: "Sponsor 1", image: "https://via.placeholder.com/150" },
    { name: "Sponsor 2", image: "https://via.placeholder.com/150" },
    { name: "Sponsor 3", image: "https://via.placeholder.com/150" },
    { name: "Sponsor 4", image: "https://via.placeholder.com/150" },
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
              <SessionsSection sessions={sessions} title="Event Schedule" />
              <SpeakersSection speakers={speakers} title="Speakers" />
              <PoetsSection />
              <EntertainmentSection />
              <ArtistsSection />
              <JournalistsSection />
              <SponsorsSection sponsors={sponsors} />
              <NewsletterSection />
            </>
          }
        />
        {/* <Route path="about" element={<PlfAboutPage />} />
        <Route path="speakers" element={<PlfSpeakersPage />} />
        <Route path="sessions" element={<PlfSessionsPage />} />
        <Route path="poets" element={<PlfPoetsPage />} />
        <Route path="entertainment" element={<PlfEntertainmentPage />} />
        <Route path="artists" element={<PlfArtistsPage />} />
        <Route path="journalists" element={<PlfJournalistsPage />} />
        <Route path="sponsors" element={<PlfSponsorsPage />} />
        <Route path="contact" element={<PlfContactPage />} /> */}
      </Routes>
      <FooterSection />
    </>
  );
};

export default PlfMainPage;