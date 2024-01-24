import { useState } from "react";
import ManuList from "../components/shared/ManuList";
import { RxCross1 } from "react-icons/rx";
import { FaAnglesLeft } from "react-icons/fa6";



const DashboardLayout = () => {
    const [isActive, setIsActive] = useState(false);

    const handleReverse = () => {
        setIsActive(!isActive)
    }
    return (
        <div>
            <div className={`flex items-center justify-between bg-base-300 w-[calc(100%-3rem)] py-2 md:w-[calc(100%-3rem)] ${isActive && 'md:w-[calc(100%-250px)] transition-all duration-200 lg:w-[calc(100%-48px)]'} lg:w-[calc(100%-240px)] float-right`}>
                <div>
                    <span onClick={handleReverse} className="flex items-center gap-0 cursor-pointer pl-5">
                        <FaAnglesLeft />
                    </span>
                    <div className={`z-10 pt-20 fixed flex flex-col justify-between pb-12 bg-blue-50 overflow-y-auto w-[48px] lg:w-[240px] h-screen px-2 inset-y-0 left-0 transform ${isActive && ' transition-all duration-200 w-[calc(100%-250px)] md:w-[250px] lg:w-[48px]'} lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                        {
                            isActive ? <RxCross1 onClick={handleReverse} className="absolute right-2 top-3 text-black text-2xl cursor-pointer block md:hidden lg:hidden" /> : ''
                        }
                    </div>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-full rounded-full" />
                        </div>
                    </div>
                    <ManuList address={'/'} linkTitle={"Home"} />
                    <ManuList address={'/'} linkTitle={"Home"} />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DashboardLayout;