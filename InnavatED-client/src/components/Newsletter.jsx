import Lottie from 'lottie-react';
import newsletter from '../../public/newletter.json'
const NewsLetter = () => {
  return (
    <div className="my-20">
      <div className=" section-container py-8 md:py-12 grid place-content-center   ">
        <div className="lg:flex justify-start lg:gap-28">
          <div>
            <h1 data-aos="fade-up" className="font-bold text-5xl text-gray-800">
              Newsletter
            </h1>
            <p className="pt-8 md:pt-4 text-gray-600">
              Sign up for our newsletter and get weekly updates. We only send
              emails about our latest courses once a week every
              Friday.
            </p>
            <form className="mt-8 md:flex justify-start md:gap-4">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="placeholder-gray-600 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none"
                required
              />
              <button
                data-tip="subscribe now"
                className="w-full md:w-auto bg-first text-white px-8 py-4 border rounded-md hover:bg-second tooltip  font-semibold mt-4 md:mt-0  "
              >
                Subscribe
              </button>
            </form>
            <p className="pt-4 text-xs text-gray-600">
              Read our privacy policy
            </p>
          </div>
          <div className="pt-8 lg:pt-0">
             <Lottie animationData={newsletter}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
