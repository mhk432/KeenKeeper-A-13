import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { ImStatsDots } from 'react-icons/im';
import { MdAccessTime } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 font-semibold text-[16px] ${
            isActive ? "text-white bg-[#244D3F]" : ""
        } px-3 py-2 rounded-lg`;

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            
            {/* LEFT: Logo */}
            <div className="flex-1">
                <NavLink to='/' className="text-2xl font-bold">
                    Keen<span className='text-[#244D3F]'>Keeper</span>
                </NavLink>
            </div>

            {/* MOBILE MENU */}
            <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    ☰
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
                >
                    <li>
                        <NavLink to="/" className={linkClass}>
                            <HiOutlineHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timeline" className={linkClass}>
                            <MdAccessTime /> Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className={linkClass}>
                            <ImStatsDots /> Stats
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal gap-2">
                    <li>
                        <NavLink to="/" className={linkClass}>
                            <HiOutlineHome className="text-xl" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timeline" className={linkClass}>
                            <MdAccessTime className="text-xl" />
                            Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className={linkClass}>
                            <ImStatsDots className="text-xl" />
                            Stats
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;