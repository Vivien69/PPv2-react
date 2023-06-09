import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import { FaPlusCircle, FaBars} from 'react-icons/fa';
import { IoRocketOutline, IoPeople, IoPlaySharp, IoFolderOpenOutline } from 'react-icons/io5'

import NavbarGuest from './NavbarGuest';
import NavbarAuth from './NavbarAuth';

import Search from '../Search';
import { Link, useLocation } from 'react-router-dom';
import '../../../assets/index.css'
import { useAuthContext } from '../../../Members/Auth/Session/AuthContext';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { token } = useAuthContext()


  

  return (

    <nav className='px-1 py-2 lg:px-4 lg:py-4 bg-gray-800 text-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center mr-1'>
          <Logo />
        </div>
        

        {/* Navbar text */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <a href="" className="flex items-center p-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-700 hover:duration-300 ">
              <li className="flex px-2 items-center">
                <span className='pr-1'><IoPlaySharp /></span>
                Derniers
              </li>
            </a>
            
            <a href="" className="flex items-center p-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-700 hover:duration-300">
              <li className="flex px-2 items-center">
                <span className='pr-1 md:pr-2'><IoRocketOutline /></span>
                Boostés
                </li>
            </a>
            <Link to='/dashboard' href="" className="flex items-center p-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-700 hover:duration-300">
              <li className="flex px-2 items-center">
              <span className='pr-1 md:pr-2'><IoFolderOpenOutline /></span>Dashboard
              </li>
            </Link>
        
          </ul>

        </div>

       <Search classDiv='static'/>


        {/* Navbar right : User + ADD + */}
        <div className="hidden md:flex">
          { token ? (
            <NavbarAuth/>
          ) : (
            <NavbarGuest />
          )}

          <Link to='/parrainage/ajouter' className='flex items-center bg-slate-700 rounded-3xl lg:rounded p-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-700 hover:bg-slate-600 hover:duration-300 hover:scale-105 mx-2 lg:mx-0 lg:ml-2'>
              <FaPlusCircle className='text-2xl lg:mr-2'/>
              <span className='hidden lg:block'>Ajouter</span>
          </Link>
        </div>
      

      {/* Menu Hidden for mobile */}
      <div className='md:hidden flex top-4 right-6'>
        <Link to='/login' state={{ background: location }} ><button className='flex items-center bg-slate-700 rounded-3xl lg:rounded p-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-800 hover:bg-slate-600 hover:duration-300 hover:scale-105 '>
              <IoPeople className='text-2xl lg:mr-2' />
              <span className='hidden lg:block'>Connexion</span>
          </button>
          </Link>

        <button onClick={() => setShowMenu(!showMenu)} aria-label='navigation' type='button'  className='bg-slate-700 rounded-3xl p-2 text-2xl md:hidden text-gray-200 transition duration-400 focus:outline-none focus:text-white hover:text-red-800 ml-2 mr-1'>
            <FaBars />
            </button>
        </div>

      </div>
        

      {/*Mobile Menu */}
      <div id="mobileMenu" className={showMenu ? "flex w-full mx-auto py-8 text-center" : 'hidden w-full mx-auto py-8 text-center'}>
        <div className="flex flex-col justify-center items-center w-full">
          <a href="#" className="block text-gray-200 cursor-pointer py-2 transition duration-300 focus:outline-none focus:text-red-700 focus:underline hover:underline hover:text-red-700">Derniers</a>
          <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-2 transition duration-300 focus:outline-none focus:text-red-700 focus:underline hover:underline hover:text-red-700">Boostés</a>
          <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-2 transition duration-300 focus:outline-none focus:text-red-700 focus:underline hover:underline hover:text-red-700">Annonces</a>
          <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-2 transition duration-300 focus:outline-none focus:text-red-700 focus:underline hover:underline hover:text-red-700">Contact</a>
        </div>
      </div>

    </nav>

  )
}

export default Navbar