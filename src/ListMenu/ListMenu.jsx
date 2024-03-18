import React from 'react'
import Button from "../Button/Button.jsx";

export default function ListMenu({type, names}) {
  return (
    <div className='ListMenu'>
      <h6>{type}</h6>
      {names.map(per => {
        return (
          <div key={per.id}>
            <b>{per.name}</b>
            <p>{per.structure}</p>
            <p>{per.price}</p>
          </div>
        )
      })}
    </div>
  )
}
