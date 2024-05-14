import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

function RoomeDetails() {
  const roomData = useLoaderData();
  const {
    _id,
    room_description,
    price_per_night,
    room_size,
    availability,
    room_images,
    special_offers,
  } = roomData;

  const { id } = useParams();

  const handleAvailable = (id, availability) => {
    console.log("click", id);
    // availability = false
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
          <Link to={``}>
            <button
              onClick={() => handleAvailable(_id, availability)}
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
