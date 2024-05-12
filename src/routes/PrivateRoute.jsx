/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}>PrivateRoute</Navigate>;
}

export default PrivateRoute;
