import { useTypewriter } from "react-simple-typewriter";
const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["Journey","Explore", "with", "Success!"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className=" min-h-[80vh] pt-12 section-container ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
          Begin Your
            <span className="font-bold   text-first ml-2">{typeEffect}</span>
          </h2>
          <p className="text-lg">
            Unlock a world of knowledge with our diverse range of educational
            resources and expert learning solutions. Your path to learning is
            just a click away.
          </p>
          <button className="btn btn-sm  bg-first text-white py-2 ">Get Started</button>
        </div>
        <div className="flex-1  ">
          <img
            className="rounded-md w-96   "
            src="https://i.ibb.co/XzWhnVL/Lime-Wire-AI-Studio-Asset.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
