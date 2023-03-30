import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='flex bg-slate-100 justify-center [&>.child-link]:p-2 [&>.child-link]:rounded '>
      <Link to='/admin/users' className='child-link hover:bg-slate-300'>Parrainages</Link>
      <Link to='/admin/marchands' className='child-link hover:bg-slate-300'>Marchands</Link>
      <Link to='/admin/users' className='child-link hover:bg-slate-300'>Signalés</Link>
      <Link to='/admin/users' className='child-link hover:bg-slate-300'>Utilisateurs</Link>
      <Link to='/admin/users' className='child-link hover:bg-slate-300'>Avis</Link>
      <Link to='/admin/users' className='child-link hover:bg-slate-300'>Offres</Link>
      <Link to='/admin/users' className='child-link hover:bg-slate-300'>Bannis</Link>
      <Link to='/admin/users' className='child-link hover:bg-slate-300'>Contact</Link>
  </div>
  )
}

export default Menu