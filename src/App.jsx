import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'
import ThirdSection from './ThirdSection/ThirdSection'
import FourthSection from './FourthSection/FourthSection'
import FifthSection from './FifthSection/FifthSection'
import SixthSection from './SixthSection/SixthSection'
import Footer from './Footer/Footer'
// import { menu } from './data'

export default function App() {

  return (
    <>
      <Header />

      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <FourthSection />
      <FifthSection />
      <SixthSection />

      <Footer />
    </>
  )
}

