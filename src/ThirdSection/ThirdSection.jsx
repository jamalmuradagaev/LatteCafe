import React, { useState } from 'react'
import Button from '../Button/Button.jsx'
import './style.css'
import ListMenu from '../ListMenu/ListMenu.jsx'
import { menu } from '../data.js'

export default function ThirdSection() {
  // const [content, useContent] = useState()

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

        <div>
          <ListMenu type={menu[0][0].type} names={menu[0][0].names}/>
          <ListMenu type={menu[0][1].type} names={menu[0][1].names}/>

          {/* <ListMenu type={menu[1][0].type} names={menu[1][0].names}/>
          <ListMenu type={menu[1][1].type} names={menu[1][1].names}/> */}

          
        </div>

      </div>
    </div>
  )
}
