import React, {Fragment} from 'react'
import ErrorText from './ErrorText'

function InputText({name, state, icone, label, placeholder, error, disabled, onChange, oclass, classDiv}) {

  return (
    <> 
                    <label htmlFor={name} className='block text-slate-600 text-sm'>{label}</label>

                    <label className={`focus-within:text-slate-500 relative text-slate-400 ${classDiv}`}>
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
                        className={` focus:outline-none text-base w-full border-2 focus-within:border-slate-500 rounded p-2 bg-white placeholder-gray-400 text-slate-700 block pl-10  hover:bg-slate-50
                        ${oclass}`} />

                    </label>

                    {error && (<ErrorText error={error} />)}

                  </>
  )
}

export default InputText