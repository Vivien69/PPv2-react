import React, { useState, createRef } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'
import { ImSpinner9 } from 'react-icons/im'
import InputText from '../../Components/Forms/InputText';
import BigRedButton from '../../Components/Buttons/BigRedButton';
import { useAuth } from './Session/useAuth';
import { useEffect } from 'react';

const Login = ({onClickcross, background, CloseModal}) => {

  const { login } = useAuth();
  
  const emailRef = createRef();
  const errRef = createRef();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [services, setServices] = useState({errors:null, loading:false})

  useEffect(() => {
    emailRef.current.focus();
  
  }, [])
  
  const SubmitForm = async (e) => {
    e.preventDefault();

    login({email, password, setServices});
   

      //const OAuth = await http.get('/oauth/authorize');

  }

  return (
    <div className="w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 ">
      
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

            
            <h3 className="text-xl font-semibold text-center py-4">Connexion</h3>
            {services.errors?.general && (<div ref={errRef} className='text-red-800 text-center font-bold p-2 mb-4 bg-red-100 rounded'>{services.errors.general}</div>)}
            <form className="space-y-5" onSubmit={SubmitForm}>

              <InputText name='email' label='Email' icone={<FaRegEnvelope />} error={services.errors?.email} placeholder="email@registrar.com" state={email} onChange={email => {setEmail(email) }} ref={emailRef}/>
              <InputText type="password" name='password' label='Mot de passe' error={services.errors?.password} icone={<FaStarOfLife />} placeholder="*******" state={password} onChange={password => {setPassword(password) }} />
                <div>
                    <label htmlFor="stayConnected">
                    <input id='stayConnected' type="checkbox" className='mr-2' />
                        Rester connecté(e) sur cet appareil</label>
                </div>
                {services?.loading ? (
                <BigRedButton value={<ImSpinner9 className='animate-spin' />} disabled />
                  ) : (
                    <BigRedButton />
                    )}
                </form>

                <hr className='mt-6'/>
                <div className='flex sm:justify-between flex-col sm:flex-row mt-6'>
                    <Link to='/passwordLost' state={{ background }}className='hover:text-red-800'  onClick={CloseModal}>Mot de passe oublié ?</Link>
                    <Link to='/register' state={{ background }} className='hover:text-red-800'  onClick={CloseModal}>Créer un nouveau compte</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login