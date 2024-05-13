function Banner() {
  return (
    <div>
      <div className="carousel w-full mt-5">
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
            <div className="text-white ml-20">
              <h2 className="text-5xl mb-2 font-bold">
                Stay in Style with GoHotel
              </h2>
              <p className="">
                Experience Luxury at Every Turn. Explore Our Premium Hotel Rooms{" "}
                <br />
                and Book Your Dream Getaway Today!
              </p>
              <button className="btn bg-[#FA5D3F] hover:bg-[#d35036] text-white mr-4 px-5 border-none mt-6">
                Booking Now
              </button>
            </div>
          </div>
          <img
            src="https://i.ibb.co/SNZM0nF/1.png"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
          <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
            <div className="text-white ml-20">
              <h2 className="text-5xl mb-2 font-bold">
                Your Gateway to Luxury Living
              </h2>
              <p className="">
                Discover Opulent Comforts and Seamless Hospitality in Our Range
                of <br /> Exquisite Hotel Rooms. Book Now for Unforgettable
                Stays!
              </p>
              <button className="btn bg-[#FA5D3F] hover:bg-[#d35036] text-white mr-4 px-5 border-none mt-6">
                Booking Now
              </button>
            </div>
          </div>
          <img
            src="https://i.ibb.co/KbmrCPZ/2.png"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
          <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
            <div className="text-white ml-20">
              <h2 className="text-5xl mb-2 font-bold">
                Discover Your Perfect Stay
              </h2>
              <p className="">
                Indulge in Comfort and Luxury with Our Exquisite Hotel Rooms.{" "}
                <br /> Book Now for Unforgettable Experiences!
              </p>
              <button className="btn bg-[#FA5D3F] hover:bg-[#d35036] text-white mr-4 px-5 border-none mt-6">
                Booking Now
              </button>
            </div>
          </div>
          <img
            src="https://i.ibb.co/NtjZ0KS/3.png"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
