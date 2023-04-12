import React, { useState } from 'react'
import ErrorText from './ErrorText'

function InputTextarea({name, state, icone, label, placeholder, error, disabled, onChange, oclass, compteur}) {

  const [count, setCount] = useState(0);

  return (
    <div>
      {compteur && <div className='float-right justify-end text-xs '>{count} / {compteur}</div>}
        <label htmlFor={name} className="block text-slate-600 text-sm">{label}</label>

        <label className="focus-within:text-slate-500 relative text-slate-400 ">
            <span className='block text-xl p-1 pointer-events-none w-8 absolute top-8 transform -translate-y-1/2 left-1'>
                {icone}
            </span>
          
          <textarea
            id={name} 
            type="text" 
            value={state} 
            placeholder={placeholder} 
            disabled={disabled} 
            onChange={e => {onChange(e.target.value)
            setCount(e.target.value.length)
            error = ''
          }}
            className={` focus:outline-none text-base w-full border-2 focus-within:border-slate-500 rounded p-2 bg-white placeholder-gray-400 text-slate-700 block pl-10  hover:bg-slate-50
            ${oclass}`}>

          </textarea>

        </label>

        {error && (<ErrorText error={error} />)}

      </div>
  )
}

export default InputTextarea