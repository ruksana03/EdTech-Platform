import { useState } from "react";
import BlogSettings from "../../components/blogComponents/BlogSettings";
import ShowBlogs from "../../components/blogComponents/ShowBlogs";
import BlogRightSide from "./BlogRightSide";
import { BsThreeDotsVertical } from "react-icons/bs";

const Blog = () => {
    const [active, setActive] = useState(true);
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <div className="section-container grid grid-cols-12 gap-4 w-11/12 mx-auto">
            <div>
                <BsThreeDotsVertical onClick={handleClick} className="block text-black lg:hidden text-3xl ml-3 mt-2 cursor-pointer" />
                <div className={`w-[250px] z-10 h-[93vh] mt-[7%] fixed bg-blue-50 inset-0 transition-all duration-200 ${active && '-translate-x-full bg-white'}`}>
                    <button onClick={handleClick} className=" hover:text-red-600 text-black absolute right-0 top-0 pr-2 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <BlogSettings />
                </div>
                <div className=" hidden lg:block col-span-2 border-e-[1px] border-[#0B4534]">
                    <BlogSettings />
                </div>
            </div>
            <div className="col-span-2 md:col-span-6 md:px-3 py-2 lg:col-span-6 ">
                <ShowBlogs />
            </div>
            <div className="md:col-span-4 lg:col-span-4 border-2">
                <BlogRightSide />
            </div>
        </div>
    );
};

export default Blog;