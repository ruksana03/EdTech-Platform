import { FiSun } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";
import ManuList from "../../shared/ManuList";
import { MdOutlineDarkMode } from "react-icons/md";

const Sidebar = () => {
    const { changeTheme, mode } = useTheme()
    return (
        <>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu w-80 min-h-full dark:bg-zinc-800 bg-blue-50 flex items-start pl-12 text-black dark:text-gray-400 relative">
                    <button onClick={changeTheme} className="swap swap-rotate absolute top-2 right-6">
                        {
                            mode === "dark" ? <FiSun className="w-8 h-8 text-white" /> : <MdOutlineDarkMode className="w-8 h-8 text-black" />
                        }</button>
                    <ManuList address={'/'} linkTitle={"Home"} />
                    <ManuList address={'all-courses'} linkTitle={"All Courses"} />
                    <ManuList address={'blog'} linkTitle={"Blog"} />
                    <ManuList address={'contact'} linkTitle={"Contact"} />
                    <button className=" text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Login</button>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;