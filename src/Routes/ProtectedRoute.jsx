import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { ImSpinner9 } from 'react-icons/im';
import { useEffect } from 'react';


const ProtectedRoute = ({isAllowed, redirectPath = '/', children}) => {
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(null)
  
  useEffect(() => {
    setUserSession(isAllowed)  
    
  }, [isAllowed])

  if (userSession === null) {
    return(
    <div className='flex justify-center p-5'>
      <ImSpinner9 className='animate-spin text-3xl' />
    </div>)
  } else
    return children ? children : <Outlet />;
  

 
};

  export default ProtectedRoute;