import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="flex">
      <div className="h-[100vh] bg-darkBlue w-[6.5rem] rounded-e-3xl sticky">
        <Navbar />
      </div>
      <main className="bg-light flex-1 overflow-auto">
        <div className="w-[80rem] m-auto pt-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
