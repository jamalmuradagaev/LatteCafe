import React, { forwardRef, useRef } from 'react'
import './style.css'
import inst from '../../public/inst.png'
import tg from '../../public/telegram.png'
import fb from '../../public/facebook.png'

const Header = ({secondComponent, thirdComponent, fourthComponent, sixthComponent}) => {

  // const ComponentRef = useRef(ref)
  
  return (
    <header>
      <div className='nav'>
        <button onClick={() => secondComponent.current.scrollIntoView({behavior: 'smooth'})}>About</button>
        <button onClick={() => thirdComponent.current.scrollIntoView({behavior: 'smooth'})}>Menu</button>
        <button onClick={() => fourthComponent.current.scrollIntoView({behavior: 'smooth'})}>Booking</button>
        <button onClick={() => sixthComponent.current.scrollIntoView({behavior: 'smooth'})}>Info</button>
      </div>

      <h1>Latte Cafe</h1>

      <div>
        <p><img src={inst} alt="" /></p>
        <p><img src={tg} alt="" /></p>
        <p><img src={fb} alt="" /></p>
      </div>
    </header>
  )
}


export default Header