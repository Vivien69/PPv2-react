import React, { useEffect, useState } from 'react'

import InputText from '../../../../Components/Forms/InputText'
import InputSelect from '../../../../Components/Forms/InputSelect'
import InputTextarea from '../../../../Components/Forms/InputTextarea'

import { ImSpinner9, ImTree, ImTextHeight, ImGift } from 'react-icons/im'
import { BsShopWindow, BsLink45Deg, BsCurrencyExchange, BsPersonWorkspace } from 'react-icons/bs'

import http from '../../../../Services/Api'
import { writeToCache } from '../../../../Services/Cache'


const Marchand = ({formData, setFormData, errors}) => {

  const [categories, setCategories]  = useState([]);
  const [iconeCategories, setIconeCategories] = useState()

    useEffect(() => {
        const savedItem = localStorage.getItem('Categories')

        if(savedItem == null) {
            const data = fetchDataCategorie()
        }
        else  {
            setIconeCategories(<ImTree />)
            setCategories(JSON.parse(savedItem))
        }

        async function fetchDataCategorie() {

            const csrf = await http.get('/sanctum/csrf-cookie')
        
        const cat = await http.get('/api/categorie').then(response => {
            setCategories(response.data)
            writeToCache('Categories', response.data)
            setLoading(true)})
            setIconeCategories(<ImTree />)
        }


    }, []);
    
  return (
    <div className="text-left">
      <div className="w-full flex">
        <div className="w-1/3 h-auto bg-gray-100 hidden md:block bg-cover rounded-l-lg"
            /* style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')*/ 
        >

      </div>

      <div className="md:w-2/3 w-full bg-white pr-5 pl-5 pb-5 rounded-lg lg:rounded-l-none">

      <h1 className="text-xl font-semibold mb-10 border-b-4 border-slate-200">Ajouter un Marchand</h1>

          <InputText name='name' oclass='mb-4' state={formData.name} label='Nom du marchand' placeholder='Cdiscount ...' error={errors.name} icone={<BsShopWindow />} onChange={e => setFormData({...formData, name:e})} />
          <InputText name='url'  oclass='mb-4' state={formData.url} label='Adresse du site' placeholder='https://www.' error={errors.url} icone={<BsLink45Deg />} onChange={e => setFormData({...formData, url:e})} />
          <InputSelect name='categories' oclass='mb-4' state={formData.categorie} data={categories} error={errors.categorie} label='Categorie' icone={iconeCategories} onChange={e => setFormData({...formData, categorie:e})} />
          
          <InputTextarea name='content' compteur='600' state={formData.content} label='Description' placeholder="Ajoutez une description d'au moins 600 caractères" oclass='h-80' error={errors.content} icone={<ImTextHeight />} onChange={e => setFormData({...formData, content:e})} />

      </div>
    </div>
  </div>
  )
}

export default Marchand