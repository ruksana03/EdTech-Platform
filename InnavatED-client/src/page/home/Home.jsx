import Banner from "../../components/Banner";
import NewsLetter from "./Newsletter";
import Popular from "./Popular";
import Reviews from "./Reviews";


const Home = () => {
  return (
    <div >
      <Banner />
      <Popular />
      <Reviews/>
      <NewsLetter/>
    </div>
  );
};
export default Home;