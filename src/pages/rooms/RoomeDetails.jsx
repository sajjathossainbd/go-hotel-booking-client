import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function RoomeDetails() {
  const roomData = useLoaderData();
  const navigate = useNavigate();

  const {
    room_description,
    price_per_night,
    room_size,
    availability,
    room_images,
    special_offers,
    reviews,
  } = roomData;

  const handleBookNow = () => {
    // send data to the server
    fetch("http://localhost:5000/my-booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Booking Room Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/my-bookings");
        } else {
          alert("Failed to add Booking Room"); // Optionally, handle failure
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Optionally, handle error
      });
  };

  return (
    <>
      <Helmet>
        <title>GoHotel Booking - Rooms Details</title>
      </Helmet>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        Room Details
      </h2>
      <div className="grid lg:grid-cols-2 max-sm:px-6 gap-10 my-10 items-center justify-center">
        <div className=" rounded-lg flex items-center justify-center py-16">
          <img className="rounded-lg h-full" src={room_images} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold my-2">{room_description}</h2>

          <div className="border-b-[0.2px] border-solid my-2"></div>
          <p className="text-lg">
            Room Size: <span className="font-bold">{room_size}</span>
          </p>
          <p className="text-lg">
            Per Night Cost: <span className="font-bold">{price_per_night}</span>
          </p>
          <p className="text-lg">
            availability:{" "}
            <span className="font-bold">
              {availability ? "Available Room" : "Not Available"}
            </span>
          </p>
          <p className="text-lg">
            Special Offers:
            <span className="font-bold">
              {special_offers[0]}, {special_offers[1]}
            </span>
          </p>
          <div className="">
            <div className="border-b-[0.2px] border-solid my-2"></div>
            {reviews.map((review) => (
              <div key={review._id} className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-lg">
                  User:
                  <span className="font-bold"> {review.user}</span>
                </p>
                <p className="text-lg">
                  Rating:
                  <span className="font-bold"> {review.rating}</span>
                </p>
                <p className="text-lg">
                  Comment:
                  <span className="font-bold"> {review.comment}</span>
                </p>
              </div>
            ))}
          </div>
          <Link to={``}>
            <button
              onClick={handleBookNow}
              className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RoomeDetails;
