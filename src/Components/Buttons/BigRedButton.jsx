import React from 'react'

function BigRedButton({oclass, value = 'Envoyer', disabled = false}) {
  return (
    <button id='submitButton' 
    className={`flex justify-center items-center w-full bg-red-900 hover:bg-red-800 h-14 rounded text-gray-100 hover:text-gray-200 hover:scale-105 transition duration-30
    ${typeof oclass == 'undefined' ? '' : oclass}`}
    disabled ={disabled}>
        {value}
    </button>
  )
}

export default BigRedButton