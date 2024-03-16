import React from 'react'
import Button from '../Button/Button.jsx'
import './style.css'

export default function ThirdSection() {
  return (
    <div className='ThirdSection'>
      <div className='GeneralInfo'>
        <h3>Menu</h3>
        <p className='DescriptionMenu'>We change our menu every season. <br /> Here is what we are currently dishing up.</p>

        <Button value='Food Menu'/>
        <Button value='Drinks Menu'/>
        <Button value='Takeaway Menu'/>

      </div>
      <div className='Menu'>
        <h2>Latte Cafe</h2>

      </div>
    </div>
  )
}
