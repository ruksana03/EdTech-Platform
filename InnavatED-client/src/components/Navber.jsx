import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-medium text-base">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium text-base">
        <Link to="/all-courses">All Courses</Link>
      </li>
      <li className="font-medium text-base">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-medium text-base">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar section-container  py-2 bg-third">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <IoMenu className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-1 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {navLinks}
          </ul>
        </div>
        <a className="font-bold flex items-center  ">
          <FaGraduationCap className="text-2xl text-first mr-1" />
          Innavate <span className="text-first">ED</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-first btn-sm text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
