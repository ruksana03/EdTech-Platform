import Banner from "../../components/Banner";
import NewsLetter from "./Newsletter";
import Popular from "./Popular";
import Reviews from "./Reviews";
import Teacher from "./joining  teacher/Teacher";


const Home = () => {
  return (
    <div >
      <Banner />
      <Popular />
      <Teacher />
      <Reviews/>
      <NewsLetter/>
    </div>
  );
};
export default Home;