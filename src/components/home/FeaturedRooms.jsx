import { useLoaderData } from "react-router-dom";
import FeaturedRoomCard from "./FeaturedRoomCard";
import Swal from "sweetalert2";

function FeaturedRooms() {
  const roomsData = useLoaderData();

  const handleOnBookNow = (room) => {
    // send data to the server
    fetch("http://localhost:5000/my-booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(room),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "My Booking Room Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          alert("Failed to add My Booking Room"); // Optionally, handle failure
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Optionally, handle error
      });
  };
  return (
    <>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        Featured Rooms
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {roomsData.slice(0, 3).map((room) => (
          <FeaturedRoomCard
            key={room._id}
            room={room}
            onBookNow={handleOnBookNow}
          />
        ))}
      </div>
    </>
  );
}

export default FeaturedRooms;
