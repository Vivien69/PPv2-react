import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Members/Auth/Session/AuthContext';
import { useEffect, useState } from 'react';
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import { useAuth } from '../Members/Auth/Session/useAuth';
import { csrf } from '../Services/Api';
import httpClient from '../Services/ApiClient';
import Menu from '../Members/Admin/Components/Menu'
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  location.pathname == '/dashboard'  ? location.pathname = '/' : ''

  const [ admin, setAdmin ] = useState(null)
  const [ isAdmin, setIsAdmin ] = useState(false)
  const { token, user } = useAuthContext();
  const { getUserData } = useAuth();

  useEffect(() => {
    if(admin) {
      if(!token || !isAdmin) {
        navigate('/')
      }

    }
  }, [admin])

  useEffect(() => {
      getRole();
    
  }, [])


  const getRole = () => {
    csrf()
    httpClient.post('/api/users/private', {token})
    .then(res => {
      console.log(res.data)
      setAdmin(res.data);
      setIsAdmin(res.data.role == 'ADMIN' ? true : false);
    })
    .catch(e => {
        switch (e.response?.status) {
            case 422:
                return e.response.data.errors
            break;
            default:
                return 'Serveur inaccessible';
            break;
        }
    })
}

  
     
  if(token) {
    return <div>
      
      <Header />
      <Menu />
      
        {isAdmin && <Outlet />}
      <Footer />
  </div>
  }
  

};

export default ProtectedRoute;

// import { useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom'
// import { ImSpinner9 } from 'react-icons/im';
// import { useEffect } from 'react';


// const ProtectedRoute = ({isAllowed, redirectPath = '/', children}) => {
//   const navigate = useNavigate();
//   const [userSession, setUserSession] = useState(null)
  
//   useEffect(() => {
//     if(isAllowed)
//       setUserSession(true) 
//     if(isAllowed === false)
//       setUserSession(false)  

//     userSession === false ? navigate('/') : ''
    
//   }, [isAllowed, userSession])

//   if (userSession === null) {
//     return(
//     <div className='flex justify-center p-5'>
//       <ImSpinner9 className='animate-spin text-3xl' />
//     </div>)
//   } else
//     return children ? children : <Outlet />;
  

 
// };

//   export default ProtectedRoute;