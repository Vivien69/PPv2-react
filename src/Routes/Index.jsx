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
import Dashboard from '../Members/Index'
import Profil from '../Members/Pages/Profil/Profil'

import GuestLayout from './GuestLayout'
import AuthLayout from './AuthLayout'
import DefaultLayout from './DefaultLayout'

//ADMINISTRATION
import ProtectedRoute from './ProtectedRoute'
import AdminUsers from '../Members/Admin/Users/Users'
import AdminMarchands from '../Members/Admin/Marchands//Marchands'

function IndexRoutes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
    
    <Routes location={background || location}>
      
{/* Routes des membres */}
      <Route element={<AuthLayout/>}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profil/:userName/:tabsNav?' element={<Profil />} />
      </Route>


{/* Routes Admin */}
      <Route element={<ProtectedRoute />}>
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/marchands' element={<AdminMarchands />} />
      </Route>
      
        
{/* Route des pages */}
      <Route element={<DefaultLayout/>}>
        <Route path='/' element={<Index />} />
        <Route path='parrainage/ajouter' element={<AddParrainage />} />
        <Route path='marchand/ajouter' element={<AddMarchand />} />
        <Route path='*' element={<NoMatch />} />
      </Route>

      

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