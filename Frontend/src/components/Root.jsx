import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footers';

function Root() {
  return (
    <div>
    <Navbar />
    <div className="main-content">
      <Outlet /> 
    </div>
    <Footer />
  </div>
  )
}

export default Root
