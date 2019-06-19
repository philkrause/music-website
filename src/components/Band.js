import React from 'react'
import Header from './Header'

export default function Band(props) {
  return (
    <>
      <Header />
      <div className='band-container'>
        <img src={props.img} />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </>
  )
}
