import { CiSearch } from "react-icons/ci";
import { MdExplore } from "react-icons/md";


const BlogSettings = () => {
    return (
        <div className=" mt-6 w-11/12 mx-auto">
            <div className="flex gap-2 justify-start items-center">
                <CiSearch className="text-3xl"/>
                <p>Search</p>
            </div>
            <div className="flex gap-2 justify-start items-center">
                <MdExplore className="text-3xl"/>
                <p>Explore</p>
            </div>
            <div className="flex gap-2 justify-start items-center">
                <img className="h-7 w-7 rounded-full border border-[#0B4534] p-0.5" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
        </div>
    );
};

export default BlogSettings;