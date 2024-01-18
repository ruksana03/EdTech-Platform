import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import "../../Styles/scrollbar.css"




const PostedBlogs = () => {
    return (
        <div className="w-10/12 mx-auto pr-4 custom-scrollbar overflow-y-auto max-h-[80vh]">
            <div>
                <div className="flex gap-2 justify-start items-center">
                    <img className="h-12 w-12 my-2 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                    <p className="text-xs font-medium">Iraboti</p>
                </div>
                <img className="h-96 w-full" src="https://i.ibb.co/R2SX2Xj/pexels-engin-akyurt-2347380.jpg" alt="" />
                <div className="flex my-3 text-2xl gap-3 items-center justify-start">
                    <AiTwotoneLike />
                    <AiTwotoneDislike />
                    <FaCommentDots />
                    <CiShare2 />
                </div>
                <div className="flex gap-2 text-xs">
                    <p>USer-name</p>
                    <p>Captions</p>
                </div>
                <p>comment</p>
            </div>
            <div>
                <div className="flex gap-2 justify-start items-center">
                    <img className="h-12 w-12 my-2 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                    <p className="text-xs font-medium">Iraboti</p>
                </div>
                <img className="h-96 w-full" src="https://i.ibb.co/R2SX2Xj/pexels-engin-akyurt-2347380.jpg" alt="" />
                <div className="flex my-3 text-2xl gap-3 items-center justify-start">
                    <AiTwotoneLike />
                    <AiTwotoneDislike />
                    <FaCommentDots />
                    <CiShare2 />
                </div>
                <div className="flex gap-2 text-xs">
                    <p>USer-name</p>
                    <p>Captions</p>
                </div>
                <p>comment</p>
            </div>
            <div>
                <div className="flex gap-2 justify-start items-center">
                    <img className="h-12 w-12 my-2 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                    <p className="text-xs font-medium">Iraboti</p>
                </div>
                <img className="h-96 w-full" src="https://i.ibb.co/R2SX2Xj/pexels-engin-akyurt-2347380.jpg" alt="" />
                <div className="flex my-3 text-2xl gap-3 items-center justify-start">
                    <AiTwotoneLike />
                    <AiTwotoneDislike />
                    <FaCommentDots />
                    <CiShare2 />
                </div>
                <div className="flex gap-2 text-xs">
                    <p>USer-name</p>
                    <p>Captions</p>
                </div>
                <p>comment</p>
            </div>
        </div>
    );
};

export default PostedBlogs;