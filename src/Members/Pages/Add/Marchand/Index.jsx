import React, { useState } from 'react'
import Button from '../../../../Components/Buttons/Button';
import Marchand from './Marchand';
import Parrainage from './Parrainage'
import Offre from './Offre';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


function Index() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        url: '',
        content: '',
        picture: '',
        categorie: '',
        urlConditions: '',
        p_offre: '',
        f_offre: '',
        foncParrainage: '',
        f_devise: '',
        f_remise: '',
        f_mini: '',
        f_content: '',
        p_devise: '',
        p_remise: '',
        p_mini: '',
        p_content: '',

    })

    const [errors, setErrors] = useState({
        name: '',
        slug: '',
        url: '',
        content: '',
        picture: '',
        categorie: '',
        urlConditions: '',
        offre: '',
        foncParrainage: '',
        f_devise: '',
        f_remise: '',
        f_mini: '',
        f_content: '',
        p_devise: '',
        p_remise: '',
        p_mini: '',
        p_content: '',
        

    })

    const FormTitles = ['Marchand', 'Parrainage', 'Offre'];

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <Marchand formData={formData} setFormData={setFormData} errors={errors} />
            break;
            case 1:
                return <Parrainage formData={formData} setFormData={setFormData} errors={errors} />
            break;
            case 2:
                return <Offre formData={formData} setFormData={setFormData} errors={errors} />
            break;
        }
    }

       const classFinish = 'bg-red-800 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2 relative'
       const classEnCours = 'h-3 w-3 bg-red-800 rounded-full'
       const classNotYet = 'bg-white border-4 h-6 w-6 rounded-full'


function handleClickPage(goTo) {
    goTo == 'prev' ? setPage(page -1) : setPage(page +1)
    window.scrollTo({top:200, left:0, behavior:'smooth'})
}

  return (
    <div>


        <div className="h-full w-full py-16">

            <div className="container mx-auto">
                <dh-component>
                    <div className="w-11/12 mx-auto">

                        {page == 0 &&
                        <div className="bg-gray-200 h-1 flex items-center justify-between">

                            <div className='flex justify-between bg-red-800 h-1 items-center relative'>
                                <div className="bg-white h-8 w-8 border-2 rounded-full shadow flex items-center justify-center relative">
                                    <div className="h-4 w-4 bg-red-800 rounded-full">
                                    </div>

                                    <div className="absolute">
                                        <div className="relative bg-red-800 shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                                            <svg className="absolute top-0 -mt-2 w-full right-0 -left-6" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#991B1B">
                                                        <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                            <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p tabIndex="0" className="focus:outline-none text-slate-50 text-xs font-bold">Marchand</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                                
                                <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center relative">
                                    <div className='bg-white border-4 h-6 w-6 rounded-full'></div>

                                    <div className="absolute right-0">
                                        <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-6">
                                            <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                        <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                            <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p tabIndex="0" className="focus:outline-none text-red-800 text-xs font-bold">Parrainage</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                            <div className="flex justify-end relative ">
                                <div className='bg-white border-4 h-6 w-6 rounded-full'></div>

                                <div className="absolute right-0 -mr-2">
                                    <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-8">
                                    <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                        <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p tabIndex="0" className="focus:outline-none text-red-800 text-xs font-bold">Offre</p>
                                    </div>
                                </div>
                            </div>
                        </div>}

                        


{page == 1 &&
                        <div className="bg-gray-200 h-1 flex items-center justify-between">

                        <div className='flex justify-between bg-red-800 h-1 items-center relative w-1/2'>
                            <div className="bg-white h-8 w-8 rounded-full shadow-md flex items-center justify-center relative">

                                <div className="bg-red-800 h-8 w-8 rounded-full shadow flex items-center justify-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="3" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" /></svg>
                                </div>

                                <div className="absolute">
                                    <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                                        <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                        <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p tabIndex="0" className="focus:outline-none text-red-800 text-xs font-bold">Marchand</p>
                                    </div>
                                </div>
                            </div>
                        
                            
                            <div className="bg-white h-8 w-8 border-2 rounded-full shadow flex items-center justify-center relative -mr-4">
                                    <div className="h-4 w-4 bg-red-800 rounded-full "></div>

                                <div className="absolute right-0">
                                    <div className="relative bg-red-800 shadow-lg px-2 py-1 rounded mt-16 -mr-6">
                                        <svg className="absolute top-0 -mt-2 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#991B1B">
                                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                        <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p tabIndex="0" className="focus:outline-none text-slate-50 text-xs font-bold">Parrainage</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="flex justify-end relative ">
                            <div className='bg-white border-4 h-6 w-6 rounded-full'></div>

                            <div className="absolute right-0 -mr-2">
                                <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-8">
                                <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                    <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <p tabIndex="0" className="focus:outline-none text-red-800 text-xs font-bold">Offre</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        }



{page == 2 &&
                        <div className="bg-gray-200 h-1 flex items-center justify-between">

                        <div className='flex justify-between bg-red-800 h-1 items-center relative w-full'>
                            <div className="bg-white h-8 w-8 rounded-full shadow-md flex items-center justify-center relative">

                                <div className="bg-red-800 h-8 w-8 rounded-full shadow flex items-center justify-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="3" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" /></svg>
                                </div>

                                <div className="absolute">
                                    <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                                        <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                        <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p tabIndex="0" className="focus:outline-none text-red-800 text-xs font-bold">Marchand</p>
                                    </div>
                                </div>
                            </div>
                        
                            
                            <div className="bg-white h-8 w-8 rounded-full shadow-md flex items-center justify-center relative">
                                <div className="bg-red-800 h-8 w-8 rounded-full shadow flex items-center justify-center relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="3" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" /></svg>
                                </div>



                                <div className="absolute right-0 ">
                                    <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-6">
                                        <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                        <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p tabIndex="0" className="focus:outline-none text-red-800 text-xs font-bold">Parrainage</p>
                                    </div>
                                </div>
                                
                            </div>
                       
                        
                            <div className="bg-white h-8 w-8 rounded-full shadow flex items-center justify-center relative">
                                    <div className="h-4 w-4 bg-red-800 rounded-full"></div>

                                <div className="absolute right-0">
                                    <div className="relative bg-red-800  shadow-lg px-2 py-1 rounded mt-16">
                                        <svg className="absolute top-0 -mt-2 w-full right-0 left-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#991B1B">
                                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                        <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p tabIndex="0" className="focus:outline-none text-slate-50 text-xs font-bold">Offre</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                        }
                        
                    </div>
                </dh-component>
            </div>
        </div>

            {PageDisplay()}

        <div className='flex justify-between mb-4 bg-slate-100 p-4'>

            <Button title='Précedent' icon={<FaAngleLeft />} disabled={page == 0} click={() => {
                handleClickPage('prev')
            }}/>
            <Button title='Suivant' icon={<FaAngleRight />} disabled={page == FormTitles.length -1} click={() => {
                handleClickPage('suiv') }}/>
                

        </div>

    </div>
  )
}

export default Index