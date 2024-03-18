import React from 'react'
import './style.css'
import inst from '../../public/inst.png'
import tg from '../../public/telegram.png'
import fb from '../../public/facebook.png'

import SecondSection from '../SecondSection/SecondSection'

export default function Header() {

  return (
    <header>
      <div className='nav'>
        <button onClick={() => window.scrollBy({let: 0, top: 800, behavior: 'smooth'})}>About</button>
        <button onClick={() => window.scrollBy({let: 0, top: 1500, behavior: 'smooth'})}>Menu</button>
        <button onClick={() => window.scrollBy({let: 0, top: 2700, behavior: 'smooth'})}>Booking</button>
        <button onClick={() => window.scrollBy({let: 0, top: 3850, behavior: 'smooth'})}>Info</button>
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
