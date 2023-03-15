import React from 'react'

function ListMarchand({name, image, link, onClick, oclass, dataid}) {

  const data = {
    name:name,
    id:dataid
  }
  return (
    <div className='flex items-center p-1 hover:bg-slate-100 border-b-2 cursor-pointer' onClick={() => onClick(data)}>

        <div alt='' className={`ml-1 w-28 h-16 bg-white border-2 border-slate-200 mr-4 ${oclass}`} style={{ backgroundImage: "url("+image+")" }}></div>
        <span className='font-semibold text-base text-slate-600'>{name}</span>

    </div>
    
  )
}

export default ListMarchand