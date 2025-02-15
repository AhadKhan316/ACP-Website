import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <>
        <h1 className='container bg-red-500 text-white mx-auto'>Hello Tailwind CSS</h1>
        <Navbar />
        <Hero/>
        <Footer />
      </>
    </div>
  )
}

export default App
