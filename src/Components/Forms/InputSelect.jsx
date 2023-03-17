import React from 'react'


function InputSelect({name, label, state, error, icone, data, oclass, classDiv, onChange}) {
    
  
  return (
    <div>
      <label htmlFor={name} className='block text-slate-600 text-sm'>{label}</label>

      <label className={`focus-within:text-slate-500 relative text-slate-400 ${classDiv}`}>
          <span className='block text-xl p-1 pointer-events-none w-8 absolute transform left-1 top-2 z-10'>
              {icone}
          </span>

        <select name={name} value={state} onChange={e => onChange(e.target.value)} className={`focus:outline-none text-base w-full border-2 focus-within:border-slate-500 rounded p-2 bg-white placeholder-gray-400 text-slate-700 block pl-10  hover:bg-slate-50
        ${oclass}`}>
          <option key='empty' value=''></option>
          {name == 'categories' && data.map(item => {
            return (<option key={item.id} value={item.id} slug={item.slug}>{item.name}</option>)
          })}
          {name == 'devise' && data.map(item => {
            return (<option key={item.id} value={item.value}>{item.value}</option>)
          })}

        </select>

      </label>

      {error && (<ErrorText error={error} />)}

    </div>
  )
}

export default InputSelect