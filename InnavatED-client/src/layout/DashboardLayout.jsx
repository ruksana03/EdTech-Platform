import { useState } from "react";
import ManuList from "../components/shared/ManuList";
import { RxCross1 } from "react-icons/rx";
import { SiBookstack } from "react-icons/si";
import { MdAssignmentAdd,MdBookmarks  } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { FaAnglesLeft } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import DmanuList from "../components/dashboard/dashboard menulist/DmanuList";
import { Link, Outlet } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";



const DashboardLayout = () => {
    const [isActive, setIsActive] = useState(false);
    const handleReverse = () => {
        setIsActive(!isActive)
    }
    return (
        <div>
            <div className={`flex items-center justify-between bg-base-300 w-[calc(100%-3rem)] py-2 md:w-[calc(100%-3rem)] ${isActive && 'md:w-[calc(100%-250px)] transition-all duration-200 lg:w-[calc(100%-48px)]'} lg:w-[calc(100%-250px)] float-right`}>
                <div>
                    <span onClick={handleReverse} className="flex items-center gap-0 cursor-pointer pl-5">
                        <FaAnglesLeft />
                    </span>
                    <div className={`z-10 fixed pt-3 bg-[#ffffff] overflow-y-auto w-[48px] lg:w-[240px] h-screen px-2 inset-y-0 left-0 transform ${isActive && ' transition-all duration-200 w-[calc(100%-250px)] md:w-[250px] lg:w-[48px]'} lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                        <Link to="/">
                            <article className="font-bold absolute left-[45%] right-1/2 top-4 dark:text-gray-400 text-black ">
                                <FaGraduationCap className="  dark:text-green-500 text-first text-4xl " /> <br />
                                <span className="dark:text-green-500 text-first absolute left-1/2 right-1/2 top-7">ED</span>
                            </article>
                        </Link>
                        <div className="pt-24">
                            {
                                isActive ? <RxCross1 onClick={handleReverse} className="absolute right-2 top-3 text-black text-2xl cursor-pointer block md:hidden lg:hidden" /> : ''
                            }
                            <DmanuList address={'my-class'} linkTitle={'My Class'} icon={SiBookstack} />
                            <DmanuList address={'research'} linkTitle={'Research'} icon={GiArchiveResearch} />
                            <DmanuList address={'assignment'} linkTitle={'Assignment'} icon={MdAssignmentAdd} />
                            <DmanuList address={'my-lab'} linkTitle={'My Lab'} icon={ImLab} />
                            <DmanuList address={'bookmark'} linkTitle={'Bookmark'} icon={MdBookmarks } />
                            <DmanuList address={'notes'} linkTitle={'Notes'} icon={GrNotes } />
                        </div>
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
            <div className={`bg-[#f1f5f9] w-full h-screen ${isActive ? ' md:ml-[250px] md:w-[calc(100%-250px)] lg:ml-[48px] lg:w-[calc(100%-48px)] transition-all duration-200 ' : 'ml-[48px] w-[calc(100%-48px)] md:ml-[48px] md:w-[calc(100%-48px)] lg:ml-[250px] lg:w-[calc(100%-250px)]'}`}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;