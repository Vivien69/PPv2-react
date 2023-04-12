import React, { useState } from 'react'
import Button from '../../../../Components/Buttons/Button';
import Marchand from './Marchand';
import Parrainage from './Parrainage'
import Offre from './Offre';
import { GiShop } from 'react-icons/gi'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { BsPersonWorkspace, BsCurrencyExchange }  from 'react-icons/bs'

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
    const rondBlanc = 'bg-white h-8 w-8 border-2 rounded-full shadow flex items-center justify-center relative'
    const pointRouge = 'h-4 w-4 bg-red-800 rounded-full'
    const colorRouge = '#991B1B'
    const bgRouge = 'bg-red-800'
    const rondBlancInactif = 'bg-white h-6 w-6 rounded-full shadow flex items-center justify-center relative'
    const cercleGrisInactif = 'bg-white border-4 h-6 w-6 rounded-full'
    goTo == 'prev' ? setPage(page -1) : setPage(page +1)
    window.scrollTo({top:200, left:0, behavior:'smooth'})
}

  return (
    <div>
        <ol className="flex items-center justify-center w-full mb-4 sm:mb-5 p-2">
            <li className={`flex w-full items-center  after:content-[''] after:h-1 after:w-full translate-x-0 after:border-b ${page == 1 || page == 2 ? ' after:transition after:duration-700 after:border-red-100' : 'after:transition after:duration-1000 after:border-slate-200'} after:border-4 after:inline-block `}>
                <div className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-800 rounded-full lg:h-12 lg:w-12  shrink-0">
                    <GiShop className='lg:text-xl text-lg' />
                </div>
            </li>
            <li className={`flex w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b ${ page == 2 ? 'after:transition after:duration-700 after:border-red-100  ' : 'after:transition after:duration-1000 after:border-slate-200'} after:border-4 after:inline-block `}>
                <div className={`flex items-center justify-center w-10 h-10 ${page == 1 || page == 2 ? ' transition duration-1000 bg-red-100 text-red-800' : 'bg-slate-200 text-slate-600 transition duration-700'} rounded-full lg:h-12 lg:w-12 shrink-0`}>
                    <BsPersonWorkspace className='lg:text-xl text-lg '/>
                </div>
            </li>
            <li className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 ${page == 2 ? 'transition duration-1000 bg-red-100 text-red-800' : 'bg-slate-200 text-slate-600 transition duration-700'} rounded-full lg:h-12 lg:w-12  shrink-0`}>
                    <BsCurrencyExchange className='lg:text-xl text-lg ' />
                </div>
            </li>
        </ol>


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