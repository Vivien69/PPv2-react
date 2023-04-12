import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { FaRegUser, FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'
import { BsPersonWorkspace } from 'react-icons/bs'
import http from '../../../Services/Api';
import { ImSpinner9 } from 'react-icons/im';

import InputText from '../../../Components/Forms/InputText'
import InputTextarea from '../../../Components/Forms/InputTextarea'
import BigRedButton from '../../../Components/Buttons/BigRedButton'
import { useAuthContext } from '../../Auth/Session/AuthContext';

function Informations({profil, setProfil}) {
    const { user } = useAuthContext();
     
    const [dataFetch, setDataFetch] = useState(profil)
    const [services, setServices] = useState({errors:null, errMsg:null, loading:false, button:true});
    const { userName } = useParams()

    function EditProfilInformations(e) {
        e.preventDefault();
        setServices({...services, loading:true})

        http.put('/api/users/'+userName, {
            email:dataFetch.email,
            content:dataFetch.content
        })
        .then(res => {
            setProfil(...profil,{content:res.data.content, email:res.data.email})

            if (res.status === 200 ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Modifié',
                    text: 'Vous avez modifié votre profil',
                    padding: '2em',
                    customClass: 'sweet-alerts',
                });
            }
        })
        .catch(err => {
            setServices({...services, errors:err.response.data.errors, errMsg:'Erreur dans votre formulaire'})
        });

        setServices({...services, loading:false})

    }

    useEffect(() => {
        if(!profil)
        {
          getDataProfil()
        }

    }, [])

    const getDataProfil = () => {
        http.get('/api/users/'+userName)
        .then(res => {
            setDataFetch(res.data)
        })
        .catch(e => {
            setServices({...services, errors:err.response.data.errors, errMsg:'Impossible de récupérer l\'utilisateur'})
        })
    }

  return (
    <div className='p-2'>
        
        <form className="border shadow rounded-md p-4 mb-5 bg-white"  onSubmit={EditProfilInformations} >
        <div className={`text-red-800 text-center font-bold p-2 mb-4 bg-red-100 rounded ${services?.errMsg ? 'block' : 'hidden'}`}>{services?.errMsg}</div>
            <h6 className="text-lg font-bold mb-5">Informations générales</h6>
            <div className="flex flex-col sm:flex-row">
                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                    <img src="/assets//images/profile-34.jpeg" alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                </div>
                <div className="flex-1">
                    <div>
                        <InputText label='Pseudo' state={dataFetch?.name}  icone={<FaRegUser />} disabled />
                    </div>

                    <div className='mt-3'>
                        <InputText label='Email' state={dataFetch?.email} error={services.errors?.email} icone={<FaRegEnvelope />} onChange={email => {setDataFetch({...dataFetch, email:email})  
                        setServices({button:false})}} />
                    </div>

                    <div className='mt-3'>
                        <InputTextarea state={dataFetch?.content == null ? '' : dataFetch?.content} error={services.errors?.content} label='Description du profil' icone={<BsPersonWorkspace />} onChange={content => {setDataFetch({...dataFetch, content:content}) 
                        setServices({button:false})}} />
                    </div>

                    
                    <div className="mt-6">
                    {services.loading ? (
                    <BigRedButton value={<ImSpinner9 className='animate-spin' />} disabled />
                      ) : (
                        <BigRedButton value='Modifier' disabled={services.button}/>
                        )}
                    </div>
                </div>
            </div>
        </form>

       
    </div>
  )
}

export default Informations