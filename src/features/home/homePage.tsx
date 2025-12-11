import React from 'react'
import HomeHero from './components/HomeHero'
import About from './components/About'
import AboutSegnature from './components/AboutSegnature'
import AboutUs from './components/AboutUs'
import Destinations from './components/Destinations'
import AboutCustomarsays from './components/AboutCustomarsays'
import ContactUs from './components/ContactUs'

const Homepage = () => {
  return (
    <div>
      <HomeHero/>
      <About/>
      <AboutSegnature/>
      <AboutUs/>
      <Destinations/>
      <AboutCustomarsays/>
      <ContactUs/>
    </div>
  )
}

export default Homepage
