import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Members/Auth/Session/AuthContext';
import { useEffect } from 'react';
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const GuestLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  location.pathname == '/dashboard'  ? location.pathname = '/' : ''

  const { token, user } = useAuthContext();

  useEffect(() => {
    if(!token) {
      navigate('/login',  {state:{background: location} })
    }
  }, [])

  
  
     
  if(token) {
    return <div>
      <Header />
        <Outlet />
      <Footer />
  </div>
  }
  

};

export default GuestLayout;