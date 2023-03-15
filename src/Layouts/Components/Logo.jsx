import React from 'react'
import logopng from '../../Images/logo.png'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='justify-items-center'>
        <Link to='/'>
          <img src={logopng} alt="Promo-parrain.com" />
        </Link>
    </div>

  )
}

export default Logo