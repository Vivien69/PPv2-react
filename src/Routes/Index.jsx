import React, { Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Index from '../Layouts/Index'
import Dashboard from '../Members/Index'
import AddParrainage from '../Members/Pages/Add/Parrainage'
import AddMarchand from '../Members/Pages/Add/Marchand/Index'

//MODAL LOGIN REGISTER
import ModalLogin from '../Modal/ModalLogin';
import ModalRegister from '../Modal/ModalRegister'
import ModalPasswordLost from '../Modal/ModalpasswordLost';
import NoMatch from './NoMatch'

import AuthLayout from '../Layouts/Components/AuthLayout'
import GuestLayout from '../Layouts/Components/GuestLayout'
import ProtectedRoute from './ProtectedRoute'
import useAuthContext from '../Context/AuthContext';


//ADMINISTRATION

import AdminUsers from '../Members/Admin/Users/Users'
import AdminMarchands from '../Members/Admin/Marchands//Marchands'

function IndexRoutes() {

  const { user } = useAuthContext();

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
    
    <Routes location={background || location}>
      <Route path="/" element={<Index />}>
        <Route element={<GuestLayout />}>
          <Route path="/passwordLost" element={<ModalPasswordLost />} />
          <Route path="/login" element={<ModalLogin />} />
          <Route path="/register" element={<ModalRegister />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute isAllowed={!!user} />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>


      <Route element={<ProtectedRoute isAllowed={!!user && user.role.includes('ADMIN')}  />}>
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/marchands' element={<AdminMarchands />} />
      </Route>
      
        

          <Route path='/' element={<Index />} />
          <Route path='parrainage/ajouter' element={<AddParrainage />} />
          <Route path='marchand/ajouter' element={<AddMarchand />} />
          <Route path='*' element={<NoMatch />} />

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