import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import auth from "../firebase/firebase.config";
import { logOut } from "../Features/Utilities";
import { logoutUser } from "../Features/UserSlice";



const Navbar = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.data.user.user);
  console.log(user);

  const handleLogout = () => {
    logOut(auth)
    .then(()=> {
      console.log("successfully logout ");
      dispatch(logoutUser());
    }).catch((error)=>{
      console.log(error.massage);
    })
  }

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
        {
          user && <p>{user.name}</p>
        }
        {user ? <button onClick={handleLogout} className="btn btn-sm btn-style">Logout</button> : <Link to="/login"><button className="btn btn-sm btn-style">Login</button></Link>}

      </div>
    </div>
  );
};

export default Navbar;
