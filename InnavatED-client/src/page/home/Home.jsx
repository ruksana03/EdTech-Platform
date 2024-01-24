import Banner from "../../components/Banner";
import About from "./About";
import NewsLetter from "./Newsletter";
import Popular from "./Popular";
import Reviews from "./Reviews";


const Home = () => {
  return (
    <div >
      <Banner />
      <Popular />
      <Reviews />
      <About/>
      <NewsLetter/>
    </div>
  );
};
export default Home;