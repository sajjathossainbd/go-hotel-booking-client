/* eslint-disable react/prop-types */

function FeaturedRoomCard({ room, onBookNow }) {
  const { room_images, room_description } = room;
  
  const handleBookNow = () => {
    onBookNow(room)
  }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="relative">
          <figure className="">
            <img
              src={room_images}
              alt="estate image"
              className="rounded-t-lg"
            />
          </figure>
        </div>

        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{room_description}</h2>
          </div>

          {/* border */}
          <div className="border-dashed border-[0.8px] border-[#13131326] my-2"></div>

          {/* ending */}
          <div className="card-actions justify-end">
            <button onClick={handleBookNow} className="btn btn-outline">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRoomCard;
