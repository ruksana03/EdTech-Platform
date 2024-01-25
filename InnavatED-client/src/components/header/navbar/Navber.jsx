/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from 'react-icons/rx';
import { FaGraduationCap } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import NavLinkMenu from "./NavLinkMenu";
import useTheme from "../../hooks/useTheme";
import Sidebar from './Sidebar';

const Navbar = ({ children }) => {
  const { changeTheme, mode } = useTheme()
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active)
  }
  // const navLinks = (
  //   <>
  //     <li className="font-medium text-base">
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className="font-medium text-base">
  //       <Link to="/all-courses">All Courses</Link>
  //     </li>
  //     <li className="font-medium text-base">
  //       <Link to="/blog">Blog</Link>
  //     </li>
  //     <li className="font-medium text-base">
  //       <Link to="/contact">Contact</Link>
  //     </li>
  //   </>
  // );
  // <div className="navbar section-container  py-2 bg-third">
  //       <div className="navbar-start">
  //         <div className="dropdown">
  //           <label tabIndex={0} className="btn btn-ghost lg:hidden">
  //             <IoMenu className="text-2xl" />
  //           </label>
  //           <ul
  //             tabIndex={0}
  //             className="menu menu-sm dropdown-content mt-3  p-1 shadow bg-base-100 rounded-box w-52 z-50"
  //           >
  //             {navLinks}
  //           </ul>
  //         </div>
  //         <a className="font-bold flex items-center  ">
  //           <FaGraduationCap className="text-2xl text-first mr-1" />
  //           Innavate <span className="text-first">ED</span>
  //         </a>
  //       </div>
  //       <div className="navbar-center hidden lg:flex">
  //         <ul className="menu menu-horizontal px-1">{navLinks}</ul>
  //       </div>
  //       <div className="navbar-end">
  //         <button className="btn btn-sm btn-style">Login</button>
  //       </div>
  //     </div>
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar flex items-center px-3 justify-between lg:flex-row lg:justify-between border-b dark:border-first dark:bg-zinc-800 bg-base-300 text-white sticky inset-0 z-10 lg:px-40">
            <div className="flex-none lg:hidden dark:text-white text-black">
              {/* <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost"> */}
              <div className={`w-72 md:w-96 z-10 h-[100vh] fixed bg-blue-50 dark:bg-zinc-800 dark:text-gray-400 inset-0 lg:hidden transition-all duration-200 ${active && '-translate-x-full dark:bg-zinc-800 bg-white'}`}>
                <Sidebar handleClick={handleClick} />
              </div>
              <button onClick={handleClick} className="block text-black lg:hidden text-3xl cursor-pointer  dark:text-gray-400" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
              {/* </label> */}
            </div>
            <div className="px-2 mx-2">
              <Link to="/">
                <article className="font-bold flex items-center dark:text-gray-400 text-black  ">
                  <FaGraduationCap className="text-2xl dark:text-green-500 text-first mr-1 " />
                  Innavate <span className="dark:text-green-500 text-first">ED</span>
                </article>
              </Link>
            </div>
            <NavLinkMenu />
            <div>
              {/* user profile  */}
              <div className="w-full lg:hidden block">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-44 relative right-1">
                    <li><Link to='/dashboard' className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Dashboard</Link> </li>
                    <li><button className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-red-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Logout</button></li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center justify-center gap-4">
                  {/* {
                    user ? <></> : <> */}
                  <button onClick={changeTheme} className="swap swap-rotate ">
                    {
                      mode === "dark" ? <FiSun className="w-8 h-8 text-white" /> : <MdOutlineDarkMode className="w-8 h-8 text-black" />
                    }
                  </button>
                  <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 hover:dark:text-gray-400">Login</button>
                  {/* </>
                  } */}
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Navbar;
