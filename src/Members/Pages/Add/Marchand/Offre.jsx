import React, { useState } from 'react'
import Button from '../../../../Components/Buttons/Button'
import BigRedButton from '../../../../Components/Buttons/BigRedButton'
import InputText from '../../../../Components/Forms/InputText'
import InputSelect from '../../../../Components/Forms/InputSelect'
import InputTextarea from '../../../../Components/Forms/InputTextarea'

import { MdOutlineDiscount, MdOutlineLocalShipping } from 'react-icons/md'
import { ImSpinner9, ImTree, ImTextHeight, ImGift } from 'react-icons/im'
import { BsShopWindow, BsLink45Deg, BsCurrencyExchange, BsPersonWorkspace } from 'react-icons/bs'
import { FaUserGraduate, FaBaby } from 'react-icons/fa'

const Offre = ({formData, setFormData, errors}) => {

    const [devise, setDevise] = useState([{value : 'Devise'}, {value : '€'}, {value : '%'}, { value : '$'}, {value : 'minutes'}, { value : 'mois'}, { value : 'jours'}, { value : 'points'}])
    const [showRemise, setShowRemise] = useState()

    function OffreProposee(offre, show) {
        setShowRemise(show)
        setFormData({...formData, offre:offre})

    }


  return (
    <div className="text-left">
      <div className="w-full flex">
        <div
            className="w-1/3 h-auto bg-gray-100 hidden md:block bg-cover rounded-l-lg"
            /* style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')*/ 
        >

      </div>

      <div className="md:w-2/3 w-full bg-white pr-5 pl-5 pb-5 rounded-lg lg:rounded-l-none">

      <h1 className="text-xl font-semibold mb-10 border-b-4 border-slate-200">Ajouter un Marchand - Offre</h1>
        {/* BOUTONS CODE & LIENS ET INVITATION */}
        <div className='flex items-center flex-wrap mb-4 '>
          <p className='text-sm  text-slate-600 w-full'>Offre proposée : </p>
            <Button title='Remise' icon={<MdOutlineDiscount />}  oclass={`w-full md:w-auto md:mb-0 mb-2 ${formData.offre == 'remise' && 'enabled:text-red-600'}`} click={() => OffreProposee('remise', true)} />
            <Button title='Frais de port gratuit' icon={<MdOutlineLocalShipping />}  oclass={`w-full md:w-auto md:mb-0 mb-2 ${formData.offre == 'fdp' && 'enabled:text-red-600'}`} click={() =>OffreProposee('fdp', false)}/>
            <Button title='Cadeau offert' icon={<ImGift />} oclass={`w-full md:w-auto md:mb-0 mb-2 ${formData.offre == 'cadeau' && 'enabled:text-red-600'}`} click={() => OffreProposee('cadeau', false)}/>
          </div>

            {/* HIDED INPUT */}
            {showRemise && 
              <>
                
                <div className='flex items-center text-sm flex-wrap mb-4'>
                <p className='text-sm  text-slate-600 w-full grow flex '>Montant de la remise : </p>
                  <InputText name='montantRemise' state={formData.montantRemise} placeholder='5' error={errors.montantRemise} classDiv='w-32' icone={<BsCurrencyExchange />} onChange={e =>  setFormData({...formData, montantRemise:e})} />
                  <InputSelect name='devise' state={formData.devise} data={devise} error={errors.devise} oclass='pl-1' onChange={e => setFormData({...formData, devise:e})}/>
                  <span>à partir de</span>
                  <InputText name='montantMinimum' state={formData.montantMinimum} placeholder='60' error={errors.montantMinimum} classDiv='ml-2 w-32' icone={<BsCurrencyExchange />} onChange={e =>  setFormData({...formData, montantMinimum:e})}/>
                  € d'achats
                </div>
              </>
              }          
            <InputTextarea name='offreParrain' state={formData.offreParrain} label='Offre du parrain' placeholder='5€ par filleul inscrit' oclass='h-18 mb-4' error={errors.offreParrain} icone={<FaUserGraduate />} onChange={e => setFormData({...formData, offreParrain:e})}/>
            <InputTextarea name='offreFilleul' state={formData.offreFilleul} label='Offre du filleul' placeholder="3€ de réduction dès 15€ d'achats" oclass='h-18' error={errors.offreFilleul} icone={<FaBaby />} onChange={e => setFormData({...formData, offreFilleul:e})}/>
            
            <BigRedButton oclass='mt-8' />
            </div>
        </div>
    </div>
  )
}

export default Offre