import React from 'react'
import Swal from 'sweetalert2';
import { FaRegUser, FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'
import { BsPersonWorkspace } from 'react-icons/bs'

import InputText from '../../../Components/Forms/InputText'
import InputTextarea from '../../../Components/Forms/InputTextarea'
import BigRedButton from '../../../Components/Buttons/BigRedButton'
import useAuthContext from '../../../Context/AuthContext';

function Informations() {
    const { user } = useAuthContext();

    function EditProfilInformations() {
        http.put('/api/users/'+user)
        .then(res => {
            if (res.status === 200 ) {
                Swal.fire({
                    icon: 'succes',
                    title: 'Modifié',
                    text: 'Vous avez modifié votre profil',
                    padding: '2em',
                    customClass: 'sweet-alerts',
                });
            }
        })
        .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Une erreur est survenue lors de l\'enregistrement des modifications. Erreur '+res.status,
                    padding: '2em',
                    customClass: 'sweet-alerts',
                });
        });

    }

  return (
    <div className='p-2'>
        <form className="border shadow rounded-md p-4 mb-5 bg-white">
            <h6 className="text-lg font-bold mb-5">Informations générales</h6>
            <div className="flex flex-col sm:flex-row">
                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                    <img src="/assets//images/profile-34.jpeg" alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                </div>
                <div className="flex-1">
                    <div>
                        <InputText label='Pseudo' state={user.name} icone={<FaRegUser />} disabled />
                    </div>

                    <div className='mt-3'>
                        <InputText label='Email' state={user.email} icone={<FaRegEnvelope />} />
                    </div>

                    <div className='mt-3'>
                        <InputTextarea state={user.content} label='Description du profil' icone={<BsPersonWorkspace />} />
                    </div>

                    
                    <div className="mt-6">
                        <BigRedButton value='Modifier' onClick={EditProfilInformations} />
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Informations