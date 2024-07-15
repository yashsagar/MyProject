import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
const MainLayout = () => {
  return (
    <div className="bg-color-bg text-color-text min-h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
