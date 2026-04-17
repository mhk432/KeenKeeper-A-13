import React from 'react';
import instra from '../../assets/Instagram (1).png'
import x from '../../assets/Vector (6).png'


const Footer = () => {
    return (
        <footer className="mx-auto text-center bg-[#244D3F]
         text-gray-200 rounded-2xl mt-20">
          <div>

  <aside className='p-10 space-y-5'>
    <h1 className='text-6xl  font-bold'>KeenKeeper</h1>
    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture
       the relationships that matter most.</p>
              <h4 className='text-2xl font-semibold'>Social Links</h4>
               <div className='flex gap-4 mt-2 text-center  mx-auto justify-center'>
              <a href=""><img src={instra} alt="" className='bg-white p-2 rounded-full w-max' /></a>
              <a href=""><img className='bg-white p-3 rounded-full w-max' src={x} alt="" /></a>
              <a href=""> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                className=" bg-white p-2 rounded-full w-max">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg></a>
            </div>

  </aside>

            <div className="pb-5 divider divider-start px-20
         before:bg-gray-500 after:bg-gray-500 text-white">
  
        </div >
          <div className='pb-20 flex px-20 justify-between items-center gap-4 text-gray-200 '>
            <div>
               <p className='text-center text-sm text-gray-200'>Copyright © 2026 - All right reserved by DigiTools Ltd</p>

            </div>
            <div className='flex gap-2'>
              <p>Privacy Policy </p>
              <p>Policy </p>
              <p>Cookies</p>
            </div>
          </div>
          </div>
  

       
</footer>
    );
};

export default Footer;