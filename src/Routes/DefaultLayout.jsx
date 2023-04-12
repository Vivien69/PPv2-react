import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const GuestLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
     
    return <div>
      <Header/>
        <Outlet />
      <Footer />
  </div>
  
  

};

export default GuestLayout;