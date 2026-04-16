import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { ImStatsDots } from 'react-icons/im';
import { MdAccessTime } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <NavLink to='/' className=" text-2xl font-bold">Keen<span 
    className='font-semibold'>Keeper</span></NavLink>
      
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2">
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `font-semibold text-[16px] mr-2 ${isActive
                        ? "text-white bg-green-500"
                        : ""
                    }`
                }
            ><HiOutlineHome className='text-xl' />
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/timeline"
                className={({ isActive }) =>
                    `font-semibold text-[16px] mr-2 ${isActive
                        ? "text-white bg-green-500"
                        : ""
                    }`
                }
            ><MdAccessTime   className='text-xl'/>
                Timeline
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/stats"
                className={({ isActive }) =>
                    `font-semibold text-[16px] mr-2 ${isActive
                        ? "text-white bg-green-500"
                        : ""
                    }`
                }
            ><ImStatsDots  className='text-xl' />
                Stats
            </NavLink>
        </li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;