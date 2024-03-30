import { useState, useRef } from 'react'
import './App.css'
import Header from './Header/Header.jsx'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'
import ThirdSection from './ThirdSection/ThirdSection'
import FourthSection from './FourthSection/FourthSection'
import FifthSection from './FifthSection/FifthSection'
import SixthSection from './SixthSection/SixthSection'
import Footer from './Footer/Footer'
// import { menu } from './data'

export default function App() {
  const secondTargetComponentRef = useRef(null)
  const thirdTargetComponentRef = useRef(null)
  const fourthTargetComponentRef = useRef(null)
  const sixthTargetComponentRef = useRef(null)

  return (
    <>
      <Header 
        secondComponent={secondTargetComponentRef} 
        thirdComponent={thirdTargetComponentRef} 
        fourthComponent={fourthTargetComponentRef} 
        sixthComponent={sixthTargetComponentRef}
      />

      <FirstSection />
      <SecondSection ref={secondTargetComponentRef}/>
      <ThirdSection ref={thirdTargetComponentRef}/>
      <FourthSection ref={fourthTargetComponentRef}/>
      <FifthSection />
      <SixthSection ref={sixthTargetComponentRef}/>

      <Footer />
    </>
  )
}

