import React, { Fragment }  from 'react'
import useAuthContext from '../Context/AuthContext'
import { Tab } from '@headlessui/react';
import { HiMenu, HiMail, HiOutlineBell } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Menu from './Admin/Components/Menu'

function Dashboard() {

  const { user } =  useAuthContext();

  return (
  <div className='px-4'>
        {user.role == 'ADMIN' && <Menu />}
    <p>Bienvenue {user.name}</p>


    <Tab.Group>
      <Tab.List className='flex flex-wrap w-full'>
      <div className='bg-slate-100 rounded mt-3 p-2 w-full flex flex-wrap border-b border-white-light'>
      <Tab as={Fragment}>
          {({ selected }) => (
              <div className="flex-auto !outline-none">
                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : ''} text-gray-900 rounded w-full hover:bg-slate-200 border border-transparent flex justify-center p-3.5 py-1.5 `}>
                      <HiMenu className='text-2xl'/>
                  </button>
              </div>
          )}
      </Tab>
      <Tab as={Fragment}>
          {({ selected }) => (
              <div className="flex-auto !outline-none">
                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : ''} text-gray-900 rounded w-full hover:bg-slate-200 border border-transparent flex justify-center p-3.5 py-1.5 `}>
                      <HiOutlineBell className='text-2xl'/>
                  </button>
              </div>
          )}
      </Tab>
      <Tab as={Fragment}>
          {({ selected }) => (
              <div className="flex-auto !outline-none">
                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : ''} text-gray-900 rounded w-full hover:bg-slate-200 border border-transparent flex justify-center p-3.5 py-1.5 `}>
                      <HiMail className='text-2xl'/>
                  </button>
              </div>
          )}
      </Tab>
      </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  </div>
  )
}

export default Dashboard