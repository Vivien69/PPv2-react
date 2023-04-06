import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import http from '../../Services/Api';
import Spinner from '../../Images/Spinner-30px.svg'
import { FaRegEnvelope } from 'react-icons/fa'
import InputText from '../../Components/Forms/InputText';
import BigRedButton from '../../Components/Buttons/BigRedButton';

const PasswordLost =  ({onClick, onClickcross, background}) => {
  
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([]);
  const [loading, setLoading ] = useState(false)

  const SubmitForm = async (e) => {
    e.preventDefault();

    const buttonSubmit = document.getElementById('submitButton');
    buttonSubmit.disabled = true;
    buttonSubmit.innerHTML = '<img src="'+Spinner+'" />';

      const csrf = await http.get('/sanctum/csrf-cookie');
      const handlingRegister = await http.post('/login',
      {
        email:email,
      })
      .then(response => {
        console.log(response)
        buttonSubmit.disabled = false;
        buttonSubmit.innerHTML = 'Envoyer'
      })
      .catch(err => {
        setErrors(err.response.data.errors);
        buttonSubmit.disabled = false;
        buttonSubmit.innerHTML = 'Envoyer'
      });

  }


  return (
    <div className="w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 " onClick={onClick}>
      
        <div className="w-full md:flex">
            <div className="w-1/3 h-auto bg-gray-100 hidden md:block bg-cover rounded-l-lg"
               /* style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')*/ 
            ></div>
            <div className="relative w-full md:w-2/3 bg-white pr-5 pl-5 pb-5 rounded-lg md:rounded-l-none">
              
              {/* SPAN CROIX FERMETURE MODAL */}
              <span className="absolute z-60 top-3 right-3 cursor-pointer float-right " onClick={onClickcross}>
                <svg
                  className="w-6 h-6 text-slate-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
              </svg>
            </span>

            
                <h3 className="text-xl font-semibold text-center py-4">Mot de passe perdu</h3>
                <form className="space-y-5" onSubmit={SubmitForm}>
                  <InputText name='email' label='Email' icone={<FaRegEnvelope />} error={errors.email} placeholder="email@registrar.com" state={email} onChange={email => {setEmail(email) }} />

                        {loading ? (
                    <BigRedButton value={<ImSpinner9 className='animate-spin' />} disabled />
                      ) : (
                        <BigRedButton />
                        )}

                </form>
                <hr className='mt-6'/>
                <div className='flex sm:justify-between flex-col sm:flex-row mt-6'>
                    <Link to='/login' state={{ background }} className='hover:text-red-800'>Déja inscrit ? Connexion</Link>
                    <Link to='/register' state={{ background }} className='hover:text-red-800'>Créer un nouveau compte</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PasswordLost