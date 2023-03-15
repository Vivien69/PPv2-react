import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import http from '../Services/Api';
import Spinner from '../Images/Spinner-30px.svg'
import { FaRegUser, FaRegEnvelope, FaStarOfLife } from 'react-icons/fa'

const Login = props => {
  
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

  <div className="py-2 flex items-center justify-center ">

  <div className="bg-white p-16 rounded shadow-lg shadow-slate-300 mb-4 w-full md:w-3/4 xl:w-2/4 2xl:w-1/3">

    <h2 className="text-3xl font-bold mb-10 text-gray-800">Connexion</h2>

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
            <Link to='/passwordLost' className='hover:text-red-800 text-sm' onClick={props.CloseModal}>Mot de passe oublié ?</Link>
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
        <label htmlFor="">
        <input type="checkbox" className='mr-2' />
            Rester connecté(e) sur cet appareil</label>
      </div>

      <button id='submitButton' className="flex justify-center items-center w-full bg-red-900 hover:bg-red-800 h-14 rounded text-gray-100 hover:text-gray-200 hover:scale-105 transition duration-300">Envoyer</button>

    </form>
    <br />
        <Link to='/passwordLost' className='hover:text-red-800'  onClick={props.CloseModal}>Mot de passe oublié ?</Link>
  </div>

      </div>
  )
}

export default Login