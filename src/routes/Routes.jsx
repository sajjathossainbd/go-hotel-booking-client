import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Rooms from "../pages/rooms/Rooms";
import RoomeDetails from "../pages/rooms/RoomeDetails";
import MyBookings from "../pages/myBookings/MyBookings";
import ContactUs from "../pages/ContactUs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/rooms"),
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
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "/room-details/:id",
        element: <RoomeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/my-booking"),
      },
    ],
  },
]);

export default router;
