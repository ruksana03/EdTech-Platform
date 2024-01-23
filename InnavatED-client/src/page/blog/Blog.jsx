import { useState } from "react";
import BlogSettings from "../../components/blogComponents/BlogSettings";
import ShowBlogs from "../../components/blogComponents/ShowBlogs";
import BlogRightSide from "./BlogRightSide";
import { IoIosNotifications } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const Blog = () => {
    const [active, setActive] = useState(true);
    const [rActive, setRActive] = useState(true)
    const handleClick = () => {
        setActive(!active)
    }
    const RhandleClick = () => {
        setRActive(!rActive)
    }
    return (
        <div className="section-container grid grid-cols-12 gap-4 w-11/12 mx-auto">
            <div className="col-span-0 md:col-span-0 lg:col-span-1">
                <BsThreeDotsVertical onClick={handleClick} className="block text-black lg:hidden text-3xl mt-2 cursor-pointer dark:bg-zinc-800 dark:text-gray-400" />
                <div className={`w-[250px] z-10 h-[100vh]  md:h-[94vh] md:mt-[7%] fixed bg-blue-50 dark:bg-zinc-800 dark:text-gray-400 inset-0 transition-all duration-200 ${active && '-translate-x-full bg-white'}`}>
                    <button onClick={handleClick} className=" hover:text-red-600 text-black absolute right-0 top-0 pr-2 pt-1 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <BlogSettings />
                </div>
                <div className=" hidden lg:block">
                    <BlogSettings />
                </div>
            </div>
            <div className="col-span-9 px-3 md:col-span-6 py-2 lg:col-span-7 border-e-[1px] border-s-[1px] border-[#0B4534] mb-4">
                <ShowBlogs />
            </div>
            <div className="col-span-1 md:col-span-5 lg:col-span-4 ">
                <IoIosNotifications onClick={RhandleClick} className="block text-black md:hidden lg:hidden text-3xl mt-2 cursor-pointer  dark:text-gray-400" />
                <div className={`w-full z-10 h-[100vh] overflow-y-auto  fixed bg-blue-50 dark:bg-zinc-800 dark:text-gray-400 inset-0 lg:hidden transition-all duration-200 ${rActive && 'translate-x-full dark:bg-zinc-800 bg-white'}`}>
                    <button onClick={RhandleClick} className=" text-red-600 absolute left-0 top-0 pr-2 px-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <BlogRightSide />
                </div>
                <div className=" hidden md:block lg:block ">
                    <BlogRightSide />
                </div>
            </div>
        </div>
    );
};

export default Blog;