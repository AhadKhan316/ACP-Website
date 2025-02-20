import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import About from './components/About';
import PresidentMessage from './components/PresidentMessage';
import StayUpdated from './components/StayUpdated';
import Academy from './components/Academy';
import CommunityFeedback from './components/CommunityFeedback';
import Production from './components/Production';
import OurSocial from './components/OurSocial';

// Pages
import AcademiesPage from './Pages/AcademyPage';
import VenuesPage from './Pages/VenuePage';
import AboutUs from './Pages/AboutUs'
import GoverningBody from './Pages/GoverningBody';
import TeamMembers from './Pages/TeamMember';


const App = () => {
  return (
    <Router>
      <div className='bg-red-500 text-white mx-auto'>Hello Tailwind CSS</div> {/* Changed h1 to div */}
      <Navbar />
      <Routes>
        {/* Pages Path */}
        <Route path="/AcademiesPage" element={<AcademiesPage />} />
        <Route path="/VenuesPage" element={<VenuesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/GoverningBody" element={<GoverningBody />} />
        <Route path="/TeamMembers" element={<TeamMembers />} />

        {/* Components - Wrap these in a Route with a path */}
        <Route path="/" element={
          <>
            <Hero />
            {/* <Cards /> */}
            <UpcomingEvents />
            <About />
            <PresidentMessage />
            <StayUpdated />
            <Academy />
            <CommunityFeedback />
            <Production />
            <OurSocial />
          </>
        } />
      </Routes>
      <Footer /> {/* Moved Footer inside the Router, but outside Routes */ }
    </Router >
  );
};

export default App;