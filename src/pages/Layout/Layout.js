// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Used to render the child routes
import Navbar from './Navbar';
import Footer from '../../components/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet /> 
      </main>
     <Footer/>
    </div>
  );
};

export default Layout;
