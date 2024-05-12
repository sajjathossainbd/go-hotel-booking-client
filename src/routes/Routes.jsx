import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Rooms from "../pages/rooms/Rooms";
import RoomeDetails from "../pages/rooms/RoomeDetails";
import MyBookings from "../pages/myBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/room-details",
        element: <RoomeDetails />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
    ],
  },
]);

export default router;
