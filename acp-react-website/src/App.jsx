import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import UpcomingEvents from './components/UpcomingEvents'
import About from './components/About'

const App = () => {
  return (
    <div>
      <>
        <h1 className='container bg-red-500 text-white mx-auto'>Hello Tailwind CSS</h1>
        <Navbar />
        <Hero />
        <UpcomingEvents />
        <About />
        <Footer />
      </>
    </div>
  )
}

export default App
