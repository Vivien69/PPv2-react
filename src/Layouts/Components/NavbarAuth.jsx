import { Popover, Transition, Tab } from '@headlessui/react'
import { HiChevronDown, HiChevronUp, HiMenu, HiMail, HiOutlineBell } from 'react-icons/hi'
import { Fragment } from 'react'

export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'scale-105 bg-slate-600 text-red-700' : 'text-opacity-90'}
                group inline-flex items-center hover:bg-slate-600 hover:text-red-700 hover:duration-300 rounded-md bg-slate-700 hover:scale-105 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none`}
            >
              <span>Membre</span>
              {open ? (
                <HiChevronUp
                className={`${open ? 'text-red-700' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-slate-100 ease-in-out group-hover:text-red-700`}
                aria-hidden="true"
              />

              ) : (
                <HiChevronDown
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-slate-100 ease-in-out group-hover:text-red-700 group-hover:animate-bounce group-hover:duration-700`}
                aria-hidden="true"
              />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

              <Popover.Panel className=" absolute -left-4 z-10 mt-2 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-1">
                  <div className="shadow-lg mb-5 flex sm:flex-col bg-white py-1 rounded">
                    <Tab.Group>
                      <Tab.List className='flex flex-wrap w-full'>
                      <div className='bg-slate-100 rounded pt-0.5 p-1.5 w-full flex flex-wrap  border-white-light'>
                      <Tab as={Fragment}>
                          {({ selected }) => (
                              <div className="flex-auto !outline-none">
                                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : ''} text-slate-900 hover:text-slate-600 rounded w-full hover:bg-slate-200 flex justify-center p-3.5 py-1.5 `}>
                                      <HiMenu className='text-2xl'/>
                                  </button>
                              </div>
                          )}
                      </Tab>
                      <Tab as={Fragment}>
                          {({ selected }) => (
                              <div className="flex-auto !outline-none">
                                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : ''} text-slate-900 hover:text-slate-600 rounded w-full hover:bg-slate-200 flex justify-center p-3.5 py-1.5 `}>
                                      <HiOutlineBell className='text-2xl'/>
                                  </button>
                              </div>
                          )}
                      </Tab>
                      <Tab as={Fragment}>
                          {({ selected }) => (
                              <div className="flex-auto !outline-none">
                                  <button className={`${selected ? 'bg-red-800 bg-opacity-40 outline-none ' : ''} text-slate-900 hover:text-slate-600 rounded w-full hover:bg-slate-200 flex justify-center p-3.5 py-1.5 `}>
                                      <HiMail className='text-2xl'/>
                                  </button>
                              </div>
                          )}
                      </Tab>
                      </div>
                      </Tab.List>
                      <Tab.Panels className='p-2 text-gray-900'>
                        <Tab.Panel>Content 1</Tab.Panel>
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
