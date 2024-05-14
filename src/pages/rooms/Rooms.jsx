import { useLoaderData } from "react-router-dom";
import RoomCard from "../../components/rooms/RoomCard";
import { Helmet } from "react-helmet-async";

function Rooms() {
  const roomsData = useLoaderData();
  console.log(roomsData);
  return (
    <div>
      <Helmet>
        <title>GoHotel Booking - Rooms</title>
      </Helmet>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        All Rooms
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {roomsData.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;
