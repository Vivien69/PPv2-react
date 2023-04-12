import { Fragment } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../Members/Auth/Session/AuthContext';
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

  function GuestLayout() {
    
    const { token } = useAuthContext()

    if(token) {
      return <Navigate to='/' />
    }

  return <>
      <Header/>
        <Outlet />
      <Footer />
  </>

};

export default GuestLayout;