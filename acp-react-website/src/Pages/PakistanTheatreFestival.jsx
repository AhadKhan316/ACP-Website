import React from "react";
import { Route, Routes } from "react-router-dom";

import PtfNavbar from "../components/ptfSubComponents/ptfNavbar";
import PtfHero from "../components/ptfSubComponents/ptfHero";
import PtfAbout from "../components/ptfSubComponents/ptfAbout";
import PtfInternationalPlayers from "../components/ptfSubComponents/ptfPlays";
import PtfPrimeShowsCard from "../components/ptfSubComponents/ptfPerformingShows";


function AalmiUrduConference() {
  return (
    <>
      <PtfNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <PtfHero />
            <PtfAbout />
            <PtfInternationalPlayers />
            <PtfPrimeShowsCard />
            {/* <AucHighlightedSessions /> */}
            {/* <AucNewsletter /> */}
            {/* <AucSponsors /> */}
          </>
        } />

        {/* <Route path="about" element={<AucAboutPage />} /> */}
        {/* <Route path="delegate" element={<AucDelegatePage />} /> */}
        {/* <Route path="contactUs" element={<AucContactPage />} /> */}

      </Routes>
      {/* <AucFooter /> */}
    </>
  );
}

export default AalmiUrduConference;