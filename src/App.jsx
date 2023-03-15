import './Assets/index.css';
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import IndexRoutes from './Routes/Index';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <React.StrictMode>
        <IndexRoutes />
      </React.StrictMode>

      <Footer />
    </div>
  );
}

export default App;

