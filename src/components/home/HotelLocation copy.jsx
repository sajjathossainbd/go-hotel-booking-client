import { Draggable, Map } from "pigeon-maps";
import { useState } from "react";
import Hotel from "./../../assets/logo.png";

function HotelLocation() {
  const [anchor, setAnchor] = useState([42.2409, 83.2697]);
  return (
    <div className="rounded-lg">
      <Map height={300} defaultCenter={[42.2409, 83.2697]} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <img src={Hotel} width={100} height={95} alt="Pigeon!" />
        </Draggable>
      </Map>
    </div>
  );
}

export default HotelLocation;
