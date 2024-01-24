/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const DmanuList = ({ address, icon: Icon, linkTitle }) => {
    return (
        <>
            <NavLink
                to={address}
                className={({ isActive }) =>
                    ` flex items-center text-[18px] font-medium px-4 gap-1 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 my-2 hover:bg-blue-50 ${isActive ? ' border-[1px] border-blue-500 my-2' : ''
                    }`} >
                <span>{<Icon className="w-5 h-8 mr-1 " />}</span>
                {linkTitle}
            </NavLink>
        </>
    );
};

export default DmanuList;