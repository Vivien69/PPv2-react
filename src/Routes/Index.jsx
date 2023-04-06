import React, { Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Index from '../Layouts/Index'

import AddParrainage from '../Members/Pages/Add/Parrainage'
import AddMarchand from '../Members/Pages/Add/Marchand/Index'

//MODAL LOGIN REGISTER
import ModalLogin from '../Modal/ModalLogin';
import ModalRegister from '../Modal/ModalRegister'
import ModalPasswordLost from '../Modal/ModalpasswordLost';
import NoMatch from './NoMatch'

//MEMBRES
import { withCookies } from 'react-cookie'
import Dashboard from '../Members/Index'
import Profil from '../Members/Pages/Profil/Profil'

import GuestLayout from '../Layouts/Components/GuestLayout'
import useAuthContext from '../Context/AuthContext';


//ADMINISTRATION
import ProtectedRoute from './ProtectedRoute'
import AdminUsers from '../Members/Admin/Users/Users'
import AdminMarchands from '../Members/Admin/Marchands//Marchands'
import { useEffect } from 'react';

function IndexRoutes({user}) {


  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
    
    <Routes location={background || location}>
      <Route path='/profil/:userName' element={<Profil />} />


{/* Routes des membres */}
      <Route element={<ProtectedRoute isAllowed={!!user}/>}>
        <Route path='/dashboard' element={<Dashboard user={user}/>} />
      </Route>


{/* Routes Admin */}
      <Route element={<ProtectedRoute isAllowed={!!user } />}>
        <Route path='/admin/users' element={<AdminUsers user={user}/>} />
        <Route path='/admin/marchands' element={<AdminMarchands user={user}/>} />
      </Route>
      
        
{/* Route des pages */}
      <Route path='/' element={<Index />} />
      <Route path='parrainage/ajouter' element={<AddParrainage />} />
      <Route path='marchand/ajouter' element={<AddMarchand />} />
      <Route path='*' element={<NoMatch />} />

{/* Routes des modals */}
      <Route path="/" element={<Index />}>
        <Route element={<GuestLayout />}>
          <Route path="/passwordLost" element={<ModalPasswordLost />} />
          <Route path="/login" element={<ModalLogin />} />
          <Route path="/register" element={<ModalRegister />} />
        </Route>
      </Route>

    </Routes>

    {background && (
      <Routes>
        <Route path="/passwordLost" element={<ModalPasswordLost />} />
        <Route path="/login" element={<ModalLogin />} />
        <Route path="/register" element={<ModalRegister />} />
      </Routes>)}
  </>
  )
}

export default IndexRoutes