import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import http from '../Services/Api';
import Spinner from '../Images/Spinner-30px.svg'
import { FaRegUser, FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'

const Register = props => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([]);


  const SubmitForm = async (e) => {
    e.preventDefault();

    const buttonSubmit = document.getElementById('submitButton');
    buttonSubmit.disabled = true;
    buttonSubmit.innerHTML = '<img src="'+Spinner+'" />';

      const csrf = await http.get('/sanctum/csrf-cookie');

      const handlingRegister = await http.post('/register',
      {
        name:username,
        email:email,
        password:password
      })
      .then(response => {
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


    <div className="text-left">
        <div className="w-full flex">
            <div
                className="w-1/3 h-auto bg-gray-100 hidden md:block bg-cover rounded-l-lg"
               /* style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')*/ 
            ></div>
            <div className="w-full md:w-2/3 bg-white pr-5 pl-5 pb-5 rounded-lg lg:rounded-l-none">
                <h3 className="text-xl font-semibold text-center mb-2">Créer un compte</h3>

                <form className="space-y-5" onSubmit={SubmitForm}>
                  <div>
                    <label htmlFor='pseudo' className="block mb-1 font-bold text-slate-600">Pseudo</label>
                    <label className="relative text-slate-400 focus-within:text-slate-500">
                      <FaRegUser className="p-0.5 pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 left-2"/>
                      <input id='pseudo' type="text" value={username} placeholder="Nom d'utilisateur" onChange={e => {
                          setUsername(e.target.value)
                          errors.name = ''
                        }
                      } className="focus-within:border-slate-500 text-base w-full border-2 rounded p-2 bg-white placeholder-gray-400 text-slate-700 appearance-none block pl-10 focus:outline-none" />
                    </label>
                    {errors.name && (<div className='text-red-600 text-xs'>{errors.name}</div>)}
                  </div>

                  <div>
                    <label htmlFor='email'  className="block mb-1 font-bold text-slate-600">Email</label>
                    <label className="relative text-slate-400 focus-within:text-slate-500">
                      <FaRegEnvelope className="p-0.5 pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 left-2"/>
                      <input id='email' type="email" value={email} placeholder="email@registrar.com" onChange={e => {
                          setEmail(e.target.value)
                          errors.email = ''
                        }
                      } className="focus-within:border-slate-500 w-full border-2 rounded p-2 bg-white placeholder-gray-400 text-slate-700 appearance-none block pl-10 focus:outline-none" />
                    </label>
                    {errors.email && (<div className='text-red-600 text-xs'>{errors.email}</div>)}
                  </div>

                  <div>
                    <label htmlFor='password'  className="block mb-1 font-bold text-slate-600">Mot de passe</label>
                    <label className="relative text-slate-400 focus-within:text-slate-500">
                      <FaStarOfLife className="p-0.5 pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 left-2"/>
                      <input id='password' type="password" value={password} placeholder="*******" onChange={e => {
                          setPassword(e.target.value) 
                          errors.password = ''
                        }
                      } className="focus-within:border-slate-500 w-full border-2 rounded p-2 bg-white placeholder-gray-400 text-slate-700 appearance-none block pl-10 focus:outline-none" />
                    </label>
                    {errors.password && (<div className='text-red-600 text-xs'>{errors.password}</div>)}
                  </div>

              

                  <button id='submitButton' className="flex justify-center items-center w-full bg-red-900 hover:bg-red-800 h-14 rounded text-gray-100 hover:text-gray-200 hover:scale-105 transition duration-300">Envoyer</button>

                </form>
                <hr className='mt-6'/>
                <div className='flex sm:justify-between flex-col sm:flex-row mt-6'>
                    <Link to='/passwordLost' className='hover:text-red-800'  onClick={props.CloseModal}>Mot de passe oublié ?</Link>
                    <Link to='/login' className='hover:text-red-800'  onClick={props.CloseModal}>Vous avez déja un compte ?</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Register