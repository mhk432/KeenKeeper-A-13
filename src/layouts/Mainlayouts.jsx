import React from 'react';
import Home from '../components/home/Home';
import Navbar from '../components/nabar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Mainlayouts = () => {
    return (
        <div className='mx-20 mt-20'>
      <Navbar></Navbar>
      <div className='lg:px-40'>

      <Outlet></Outlet>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;