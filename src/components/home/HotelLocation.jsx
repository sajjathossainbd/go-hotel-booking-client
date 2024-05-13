import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import { MdOutlineLocationCity } from "react-icons/md";

function HotelLocation() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <div className="my-10">
      <Map height={300} defaultCenter={[42.2409, 83.2697]} defaultZoom={11}>
        <Marker
          width={50}
          anchor={[42.2409, 83.2697]}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
        <Marker
          width={50}
          anchor={[42.2409, 83.2697]}
          color={color}
          onClick={() => setHue(hue + 20)}
        >
          <div className="flex items-center mt-14 ml-3">
            <MdOutlineLocationCity className="text-2xl" />
            <p className="font-bold">GoHotel Booking</p>
          </div>
        </Marker>
      </Map>
    </div>
  );
}

export default HotelLocation;
