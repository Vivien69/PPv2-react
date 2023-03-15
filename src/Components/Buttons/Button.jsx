import React from 'react'

function Button({title, icon, textHidden, click, oclass}) {
  return (
    <button type="button" onClick={click} to='/ajouter' className={`text-gray-100 flex items-center bg-slate-700 rounded px-3 py-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-700 hover:bg-slate-600 hover:duration-300 hover:scale-105 mx-2 lg:mx-0 lg:mr-2 
    ${oclass}`}>
        <span  className='text-xl mr-2 lg:mr-3'>{icon}</span>
        <span className={textHidden ? 'hidden lg:block' : ''}>{title}</span>
    </button>
  )
}

export default Button