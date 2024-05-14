import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function RoomCard({ room }) {
  const { _id, room_description, room_images, availability, price_per_night } =
    room;
  return (
    <>
      {availability ? (
        <Link to={`/room-details/${_id}`}>
          <div className=" relative bg-gradient-to-tr from-black to-slate-500 rounded-lg">
            <img
              className=" rounded-lg h-96  bg-contain bg-center mix-blend-overlay"
              src={room_images}
              alt="Shoes"
            />
            <div className="absolute text-white bottom-10 px-9 text-center">
              <h2 className="text-3xl font-bold  font-playfair">
                {room_description}
              </h2>
              <h3 className="text-xl font-bold mt-3 flex gap-2 items-center justify-center">
                <p>Price: </p>
                <span className="p-2 rounded-lg bg-yellow-500 text-sm">
                  {price_per_night}$
                </span>
              </h3>
              {availability ? (
                <Link to={`/room-details/${_id}`}>
                  <button className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none">
                    Available Room
                  </button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </Link>
      ) : (
        <div className=" relative bg-gradient-to-tr from-black to-slate-500 rounded-lg">
          <img
            className=" rounded-lg h-96  bg-contain bg-center mix-blend-overlay"
            src={room_images}
            alt="Shoes"
          />
          <div className="absolute text-white bottom-10 px-9 text-center">
            <h2 className="text-3xl font-bold  font-playfair">
              {room_description}
            </h2>
            <h3 className="text-xl font-bold mt-3 flex gap-2 items-center justify-center">
              <p>Price: </p>
              <span className="p-2 rounded-lg bg-yellow-500 text-sm">
                {price_per_night}$
              </span>
            </h3>
            {availability ? (
              <Link to={`/room-details/${_id}`}>
                <button className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none">
                  Available Room
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default RoomCard;
