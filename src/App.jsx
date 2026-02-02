import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EventInfo from './components/EventInfo'
import Timeline from './components/Timeline'
import Eligibility from './components/Eligibility'
import Prizes from './components/Prizes'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <EventInfo />
      <Timeline />
      <Eligibility />
      <Prizes />
      <Register />
      <Footer />
    </div>
  )
}

export default App
