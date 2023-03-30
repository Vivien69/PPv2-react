import React, { useState } from 'react'
import Button from '../../../../Components/Buttons/Button'
import BigRedButton from '../../../../Components/Buttons/BigRedButton'
import InputText from '../../../../Components/Forms/InputText'
import InputSelect from '../../../../Components/Forms/InputSelect'
import InputTextarea from '../../../../Components/Forms/InputTextarea'

import { MdOutlineDiscount, MdOutlineLocalShipping, MdTypeSpecimen, MdOutlineEuro } from 'react-icons/md'
import { ImSpinner9, ImTree, ImTextHeight, ImGift } from 'react-icons/im'
import { BsShopWindow, BsLink45Deg, BsCurrencyExchange, BsPersonWorkspace, BsTrophy, BsPlusSquare } from 'react-icons/bs'
import { FaUserGraduate, FaBaby } from 'react-icons/fa'

const Offre = ({formData, setFormData, errors}) => {

    const [devise, setDevise] = useState([{value : 'Devise'}, {value : '€'}, {value : '%'}, { value : '$'}, {value : 'minutes'}, { value : 'mois'}, { value : 'jours'}, { value : 'points'}])
    const [showP_Remise, setShowP_Remise] = useState(
      formData.p_offre == 'remise' ? true : false
    )
    const [showF_Remise, setShowF_Remise] = useState(
      formData.f_offre == 'remise' ? true : false
    )

    const [p_ShowMore, setP_ShowMore] = useState(false);
    const [f_ShowMore, setF_ShowMore] = useState(false);

    function P_Offre(offre, show) {
        setShowP_Remise(show)
        setFormData({...formData, p_offre:offre})
    }
    function F_Offre(offre, show) {
      setShowF_Remise(show)
      setFormData({...formData, f_offre:offre})
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

      <h1 className="text-xl font-semibold mb-10 border-b-4 border-slate-200">Ajouter un Marchand - Offres</h1>
        {/* BOUTONS CODE & LIENS ET INVITATION */}
        <div className='border-2 p-2 border-slate-300 mt-8'>
            <p className='text-sm  text-slate-600 -mt-7 bg-white p-2 mb-2 text-center w-40'>Gain pour le parrain : </p>
            <div className='flex items-center flex-wrap mb-4 '>
              
              <Button title='Remise' icon={<MdOutlineDiscount />}  oclass={`w-full md:w-auto py-1.5 md:py-2 md:mb-0 mb-2 ${formData.p_offre == 'remise' && 'enabled:text-red-600 scale-105'}`} click={() => P_Offre('remise', true)} />
              <Button title='Frais de port gratuit' icon={<MdOutlineLocalShipping />}  oclass={`w-full md:w-auto  py-1.5 md:py-2 md:mb-0 mb-2 ${formData.p_offre == 'fdp' && 'enabled:text-red-600 scale-105'}`} click={() =>P_Offre('fdp', false)}/>
              <Button title='Cadeau offert' icon={<ImGift />} oclass={`w-full md:w-auto  py-1.5 md:py-2 md:mb-0 mb-2 ${formData.p_offre == 'cadeau' && 'enabled:text-red-600 scale-105'}`} click={() => P_Offre('cadeau', false)}/>
            </div>

              {/* HIDED INPUT */}
              {showP_Remise && 
                <>
                  
                  <div className='flex items-center text-sm flex-wrap mb-4'>
                  <p className='text-sm text-slate-600 w-full flex '>Montant du gain ou de la remise : </p>
                    <InputText name='p_remise' state={formData.p_remise} placeholder='5' error={errors.p_remise} classDiv='w-32' icone={<BsTrophy />} onChange={e =>  setFormData({...formData, p_remise:e})} />
                    
                    {p_ShowMore ? <InputText icone={<MdTypeSpecimen />} name='p_devise' state={formData.p_devise} error={errors.p_devise} oclass='w-32' onChange={e => setFormData({...formData, p_devise:e})}/>
                    : <InputSelect icone={<MdTypeSpecimen />} name='p_devise' state={formData.p_devise} data={devise} error={errors.p_devise} oclass='pl-1' onChange={e => setFormData({...formData, p_devise:e})}/>}
                    
                    <BsPlusSquare onClick={() => setP_ShowMore(!p_ShowMore)} className='text-xl mx-2 cursor-pointer' title='Ajouter une terminaison'/>
                    
                    <span className='border-2 p-2 bg-slate-200 rounded'> par filleul</span>
                    </div>
                </>
                }
                <InputTextarea name='p_content' state={formData.p_content} label='Offre du parrain' placeholder='5€ par filleul inscrit' oclass='h-18 mb-4' error={errors.p_content} icone={<FaUserGraduate />} onChange={e => setFormData({...formData, p_content:e})}/>
              </div>



{/* GAIN POUR LE FILLEUL */}
          <div className='border-2 p-2 border-slate-300 mt-8'>
            <p className='text-sm  text-slate-600 -mt-7 bg-white p-2 mb-2 text-center w-40'>Gain pour le filleul : </p>
            <div className='flex items-center flex-wrap mb-4 '>
              
              <Button title='Remise' icon={<MdOutlineDiscount />}  oclass={`w-full md:w-auto  py-1.5 md:py-2 md:mb-0 mb-2 ${formData.f_offre == 'remise' && 'enabled:text-red-600 scale-105'}`} click={() => F_Offre('remise', true)} />
              <Button title='Frais de port gratuit' icon={<MdOutlineLocalShipping />}  oclass={`w-full md:w-auto  py-1.5 md:py-2 md:mb-0 mb-2 ${formData.f_offre == 'fdp' && 'enabled:text-red-600 scale-105'}`} click={() =>F_Offre('fdp', false)}/>
              <Button title='Cadeau offert' icon={<ImGift />} oclass={`w-full md:w-auto py-1.5 md:py-2 md:mb-0 mb-2 ${formData.f_offre == 'cadeau' && 'enabled:text-red-600 scale-105'}`} click={() => F_Offre('cadeau', false)}/>
            </div>

              {/* HIDED INPUT */}
              {showF_Remise && 
                <>
                  
                  <div className='flex items-center text-sm flex-wrap mb-4'>
                  <p className='text-sm text-slate-600 w-full flex '>Montant du gain ou de la remise : </p>
                    <InputText name='f_remise' state={formData.f_remise} placeholder='5' error={errors.f_remise} classDiv='w-32' icone={<BsTrophy />} onChange={e =>  setFormData({...formData, f_remise:e})} />
                    {f_ShowMore ? <InputText icone={<MdTypeSpecimen />} name='f_devise' state={formData.f_devise} error={errors.f_devise} oclass='w-32' onChange={e => setFormData({...formData, f_devise:e})}/>
                    : <InputSelect icone={<MdTypeSpecimen />} name='f_devise' state={formData.f_devise} data={devise} error={errors.f_devise} oclass='pl-1' onChange={e => setFormData({...formData, f_devise:e})}/>}
                    
                    <BsPlusSquare onClick={() => setF_ShowMore(!f_ShowMore)} className='text-xl mx-2 cursor-pointer' title='Ajouter une terminaison' />
                  <span className='border-2 p-2 bg-slate-200 rounded mr-2'>dès</span>
                    <InputText name='f_mini' state={formData.f_mini} oclass='w-32' placeholder='60' error={errors.f_mini} classDiv='w-32' icone={<BsCurrencyExchange />} iconefin={<MdOutlineEuro />} onChange={e =>  setFormData({...formData, f_mini:e})}/>
                    <span className='border-2 p-2 bg-slate-200 rounded ml-2'> d'achats</span>
                    </div>
                </>
                }
                <InputTextarea name='f_content' state={formData.f_content} label='Offre du filleul' placeholder='5€ sur votre première commande' oclass='h-18 mb-4' error={errors.f_content} icone={<FaUserGraduate />} onChange={e => setFormData({...formData, f_content:e})}/>
              </div>
            
            
            <BigRedButton oclass='mt-8' />
            </div>
        </div>
    </div>
  )
}

export default Offre