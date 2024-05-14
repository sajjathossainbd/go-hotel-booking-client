import { useLoaderData } from "react-router-dom";
import FeaturedRoomCard from "./FeaturedRoomCard";

function FeaturedRooms() {
  const roomsData = useLoaderData();
  console.log(roomsData);
  return (
    <>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        Featured Rooms
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {roomsData.map((room) => (
          <FeaturedRoomCard key={room._id} room={room} />
        ))}
      </div>
    </>
  );
}

export default FeaturedRooms;
