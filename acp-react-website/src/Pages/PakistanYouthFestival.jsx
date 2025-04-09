import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PyfNavbar from '../components/pyfSubComponents/pyfNavbar'
import PyfHero from '../components/pyfSubComponents/pyfHero'
import PyfAbout from '../components/pyfSubComponents/pyfAbout'
import PyfVideo from '../components/pyfSubComponents/pyfVideo'
import PyfDelegateCard from '../components/pyfSubComponents/pyfDelegateCard'
import PyfProgram from '../components/pyfSubComponents/pyfProgram'
import PyfNewsletter from '../components/pyfSubComponents/pyfNewsletter'
import PyfSponsors from '../components/pyfSubComponents/pyfSponsors'
import PyfFooter from '../components/pyfSubComponents/pyfFooter'


const speakers = [
  { name: "Afaq Adnan", image: "/src/assets/pyf-assets/pyf-delegate1.jpg" },
  { name: "Ali Azmat", image: "/src/assets/pyf-assets/pyf-delegate2.jpg" },
  { name: "Asim Azhar", image: "/src/assets/pyf-assets/pyf-delegate3.jpg" },
  { name: "Arman Rahim", image: "/src/assets/pyf-assets/pyf-delegate4.jpg" },
  { name: "Kashmir Band", image: "/src/assets/pyf-assets/pyf-delegate5.jpg" },
  { name: "Natasha Baig", image: "/src/assets/pyf-assets/pyf-delegate6.jpg" },
];

function PakistanYouthFestival() {
  return (
    <>
      <PyfNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <PyfHero />
            <PyfAbout />
            <PyfVideo />
            <PyfDelegateCard speakers={speakers} title="Our Delegates" />
            <PyfProgram />
            <PyfNewsletter />
            <PyfSponsors />
          </>
        } />
        {/* <Route path="about" element={<WcfAboutPage />} /> */}
        {/* <Route path="performances" element={<WcfPerformances />} /> */}
        {/* <Route path="workshops" element={<WcfWorkshops />} /> */}
        {/* <Route path="communityBuilding" element={<WcfCommunityBuilding />} /> */}
        {/* <Route path="artist" element={<WcfArtists />} /> */}
        {/* <Route path="artistEngagement" element={<WcfArtistsEngagement />} /> */}
        {/* <Route path="mediaCoverage" element={<WcfMediaCoverage />} /> */}
        {/* <Route path="contactUs" element={<WcfContactUs />} /> */}
      </Routes>
      <PyfFooter />

    </>
  )
}

export default PakistanYouthFestival
