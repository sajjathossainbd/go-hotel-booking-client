import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

function Root() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-332px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
