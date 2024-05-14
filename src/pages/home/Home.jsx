import Banner from "../../components/home/Banner";
import FeaturedRooms from "../../components/home/FeaturedRooms";
import HotelLocation from "../../components/home/HotelLocation";
import NewsLetter from "../../components/home/NewsLetter";

function Home() {
  return (
    <div>
      <Banner />
      <FeaturedRooms />
      <HotelLocation />
      <NewsLetter />
    </div>
  );
}

export default Home;
