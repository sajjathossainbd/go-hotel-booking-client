import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useState } from "react";

function MyBookings() {
  const myBookingData = useLoaderData();

  const [myBooking, setMyBooking] = useState(myBookingData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gohotel-booking-server.vercel.app//my-booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = myBooking.filter((spot) => spot._id !== id);
              setMyBooking(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>GoHotel Booking - My Booking</title>
      </Helmet>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        My Booking
      </h2>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Room Description</th>
                <th>Price Per Night</th>
                <th>Room Size</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myBooking.map((book) => (
                <tr key={book._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={book?.room_images}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {book?.room_description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {book?.price_per_night}
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {book?.room_size}
                    </span>
                  </td>
                  <th>
                    <div className="flex gap-4">
                      <Link to={`/update-tourists-spot/${book._id}`}>
                        <button className="btn btn-accent btn-xs">
                          Update Date
                        </button>
                      </Link>
                      <button
                        className="btn btn-error btn-xs"
                        onClick={() => handleDelete(book._id)}
                      >
                        Review
                      </button>
                      <button
                        className="btn btn-error btn-xs"
                        onClick={() => handleDelete(book._id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
