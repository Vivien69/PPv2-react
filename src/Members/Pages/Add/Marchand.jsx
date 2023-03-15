import React, { useEffect, useState } from 'react'
import InputText from '../../../Components/Forms/InputText'
import InputSelect from '../../../Components/Forms/InputSelect'
import { ImSpinner9, ImTree, ImTextHeight, ImGift } from 'react-icons/im'
import { MdOutlineDiscount, MdOutlineLocalShipping } from 'react-icons/md'
import { BsShopWindow, BsLink45Deg, BsCurrencyExchange, BsPersonWorkspace } from 'react-icons/bs'
import { FaUserGraduate, FaBaby } from 'react-icons/fa'

import http from '../../../Services/Api'
import InputTextarea from '../../../Components/Forms/InputTextarea'
import Button from '../../../Components/Buttons/Button'

const Marchand = () => {

  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [url, setUrl] = useState('')
  const [urlConditions, setUrlConditions] = useState('')
  const [picture, setPicture] = useState('')
  const [categorie, setCategorie] = useState([])
  const [offre, setOffre] = useState('')
  const [montantRemise, setMontantRemise] = useState('') 
  const [devise, setDevise] = useState([{value : 'Devise'}, {value : '€'}, {value : '%'}, { value : '$'}, {value : 'minutes'}, { value : 'mois'}, { value : 'jours'}, { value : 'points'}])
  const [montantMinimum,  setMontantMinimum] = useState('')
  const [content, setContent] = useState('')
  const [foncParrainage, setFoncParrainage] = useState('')
  const [offreParrain, setOffreParrain]  = useState('')
  const [offreFilleul, setOffreFilleul] =  useState('')

  const [loading, setLoading] = useState(false);
  const [iconeCategorie, setIconeCategorie] = useState(<ImSpinner9 className='animate-spin'/>) 
  const [showRemise, setShowRemise] = useState(false)


  useEffect(() => {
    async function fetchDataCategorie() {
      
      const csrf = await http.get('/sanctum/csrf-cookie')
      const cat = await http.get('/api/categorie')
      .then(response => {
        setCategorie(response.data)
        setLoading(true)})
        setIconeCategorie(<ImTree />)
      .catch(err => console.log(err))

    }
    fetchDataCategorie()

  }, [])

  


  const [errors, setErrors] = useState([])


  const SubmitForm = () => {

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

      <h1 className="text-xl font-semibold mb-10 border-b-4 border-slate-200">Ajouter un Marchand</h1>

        <form className="space-y-5" onSubmit={SubmitForm}>

          <InputText name='name' state={name} label='Nom du marchand' placeholder='Cdiscount ...' error={errors.name} icone={<BsShopWindow />} onChange={e => setName(e)} />
          <InputText name='url' state={url} label='Adresse du site' placeholder='https://www.' error={errors.url} icone={<BsLink45Deg />} onChange={e => setUrl(e)}/>
          <InputSelect name='categorie' data={categorie} error={errors.categorie} label='Categorie' icone={iconeCategorie} />
          <InputTextarea name='foncParrainage' state={foncParrainage} label='Fonctionnement du parrainage' placeholder="Démarches du filleul pour s'inscrire et bénéficier de la prime de parrainage" oclass='h-32' error={errors.foncParrainage} icone={<BsPersonWorkspace />} onChange={e => setFoncParrainage(e)} />
          {/* BOUTONS CODE & LIENS ET INVITATION */}
          <div className='flex items-center flex-wrap'>
          <p className='text-sm  text-slate-600 w-full'>Offre proposée : </p>
            <Button title='Remise' icon={<MdOutlineDiscount />}  oclass='w-full md:w-auto md:mb-0 mb-2 ' click={() => setShowRemise(true)} />
            <Button title='Frais de port gratuit' icon={<MdOutlineLocalShipping />} oclass='w-full md:w-auto md:mb-0 mb-2 ' click={() => setShowRemise(false)}/>
            <Button title='Cadeau offert' icon={<ImGift />} oclass='w-full md:w-auto md:mb-0 mb-2 ' click={() => setShowRemise(false)}/>
          </div>

            {/* HIDED INPUT */}
            {showRemise && 
              <>
                
                <div className='flex items-center text-sm flex-wrap'>
                <p className='text-sm  text-slate-600 w-full grow flex '>Montant de la remise : </p>
                  <InputText name='montantRemise' state={montantRemise} placeholder='5' error={errors.montantRemise} classDiv='w-32' icone={<BsCurrencyExchange />} onChange={e => setMontantRemise(e)} />
                  <InputSelect name='devise' data={devise} error={errors.devise} oclass='pl-1' />
                  <span>à partir de</span>
                  <InputText name='montantMinimum' state={montantMinimum} placeholder='60' error={errors.montantMinimum} classDiv='ml-2 w-32' icone={<BsCurrencyExchange />} onChange={e => setMontantMinimum(e)}/>
                  € d'achats
                </div>
              </>
              }
          

          <InputTextarea name='content' state={content} label='Description' placeholder='Ajoutez une description de 1000 caractères' oclass='h-80' error={errors.content} icone={<ImTextHeight />} onChange={e => setContent(e)} />
          <InputText name='urlConditions' state={urlConditions} label='Conditions du parrainage' placeholder='https://www.' error={errors.urlConditions} icone={<BsLink45Deg />} onChange={e => setUrl(e)}/>
          <InputTextarea name='offreParrain' state={offreParrain} label='Offre du parrain' placeholder='5€ par filleul inscrit' oclass='h-18' error={errors.offreParrain} icone={<FaUserGraduate />} onChange={e => setOffreParrain(e)}/>
          <InputTextarea name='offreFilleul' state={offreFilleul} label='Offre du filleul' placeholder="3€ de réduction dès 15€ d'achats" oclass='h-18' error={errors.offreFilleul} icone={<FaBaby />} onChange={e => setOffreFilleul(e)}/>
              
        </form>

      </div>
    </div>
  </div>
  )
}

export default Marchand