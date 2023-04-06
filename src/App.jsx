import './Assets/index.css';
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import IndexRoutes from './Routes/Index';
import React from 'react';
import { AuthContext } from './Members/Auth/Session/AuthContext';
import { useAuth } from './Members/Auth/Session/useAuth';
import { useEffect } from 'react';

function App() {
  const { user, setUser, getItem } = useAuth();
  useEffect(() => {
    if(!user)
      setUser(JSON.parse(getItem('user')))
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className='text-slate-900 body-font font-nunito App'>
        <Header user={user}/>

          <IndexRoutes user={user} />

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;

