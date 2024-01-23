import ManuList from "../../shared/ManuList";

const Sidebar = () => {
    return (
        <>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-80 min-h-full bg-blue-50 flex items-start pl-12 text-black">
                    <ManuList address={'/'} linkTitle={"Home"} />
                    <ManuList address={'all-courses'} linkTitle={"All Courses"}  />
                    <ManuList address={'blog'} linkTitle={"Blog"} />
                    <ManuList address={'contact'} linkTitle={"Contact"} />
                    <button className=" text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Login</button>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;