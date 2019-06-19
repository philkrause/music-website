import React from 'react'

export default function Band(props) {
  return (
    <>
      <div className='band-container'>
        <img src={props.img} />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </>
  )
}
