import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'
import useAuthContext from '../Context/AuthContext';
import { ImSpinner9 } from 'react-icons/im'

const Login = ({onClick, onClickcross, background, CloseModal}) => {
  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading ] = useState(false)
  const { login, errors } = useAuthContext()
  
  const SubmitForm = async (e) => {
    e.preventDefault();
    
    login({ email, password, setLoading })

      //const OAuth = await http.get('/oauth/authorize');

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

            
                <h3 className="text-xl font-semibold text-center py-4">Connexion</h3>
                {errors.general && (<div className='text-red-800 text-center font-bold p-2 mb-4 bg-red-100 rounded'>{errors.general}</div>)}
                <form className="space-y-5" onSubmit={SubmitForm}>

                    <div>
                        <label className="block mb-1 font-bold text-slate-600">Email</label>
                        <label className="relative text-slate-400 focus-within:text-slate-500">
                            <FaRegEnvelope className="p-0.5 pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 left-2"/>
                            <input type="email" value={email} placeholder="email@registrar.com" onChange={e => {
                                setEmail(e.target.value)
                                errors.email = ''
                            }
                            } className="focus-within:border-slate-500 w-full border-2 rounded p-2 bg-white placeholder-gray-400 text-slate-700 appearance-none block pl-10 focus:outline-none" />
                        </label>
                        {errors.email && (<div className='text-red-600 text-xs'>{errors.email}</div>)}
                        </div>

                        <div>
                        <div className='flex justify-between items-end'>
                            <label className="block mb-1 font-bold text-slate-600">Mot de passe</label>
                            <Link to='/passwordLost' state={{ background }} className='hover:text-red-800 text-sm' onClick={CloseModal}>Mot de passe oublié ?</Link>
                        </div>
                        <label className="relative text-slate-400 focus-within:text-slate-500">
                            <FaStarOfLife className="p-0.5 pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 left-2"/>
                            <input type="password" value={password} placeholder="*******" onChange={e => {
                                setPassword(e.target.value) 
                                errors.password = ''
                            }
                            } className="focus-within:border-slate-500 w-full border-2 rounded p-2 bg-white placeholder-gray-400 text-slate-700 appearance-none block pl-10 focus:outline-none" />
                        </label>
                        {errors.password && (<div className='text-red-600 text-xs'>{errors.password}</div>)}
                        </div>

                        <div>
                            <label htmlFor="stayConnected">
                            <input id='stayConnected' type="checkbox" className='mr-2' />
                                Rester connecté(e) sur cet appareil</label>
                        </div>
                        {loading ? (
                           <button id='submitButton' className="flex justify-center items-center w-full bg-red-900 hover:bg-red-800 h-14 rounded text-gray-100 hover:text-gray-200 hover:scale-105 transition duration-300" disabled><ImSpinner9 className='animate-spin' /></button>
                        ) : (
                          <button id='submitButton' className="flex justify-center items-center w-full bg-red-900 hover:bg-red-800 h-14 rounded text-gray-100 hover:text-gray-200 hover:scale-105 transition duration-300">Envoyer</button>
                        )}
                       

                </form>
                <hr className='mt-6'/>
                <div className='flex sm:justify-between flex-col sm:flex-row mt-6'>
                    <Link to='/passwordLost' state={{ background }} className='hover:text-red-800'  onClick={CloseModal}>Mot de passe oublié ?</Link>
                    <Link to='/register' state={{ background }} className='hover:text-red-800'  onClick={CloseModal}>Créer un nouveau compte</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login