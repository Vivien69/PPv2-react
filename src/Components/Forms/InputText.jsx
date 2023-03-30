import React, {Fragment} from 'react'
import ErrorText from './ErrorText'
import { twMerge } from 'tailwind-merge'

function InputText({name, state, icone, label, placeholder, error, disabled, onChange, oclass, classDiv, off, iconefin}) {

  return (
    <> 
      <label htmlFor={name} className='block text-slate-600 text-sm'>{label}</label>

      <label className={twMerge(`focus-within:text-slate-500 relative text-slate-400 ${classDiv}`)}>
          <span className=' block text-xl p-1 pointer-events-none w-8 absolute transform left-1 top-2 z-10'>
              {icone}
          </span>

        <input 
          id={name} 
          type="text" 
          value={state} 
          placeholder={placeholder} 
          disabled={disabled} 
          onChange={e => onChange(e.target.value)}
          className={twMerge(` focus:outline-none text-base w-full border-2 focus-within:border-slate-500 rounded p-2 bg-white placeholder-gray-400 text-slate-700 block pl-10  hover:bg-slate-50
          ${oclass}`)}
          autoComplete={off ? 'off' : ''}
            />
            {iconefin && <span className=' border-l-2 block text-xl p-1 w-8 absolute transform right-1 top-2 z-10'>
              {iconefin}
          </span>}

      </label>

      {error && (<ErrorText error={error} />)}

    </>
  )
}

export default InputText