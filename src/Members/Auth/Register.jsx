import React, { useState, useEffect, useRef, createRef} from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser, FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'
import { ImSpinner9 } from 'react-icons/im'
import InputText from '../../Components/Forms/InputText';
import BigRedButton from '../../Components/Buttons/BigRedButton';
import { useAuth } from './Session/useAuth';

const Register = ({onClickcross, background}) => {

  const { register } = useAuth()
  const nameRef = createRef();
  const errRef = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [services, setServices] = useState({errors:null, loading:false});


  useEffect(() => {
    nameRef.current.focus();
  }, [])

  useEffect(() => {
    errRef.current.focus();
  }, [services.errors])
  

  const SubmitForm = async (e) => {
    e.preventDefault();

    register({name, email, password, setServices});

  }


  return (


    <div className="w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 ">
      
        <div className="w-full md:flex ">
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
              <div ref={errRef} className={`text-red-800 text-center font-bold p-2 mb-4 bg-red-100 rounded ${services.errors?.general ? 'block' : 'hidden'}`}>{services.errors?.general}</div>
                <h3 className="text-xl font-semibold text-center py-4">Créer un compte</h3>
                

                <form className="space-y-5" onSubmit={SubmitForm}>
                  <InputText name='pseudo' label='Pseudo' icone={<FaRegUser />} error={services.errors?.name} placeholder="Nom d'utilisateur" state={name} onChange={name => {setName(name) }} ref={nameRef} />
                  <InputText name='email' label='Email' icone={<FaRegEnvelope />} error={services.errors?.email} placeholder="email@registrar.com" state={email} onChange={email => {setEmail(email) }} />
                  <InputText type='password' name='password' label='Mot de passe' icone={<FaStarOfLife />} error={services.errors?.password} placeholder="*******" state={password} onChange={password => {setPassword(password) }} />

                  {services.loading ? (
                    <BigRedButton value={<ImSpinner9 className='animate-spin' />} disabled />
                      ) : (
                        <BigRedButton />
                        )}
                </form>
                <hr className='mt-6'/>
                <div className='flex sm:justify-between flex-col sm:flex-row mt-6'>
                    <Link to='/passwordLost' state={{ background }} className='hover:text-red-800'>Mot de passe oublié ?</Link>
                    <Link to='/login' state={{ background }} className='hover:text-red-800'>Vous avez déja un compte ?</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Register