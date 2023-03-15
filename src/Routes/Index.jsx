import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Index from '../Layouts/Index'
import Register from '../Members/Register'
import Login from '../Members/Login'
import Dashboard from '../Members/Index'
import AddParrainage from '../Members/Pages/Add/Parrainage'
import AddMarchand from '../Members/Pages/Add/Marchand'


function IndexRoutes() {


  return (
      <Routes>
          <Route  path='/' element={<Index />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/parrainage/ajouter' element={<AddParrainage />} />
          <Route path='/marchand/ajouter' element={<AddMarchand />} />
      </Routes>

  )
}

export default IndexRoutes