import './Assets/index.css';
import IndexRoutes from './Routes/Index';
import React from 'react';
import { AuthProvider } from './Members/Auth/Session/AuthContext';

function App() {

  return (
    <AuthProvider>
      <div className='text-slate-900 body-font font-nunito App'>
          <IndexRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;

