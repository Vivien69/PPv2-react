import './Assets/index.css';
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import IndexRoutes from './Routes/Index';
import React from 'react';

function App() {


  return (
    <div className="App">
      <Header />
        <IndexRoutes />
      <Footer />
    </div>
  );
}

export default App;

