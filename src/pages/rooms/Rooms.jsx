import { useLoaderData } from "react-router-dom";
import RoomCard from "../../components/rooms/RoomCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

function Rooms() {
  const roomsData = useLoaderData();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    setFilteredRooms(roomsData);
  }, [roomsData]);

  const handleFilter = () => {
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      const filtered = roomsData.filter(
        (room) => room.price_per_night >= min && room.price_per_night <= max
      );
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms(roomsData);
    }
  };

  return (
    <div>
      <Helmet>
        <title>GoHotel Booking - Rooms</title>
      </Helmet>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        All Rooms
      </h2>
      <div className="flex justify-center mb-4">
        <input
          type="number"
          placeholder="Min Price"
          className="input input-primary mr-2"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="input input-primary mr-2"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button
          className="btn bg-[#31C292] hover:bg-[#48a586] text-white border-none"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {filteredRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;
