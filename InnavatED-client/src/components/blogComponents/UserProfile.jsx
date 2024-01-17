import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/slickArrow.css'



const UserProfile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };
    
    return (
        <Slider {...settings}>
            {/* <div className="flex gap-2 mx-2 mt-2"> */}

            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>

            {/* </div> */}
        </Slider>
    );
};

export default UserProfile;