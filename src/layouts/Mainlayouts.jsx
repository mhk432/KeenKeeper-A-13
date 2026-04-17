import React, { Suspense } from 'react';
import Home from '../components/home/Home';
import Navbar from '../components/nabar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Mainlayouts = () => {
    return (
        <div className=' mt-20'>
       <Suspense fallback={<div className='text-center 
       my-20 text-5xl font-bold'><span className="loading loading-spinner
       loading-xl text-blue-600 text-6xl"></span></div>}>

            <div className='sm:px-4 lg:px-20 '>
      <Navbar></Navbar>
            </div>
      <div className='px-8 lg:px-40'>

      <Outlet></Outlet>
      </div>
       </Suspense>
        
       <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;