import BlogSettings from "../../components/blogComponents/BlogSettings";
import ShowBlogs from "../../components/blogComponents/ShowBlogs";
import BlogRightSide from "./BlogRightSide";


const Blog = () => {
    return (
        <div className="section-container grid grid-cols-12 gap-4 py-2 w-11/12 mx-auto">
            <div className=" hidden md:block lg:block col-span-2 border-e-[1px] border-[#0B4534]">
                <BlogSettings />
            </div>
            <div className="col-span-6 ">
                <ShowBlogs />
            </div>
            <div className="col-span-4 border-2">
                <BlogRightSide />
            </div>
        </div>
    );
};

export default Blog;