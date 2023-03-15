import React from 'react'
import {FaAngleDown, FaAngleUp, FaUserGraduate, FaUserTie } from 'react-icons/fa'

function AsideVisited() {
  return (
    <section className='w-2/6'>
      <aside className='mb-3 p-1 lg:p-2 bg-gray-100 rounded hidden md:block'>
          <header>
            <button className='flex items-center text-sm py-1 px-3  rounded mb-2'>Offres boostés <FaAngleDown className='ml-2'/></button>
          </header>

          <div className=''>

            <div className='flex'>
              <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
              
              <div className='lg:p-1 lg:grid lg:grid-cols-2 justify-around flex flex-col items-center grow text-sm'>

                <div className='bg-gray-50 rounded mb-1 lg:mb-0 flex lg:block'>
                  <div className='lg:bg-gray-100 lg:border-2 justify-center p-1 xl:p-2 flex font-semibold '><FaUserGraduate className='text-rose-600 text-lg mr-1' />
                    <span className='hidden lg:block'>Parrain</span>
                  </div>
                    <div className='flex justify-center items-center'>
                      <span className='block px-1 font-semibold'>5€ -</span>
                      <span className=' line-through px-1'> 3€</span>
                    </div>
                </div>

                <div className='bg-gray-50 rounded flex lg:block'>
                <div className='lg:bg-gray-100 lg:border-2 justify-center p-1 xl:p-2 lg:rounded flex font-semibold '><FaUserTie className='text-cyan-500 text-lg mr-1' />
                  <span className='hidden lg:block'>Filleul</span>
                </div>
                    <div className='flex justify-center items-center'>
                      <span className='block px-1 font-semibold'>5€</span>
                      <span className='line-through px-1 '> 3€</span>
                    </div>
                </div>

              </div>
            </div>
           
            <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
            <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
            <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
          </div>
        
          <footer></footer>
        </aside>


        <aside className='mb-3 p-1 lg:p-2 bg-gray-100 rounded '>
          <header>
            <button className='flex items-center text-sm py-1 px-3  rounded mb-2'>Les + vus <FaAngleDown className='ml-2'/></button>
          </header>

          <div className=''>

            <div className='flex'>
              <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
              
              <div className='p-2 flex flex-col justify-around'>

                <div className='flex justify-around items-center font-semibold text-sm'>
                  <FaUserGraduate className='text-rose-600 text-lg mr-1' /> Parrain
                  <span className='block p-1 font-semibold'>5€</span>
                  <span className='text-sm line-through p-1'>3€</span>
                </div>

                <div className='flex justify-around items-center font-semibold text-sm'>
                  <FaUserTie className='text-cyan-500 text-lg mr-1' /> Filleul
                  <span className='block p-1 font-semibold'>5€</span>
                  <span className='block text-sm line-through p-1'>3€</span>
                </div>

              </div>
            </div>
           
            <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
            <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
            <div className='border-2 bg-white w-28 h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-auto bg-center bg-no-repeat rounded-md box-border m-1 '></div>
          </div>
        
          <footer></footer>
        </aside>

    </section>
  )
}

export default AsideVisited