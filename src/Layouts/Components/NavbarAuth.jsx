import { Popover, Transition, Tab } from '@headlessui/react'
import { HiChevronDown, HiChevronUp, HiMenu, HiMail, HiOutlineBell } from 'react-icons/hi'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import http from '../../Services/Api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Members/Auth/Session/useAuth'

export default function Navbar({user}) {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const userLogout = () => {
    logout()
    
  }

  const links = [
    { href: `/profil/${user.name}`, label: 'Profil' },
    { href: '/support', label: 'Annonces' },
    { href: '/license', label: 'Parrainages' },
  ]


  return (
    <div className="w-full max-w-sm">
      <Popover className="relative">
        {({ open, close }) => (
          
          <>
            <Popover.Button className={`${open ? 'scale-105 bg-slate-600 text-red-700' : 'text-opacity-90'} group inline-flex items-center hover:bg-slate-600 hover:text-red-700 hover:duration-300 rounded-md bg-slate-700 hover:scale-105 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none`}>
              <span>Membre</span>
              
              {open ? (
                <HiChevronUp className={`${open ? 'text-red-700' : 'text-opacity-70'} ml-2 h-5 w-5 text-slate-100 ease-in-out group-hover:text-red-700`} aria-hidden="true"/>
              ) : (
                <HiChevronDown className={`${open ? '' : 'text-opacity-70'} ml-2 h-5 w-5 text-slate-100 ease-in-out group-hover:text-red-700 group-hover:animate-bounce group-hover:duration-700`} aria-hidden="true" />
              )}
            </Popover.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">

              <Popover.Panel static className=" absolute -left-4 z-10 mt-2 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-1">
                  <div className="shadow-lg mb-5 flex sm:flex-col bg-white py-1 rounded">
                    <Tab.Group>
                      <Tab.List className='flex flex-wrap w-full'>
                      <div className='bg-slate-100 rounded pt-0.5 p-1.5 w-full flex flex-wrap  border-white-light'>
                      <Tab as={Fragment}>
                          {({ selected }) => (
                              <div className="flex-auto !outline-none">
                                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : 'hover:bg-slate-200 hover:text-slate-900'} text-slate-700 rounded w-full flex justify-center p-3.5 py-1.5 `}>
                                      <HiMenu className='text-2xl'/>
                                  </button>
                              </div>
                          )}
                      </Tab>
                      <Tab as={Fragment}>
                          {({ selected }) => (
                              <div className="flex-auto !outline-none">
                                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : 'hover:bg-slate-200 hover:text-slate-900'} text-slate-700 rounded w-full flex justify-center p-3.5 py-1.5 `}>
                                      <HiOutlineBell className='text-2xl'/>
                                  </button>
                              </div>
                          )}
                      </Tab>
                      <Tab as={Fragment}>
                          {({ selected }) => (
                              <div className="flex-auto !outline-none">
                                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : 'hover:bg-slate-200 hover:text-slate-900'} text-slate-700 rounded w-full flex justify-center p-3.5 py-1.5 `}>
                                      <HiMail className='text-2xl'/>
                                  </button>
                              </div>
                          )}
                      </Tab>
                      </div>
                      </Tab.List>
                      <Tab.Panels className='flex mt-3 w-full text-slate-700'>
                        <Tab.Panel className='w-full'>
                        <ul>
                          {links.map((link) => (
                            /* Use the `active` state to conditionally style the active item. */
                            <li key={link.href}>
                              <Link onClick={  close } className='border-b border-slate-300 w-full flex bg-slate-200 px-3 py-1.5 hover:bg-slate-300' 
                              to={link.href}>{link.label}</Link>
                            </li>
                          ))}
                          <li>
                              <button onClick={ () => {
                                userLogout();
                                close(); } } className='border-b border-slate-300 w-full flex bg-slate-200 px-3 py-1.5 hover:bg-slate-300'>Déconnexion</button>
                            </li>
                          </ul>

                        
                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
