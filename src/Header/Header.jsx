import React from 'react'
import './style.css'
import inst from '../../public/inst.png'
import tg from '../../public/telegram.png'
import fb from '../../public/facebook.png'

export default function Header() {
  return (
    <header>
      <div className='pages'>
        <p><a href="" onClick={(e) => e.preventDefault()}>About</a></p>
        <p><a href="" onClick={(e) => e.preventDefault()}>Menu</a></p>
        <p><a href="" onClick={(e) => e.preventDefault()}>Info</a></p>
        <p><a href="" onClick={(e) => e.preventDefault()}>Booking</a></p>
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
