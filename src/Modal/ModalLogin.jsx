import { useNavigate, useLocation } from "react-router-dom";
import Login from '../Members/Login'


const ModalLogin = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

 const closeModal = () => {
    
  if (window.history.state && window.history.state.idx > 0) {
    navigate(location.state.background.pathname);
  } else {
    navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
  }
}
  

  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 w-full h-screen z-50 flex items-center justify-center">

      <Login background={location.state.background} onClickcross={closeModal}/>
      
    </div>
  );
};

export default ModalLogin