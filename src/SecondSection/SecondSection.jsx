import React from 'react'
import './style.css'
import { forwardRef } from 'react'

const SecondSection = forwardRef((props, ref) => {

  return (
    <div className='SecondSection' ref={ref}>
      <h3>About Us</h3>
      <p>Tucked away in the corner of Wellington, <i>Latte Cafe</i> is a local neighbourhood cafe and bar. Latte is all about doing what we love, in a city that we love. We keep stocked with local produce and pastries. Bring your family for a bite, or meet your friends for a coffee or warm drink.</p>
    </div>
  )
})

export default SecondSection
