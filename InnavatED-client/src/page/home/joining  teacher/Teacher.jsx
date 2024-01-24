import Swal from 'sweetalert2';
import part from '../../../assets/image/teacher/part.jpg';
import teacher from '../../../assets/image/teacher/teacher.jpg';
import { FaArrowsLeftRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Teacher = () => {
    const handlePartApply = () => {
        Swal.fire({
            title: "Partner Avaiable Now!",
            text: "Please Try again from next week!",
            icon: "error"
          });
    }
    return (
        <div className='section-container'>
            <h1 className="text-4xl font-bold flex items-center gap-2 justify-center dark:text-gray-400"> are you a Teacher or Partner <span className="text-first">?</span></h1>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 w-full my-12'>
                <div className='w-full lg:w-1/2 h-[320px] md:h-[370px] lg:h-[460px] flex items-center justify-center bg-gradient-to-b from-first to-black rounded-xl border'>
                    <figure className='w-1/2 h-full'>
                        <img src={part} alt="partner-image" className='w-full h-full bg-first' />
                    </figure>
                    <div className='w-1/2 h-full p-7 space-y-3  flex items-start justify-center flex-col text-white dark:text-gray-400'>
                        <h1 className='text-2xl'>Become a Partner</h1>
                        <p> Do you want to join our organization as an associate? Confirm your request by clicking the button below.</p>
                        <button onClick={handlePartApply} className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white  dark:text-gray-400 hover:bg-transparent hover:text-green-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:border-2 border-2 border-first hover:border-first hover:scale-100 hover:dark:text-gray-400 flex items-center gap-2"><FaArrowsLeftRight className="text-2xl hidden md:block lg:block" />Apply Now</button>
                    </div>

                </div>
                <div className='w-full lg:w-1/2 h-[320px] md:h-[370px] lg:h-[460px] flex items-center justify-center flex-row-reverse lg:flex-row bg-gradient-to-b from-first to-black rounded-xl border'>
                    <figure className='w-1/2 h-full'>
                        <img src={teacher} alt="teacher-image" className='w-full h-full' />
                    </figure>
                    <div className='w-1/2 h-auto p-7 space-y-3 flex items-start justify-center flex-col text-white dark:text-gray-400'>
                        <h1 className='text-2xl '>Become a Partner</h1>
                        <p>Do you want to join our organization? confirm your request by clicking the button below.</p>
                       <Link to="/join-teacher">
                       <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white dark:text-gray-400 hover:bg-transparent hover:text-green-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:border-2 border-2 border-first hover:border-first hover:scale-100 hover:dark:text-gray-400 flex items-center gap-2"><FaArrowsLeftRight className="text-2xl hidden md:block lg:block" />Get Start</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;