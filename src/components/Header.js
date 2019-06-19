import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {

  const title = {
    display: 'flex',
    justifyContent: 'space-around',
    height: '6rem',
    backGroundColor: 'black',
    width: '100vw',
    fontSize: '2rem'
  }

  return (
    <>
      <div className='title'>
        <h1>The Music Gallery</h1>
      </div>
      <div style={title}>
        <Link to={{
          pathname: '/tameimpala'
        }}><p>Tame Impala</p>
        </Link>

        <Link to={{
          pathname: '/broncho'
        }}><p>Broncho</p>
        </Link>

        <Link to={{
          pathname: '/tomsstory'
        }}><p>Toms Story</p>
        </Link>

      </div>
    </>
  )
}

