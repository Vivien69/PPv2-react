import React, { useEffect, useState } from 'react'
import InputText from '../../../../Components/Forms/InputText'
import InputSelect from '../../../../Components/Forms/InputSelect'
import { ImSpinner9, ImTree, ImTextHeight, ImGift } from 'react-icons/im'
import { MdOutlineDiscount, MdOutlineLocalShipping } from 'react-icons/md'
import { BsShopWindow, BsLink45Deg, BsCurrencyExchange, BsPersonWorkspace } from 'react-icons/bs'
import { FaUserGraduate, FaBaby } from 'react-icons/fa'

import http from '../../../../Services/Api'
import InputTextarea from '../../../../Components/Forms/InputTextarea'

const Parrainage = ({formData, setFormData, errors}) => {


  return (
    <div className="text-left">
      <div className="w-full flex">
        <div
            className="w-1/3 h-auto bg-gray-100 hidden md:block bg-cover rounded-l-lg"
            /* style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')*/ 
        >

      </div>

      <div className="md:w-2/3 w-full bg-white pr-5 pl-5 pb-5 rounded-lg lg:rounded-l-none">

      <h1 className="text-xl font-semibold mb-10 border-b-4 border-slate-200">Ajouter un Marchand - Parrainage</h1>

          <InputText name='urlConditions' oclass='mb-4' state={formData.urlConditions} label='Conditions du parrainage' placeholder='https://www.' error={errors.urlConditions} icone={<BsLink45Deg />} onChange={e =>  setFormData({...formData, url:e})}/>
          <InputTextarea name='foncParrainage' oclass='h-32' state={formData.foncParrainage} label='Fonctionnement du parrainage' placeholder="Démarches du filleul pour s'inscrire et bénéficier de la prime de parrainage" error={errors.foncParrainage} icone={<BsPersonWorkspace />} onChange={e =>  setFormData({...formData, foncParrainage:e})} />
          
          
      </div>
    </div>
  </div>
  )
}

export default Parrainage