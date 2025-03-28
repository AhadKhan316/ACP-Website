import React from "react";
import AucNavbar from "../components/aucSubComponents/aucNavbar";
import AucHero from "../components/aucSubComponents/aucHero";
import AucAbout from "../components/aucSubComponents/aucAbout";
import AucPromoVideo from "../components/aucSubComponents/aucPromoVideo";
import AucDelegates from "../components/aucSubComponents/aucCard";
import AucHighlightedSessions from "../components/aucSubComponents/aucHighlitedSessions";
import AucNewsletter from "../components/aucSubComponents/aucNewsletter";
import AucFooter from "../components/aucSubComponents/aucFooter";

function AalmiUrduConference() {
  return (
    <div>
      <AucNavbar />
      <AucHero />
      <AucAbout />
      <AucPromoVideo />
      <AucDelegates />
      <AucHighlightedSessions />
      <AucNewsletter />
      <AucFooter />
    </div>
  );
}

export default AalmiUrduConference;