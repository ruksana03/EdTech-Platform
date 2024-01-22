// https://i.ibb.co/ypp2JK4/blog2.gif
// https://i.ibb.co/H2xjXhN/blog1.gif
import sticker from '../../assets/image/blog/sticker.png'
import post from '../../assets/image/blog/post.gif'
import { FaSignsPost } from "react-icons/fa6";
import person from '../../assets/image/blog/person.avif';
import { Link } from 'react-router-dom';
const BlogRightSide = () => {
    return (
        <div>
            <div className={`bg-[url('https://i.ibb.co/ypp2JK4/blog2.gif')] w-full h-40 bg-cover object-cover bg-no-repeat flex flex-col items-center justify-center gap-1`}>
                <figure className='avatar w-12 h-12 lg:w-14 lg:h-14 online placeholder'>
                    <img src={person} alt="user-photo" className='w-full h-full rounded-full border-4 border-white ' />
                </figure>
                <div className='text-[14px] lg:text-xl text-white text-center'>
                    <h1>Name: <span>Sushil</span></h1>
                    <h1>Email: <span>Sushil@gmail.com</span></h1>
                    <h1>Status: <span>active now</span></h1>
                </div>
            </div>
            {/* show your blog posts  */}
            <div>
                <h1 className="flex items-center justify-start gap-2 mt-7 mb-2 ml-3 text-[18px] text-bold">Show Your Blog Posts <FaSignsPost className="text-first text-2xl" /></h1>
                <hr />
                <div className="w-full h-auto relative overflow-hidden my-2">
                    <div className="w-16 h-12 absolute -left-8 -top-4 ">
                        <img src={sticker} alt="sticker" className='w-full h-full ' />
                    </div>
                    <div className="flex items-center justify-between md:justify-evenly lg:justify-around px-3">
                        <figure className=' w-16 lg:w-24 h-16 '>
                            <img src={person} alt="user-photo" className='w-full h-full border-4 border-white ' />
                        </figure>
                        <div>
                            <h1>Sushil</h1>
                            <h1>Sushil</h1>
                        </div>
                        <div>
                            <h1 className="font-bold">5 days ago</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto relative overflow-hidden">
                    <div className="w-16 h-12 absolute -left-8 -top-4 ">
                        <img src={sticker} alt="sticker" className='w-full h-full ' />
                    </div>
                    <div className="flex items-center justify-between md:justify-evenly lg:justify-around px-3">
                        <figure className=' w-16 lg:w-24 h-16 '>
                            <img src={person} alt="user-photo" className='w-full h-full border-4 border-white ' />
                        </figure>
                        <div>
                            <h1>Sushil</h1>
                            <h1>Sushil</h1>
                        </div>
                        <div>
                            <h1 className="font-bold">5 days ago</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto relative overflow-hidden my-2">
                    <div className="w-16 h-12 absolute -left-8 -top-4 ">
                        <img src={sticker} alt="sticker" className='w-full h-full ' />
                    </div>
                    <div className="flex items-center justify-between md:justify-evenly lg:justify-around px-3">
                        <figure className='w-16 lg:w-24 h-16 '>
                            <img src={person} alt="user-photo" className='w-full h-full border-4 border-white ' />
                        </figure>
                        <div>
                            <h1>Sushil</h1>
                            <h1>Sushil</h1>
                        </div>
                        <div>
                            <h1 className="font-bold">5 days ago</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-3'>
                    <button className='btn bg-first text-white hover:text-first hover:border-first'>Show All</button>
                </div>
            </div>
            {/* create your blog posts  */}
            <div>
                <h1 className='font-bold mt-5 ml-3'>Create a New Post </h1>
                <hr />
                <div className='flex items-center justify-center gap-5 mt-2'>
                    <a href="/create-blog" className='ml-1 text-blue-500 hover:text-first underline'>Click Here</a>
                    <Link to='/create-blog'>
                        <figure className='w-20 h-16 scale-y-150 mt-3'>
                            <img src={post} alt="post-image" className='w-full h-full' />
                        </figure>
                    </Link>
                </div>
            </div>
            {/* other more  */}
            <div className='ml-3'>
                <h1 className='ml-3 font-bold'>Other Blogger...</h1>
                <div className='mt-3 space-y-2'>
                    <div className='flex items-center justify-start gap-3'>
                        <figure className='avatar w-12 h-12 online placeholder'>
                            <img src={person} alt="person" className='w-full h-full rounded-full' />
                        </figure>
                        <h1>Sushil</h1>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <figure className='avatar w-12 h-12 online placeholder'>
                            <img src={person} alt="person" className='w-full h-full rounded-full' />
                        </figure>
                        <h1>Sushil</h1>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <figure className='avatar w-12 h-12 online placeholder'>
                            <img src={person} alt="person" className='w-full h-full rounded-full' />
                        </figure>
                        <h1>Sushil</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogRightSide;