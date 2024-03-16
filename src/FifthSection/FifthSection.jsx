import React from 'react'
import './style.css'
import bar from '../../public/bar.png'
import view from '../../public/view.png'
import salat from '../../public/salat.png'

export default function FifthSection() {
  return (
    <div className='FifthSection'>

        {/* <div> */}
            <div className='cont1'>
                <div>
                    <img src={bar} alt="" />
                </div>
                <div>
                    <img src={salat} alt="" />
                </div>
            </div>
            <div className='cont2'>
                <div>
                    <img src={view} alt="" />
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}
