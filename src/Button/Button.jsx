import React from 'react'
import './style.css'

export default function Button({...props}) {
  return (
    <button className='Button'>
      <p>{props.value}</p>
    </button>
  )
}
