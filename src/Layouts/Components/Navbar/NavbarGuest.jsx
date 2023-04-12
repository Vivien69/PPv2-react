import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoPeople } from 'react-icons/io5';

function NavbarGuest() {
    const location = useLocation();

  return (
    <Link to='/login' state={{ background: location }}><button className='flex items-center bg-slate-700 rounded-3xl lg:rounded p-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-800 hover:bg-slate-600 hover:duration-300 hover:scale-105 '>
              <IoPeople className='text-2xl lg:mr-2' />
              <span className='hidden lg:block'>Connexion</span>
          </button>
    </Link>
  )
}

export default NavbarGuest