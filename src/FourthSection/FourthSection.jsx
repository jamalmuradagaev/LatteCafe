import React, { forwardRef } from 'react'
import './style.css'

const FourthSection = forwardRef((props, ref) => {
  return (
    <div className='FourthSection' ref={ref}>
      <div>
        <h3>Location</h3>
        <p>101 Cuba St, <br />Te Aro, Wellington</p>
      </div>

      <div>
        <h3>Hours</h3>
        <p>Tuesday to Friday <br />7AM - 3PM</p>
        <p>Saturday to Sunday <br />8AM - 3PM</p>
      </div>

      <div>
        <h3>Mondays?</h3>
        <p>We are closed on Mondays <br /> to reflect and refuel</p>
      </div>
    </div>
  )
})

export default FourthSection
