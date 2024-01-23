/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from 'react-icons/rx';
import { FaGraduationCap } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useState } from "react";
import NavLinkMenu from "./NavLinkMenu";
import useTheme from "../../hooks/useTheme";

const Navbar = ({ children }) => {
  // const [active, setActive] = useState(true);
  const {changeTheme,mode} = useTheme()

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
          <div className="w-full navbar flex items-center justify-between lg:flex-row flex-row-reverse border-b bg-base-300 text-white sticky inset-0 z-10 lg:px-40">
            <div className="flex-none lg:hidden text-black">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="px-2 mx-2">
              <Link to="/">
                <article className="font-bold flex items-center text-black  ">
                  <FaGraduationCap className="text-2xl text-first mr-1" />
                  Innavate <span className="text-first">ED</span>
                </article>
              </Link>
            </div>
            <NavLinkMenu />
            <div className="hidden lg:block">
              <div className="flex items-center justify-center gap-4">
                <button onClick={changeTheme} className="swap swap-rotate text-black">
                  {
                    mode === "dark" ? <FiSun className="w-8 h-8" /> : <MdOutlineDarkMode className="w-8 h-8" />
                  }
                </button>
                <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Login</button>
              </div>
            </div>
          </div>
          {children}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
