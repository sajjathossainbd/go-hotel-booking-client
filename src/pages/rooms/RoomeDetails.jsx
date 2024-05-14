import { useLoaderData } from "react-router-dom";

function RoomeDetails() {
  const roomData = useLoaderData();
  console.log(roomData);
  return <div>RoomeDetails</div>;
}

export default RoomeDetails;
