/* eslint-disable react/prop-types */
import { FiSun } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";
import ManuList from "../../shared/ManuList";
import { MdOutlineDarkMode } from "react-icons/md";

const Sidebar = ({ handleClick }) => {
    const { changeTheme, mode } = useTheme();

    return (
        <>
            <div>
                <ul className="menu dark:bg-zinc-800 bg-blue-50 flex gap-3 items-start pl-12 text-black dark:text-gray-400 relative">
                <div className="dropdown dropdown-hover mt-3 ml-10">
                  <div tabIndex={0} role="button">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
                    <div className="absolute right-3 top-2 flex items-center justify-end w-full gap-3">
                    <button onClick={changeTheme} className="swap swap-rotate">
                        {
                            mode === "dark" ? <FiSun className="w-8 h-8 text-white" /> : <MdOutlineDarkMode className="w-8 h-8 text-black" />
                        }</button>
                         <button onClick={handleClick} className=" ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    </div>
                    <ManuList address={'/dashboard/dashboard'} linkTitle={"Dashboard"} />
                    <ManuList address={'/'} linkTitle={"Home"} />
                    <ManuList address={'all-courses'} linkTitle={"All Courses"} />
                    <ManuList address={'blog'} linkTitle={"Blog"} />
                    <ManuList address={'contact'} linkTitle={"Contact"} />
                    <button className=" text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 hover:dark:text-gray-400 ">Login</button>
                    <li><button className="text-[18px] font-medium px-4 py-2 duration-200 transform  hover:bg-transparent hover:border-none bg-red-600 text-white hover:text-red-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Logout</button></li>
                  
                </ul>
            </div>
        </>
    );
};

export default Sidebar;