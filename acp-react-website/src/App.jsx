import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import UpcomingEvents from './components/UpcomingEvents'
import About from './components/About'
import PresidentMessage from './components/PresidentMessage'
import StayUpdated from './components/StayUpdated'

const App = () => {
  return (
    <div>
      <>
        <h1 className='container bg-red-500 text-white mx-auto'>Hello Tailwind CSS</h1>
        <Navbar />
        <Hero />
        <UpcomingEvents />
        <About />
        <PresidentMessage />
        <StayUpdated />
        <Footer />
      </>
    </div>
  )
}

export default App
