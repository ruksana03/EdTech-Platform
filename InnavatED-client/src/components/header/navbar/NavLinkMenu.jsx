import ManuList from "../../shared/ManuList";

const NavLinkMenu = () => {
    return (
        <>
            <div className="flex-none hidden lg:block ">
                <ul className="menu menu-horizontal flex text-black">
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={"Home"}  />
                    <ManuList address={'all-courses'} linkTitle={"All Courses"}  />
                    <ManuList address={'blog'} linkTitle={"Blog"}  />
                    <ManuList address={'contact'} linkTitle={"Contact"} />
                </ul>
            </div>
        </>
    );
};

export default NavLinkMenu;