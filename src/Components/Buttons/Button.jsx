import React from 'react'
import { twMerge } from 'tailwind-merge'

function Button({title, icon, textHidden = false, click, oclass, disabled, mr=false}) {
  return (
    <button  type="button" onClick={click} to='/ajouter' className={twMerge(`enabled:text-gray-100 disabled:text-gray-400 flex items-center bg-slate-700 rounded px-3 py-2 focus:bg-slate-700 focus:text-red-700 enabled:hover:text-red-700 hover:bg-slate-600 hover:duration-300 enabled:hover:scale-105 mx-2 lg:mx-0 lg:mr-2 
    ${oclass}`)} disabled={disabled}>
        <span  className={mr ? 'text-xl lg:mr-2' : 'text-xl'}>{icon}</span>
        <span className={textHidden ? 'hidden lg:block' : ' ml-2 lg:ml-3'}>{title}</span>
    </button>
  )
}

export default Button