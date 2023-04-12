import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import http from '../../../Services/Api'
import httpClient from '../../../Services/ApiClient'
import Button from '../../../Components/Buttons/Button'

import { ImSpinner9 } from 'react-icons/im'
import { RiFileList2Line, RiUserFollowFill, RiImageEditFill, RiMailSendFill } from 'react-icons/ri'

import Informations from './Informations'
import Annonces from './Annonces'
import Confidentialité from './Confidentialité'
import Preferences from './Preferences'

import { format } from 'date-fns'
import { fr } from 'date-fns/locale'


function Profil() {
    const { userName, tabsNav } = useParams()

    

    const [tabs, setTabs] = useState(tabsNav ? 'annonces' : tabsNav);
    const [profil, setProfil] = useState()
    const [services, setServices] = useState({errors:null, errMsg:null, loading:false});

    
    
    const toggleTabs = (name) => {
        setTabs(name);
    };

    useEffect(() => {
        getDataProfil()
    }, []);

    const getDataProfil = () => {
        httpClient.get('/api/users/'+userName)
        .then(res => {
            let dateCreated_at = format(new Date(res.data.created_at), 'dd MMMM yyyy', {locale: fr})
            let dateUpdated_at = format(new Date(res.data.updated_at), 'dd MMMM yyyy', {locale: fr})
            setProfil({...res.data, created_at:dateCreated_at, updated_at:dateUpdated_at})
        })
        .catch(err => {
            setServices({...services, errors:err.response.data.errors, errMsg:'Impossible de récupérer l\'utilisateur'})
        })
    }


  return (
    <div className='bg-slate-100'>

        <div className="w-full h-64 flex md:justify-between justify-end items-end pb-2 bg-[url(https://www.promo-parrain.com/membres/images/8-header.jpeg)]">
            <div className='bg-slate-800 text-slate-100 py-2 ml-32 lg:ml-44 rounded-md hidden md:block'>
                <span className='px-3 py-1 border-r-2 border-slate-600 whitespace-nowrap'>Inscrit le {profil?.created_at}</span>
                <span className='px-3 py-1 border-r-2 border-slate-600 whitespace-nowrap'>Avis : 5 </span>
                <span className='px-3 py-1 whitespace-nowrap' >Actif le {profil?.updated_at}</span>
            </div>
            <Button icon={<RiImageEditFill />} title="Modifier l'image" textHidden mr oclass={'whitespace-nowrap'}/>
        </div>
        
        <div className='flex justify-end items-end absolute ml-2 lg:ml-4 -mt-12 lg:-mt-16 h-28 w-28 lg:h-36 lg:w-36 bg-no-repeat bg-contain bg-white rounded-full border-4 border-white bg-[url(https://www.promo-parrain.com/membres/images/8-avatar.jpg)]'>
            <Button icon={<RiImageEditFill/>} textHidden oclass={'p-1.5'} />
        </div>
        
        <h1 className='relative ml-32 lg:ml-44 mt-4 lg:mt-6 text-xl font-semibold mb-6 border-b-4 border-slate-200'>Profil de {userName}</h1>
        <div className='flex justify-end flex-col-reverse '>
            <div className='p-2 rounded-md'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sit a dolorem distinctio magnam earum porro optio, pariatur ex accusamus voluptatibus omnis unde ab, neque animi nihil aliquam est quasi!
            </div>
            <div className='flex justify-end items-start ml-2'>
                <Button icon={<RiMailSendFill />} title="Envoyer un MP" oclass={'whitespace-nowrap'} />
                <Button icon={<RiUserFollowFill />} title="Suivre" />
            </div>
            
        </div>
        <div className={`text-red-800 text-center font-bold p-2 mb-4 bg-red-100 rounded ${services?.errMsg ? 'block' : 'hidden'}`}>{services?.errMsg}</div>

        

        <div className='p-2'>
            <ul className="sm:flex  border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                <li className="inline-block">
                    <Link to={`/profil/${profil?.name}/annonces`} onClick={() => toggleTabs('annonces')} className={`flex gap-2 p-4 border-b border-transparent hover:border-red-700 hover:text-red-700 ${tabs === 'annonces' ? '!border-red-700 text-red-700' : ''}`}>
                        <RiFileList2Line className='text-lg' /> Annonces </Link>
                </li>
                <li className="inline-block">
                    <Link to={`/profil/${profil?.name}/informations`} onClick={() => toggleTabs('informations')} className={`flex gap-2 p-4 border-b border-transparent hover:border-red-700 hover:text-red-700 ${tabs === 'informations' ? '!border-red-700 text-red-700' : ''}`}>
                        <RiFileList2Line className='text-lg' /> Informations </Link>
                </li>
                <li className="inline-block">
                    <Link to={`/profil/${profil?.name}/preferences`} onClick={() => toggleTabs('preferences')} className={`flex gap-2 p-4 border-b border-transparent hover:border-red-700 hover:text-red-700 ${tabs === 'preferences' ? '!border-red-700 text-red-700' : ''}`}>
                        <RiFileList2Line className='text-lg' /> Préférences </Link>
                </li>
                <li className="inline-block">
                    <Link to={`/profil/${profil?.name}/confidentialite`} onClick={() => toggleTabs('confidentialite')} className={`flex gap-2 p-4 border-b border-transparent hover:border-red-700 hover:text-red-700 ${tabs === 'confidentialite' ? '!border-red-700 text-red-700' : ''}`}>
                        <RiFileList2Line className='text-lg' /> Confidentialité </Link>
                </li>
            </ul>
        </div>
        {tabs === null ? (
           <div className='flex justify-center p-5'>
                <ImSpinner9 className='animate-spin text-3xl' />
            </div>
        ) : (
            ''
        )}
        {tabs === 'annonces' ? (
            <Annonces data={profil}/>
        ) : (
            ''
        )}
        {tabs === 'informations' ? (
            <Informations data={profil} tabs={toggleTabs} />
        ) : (
            ''
        )}
        {tabs === 'preferences' ? (
            <Preferences />
        ) : (
            ''
        )}
        {tabs === 'confidentialite' ? (
            <Confidentialité />
        ) : (
            ''
        )}
        
    </div>
    
  )
}

export default Profil