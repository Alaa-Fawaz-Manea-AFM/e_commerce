import { Navigate, Outlet } from "react-router-dom";
import { beatsnoop } from "../assets";

const LayoutLoginAndSign = () => (
  <>
    {JSON?.parse(localStorage.getItem("uidUser")) ? (
      <Navigate to="/" />
    ) : (
      <div className="max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
        <div className="grid grid-cols-1 gap-10 items-center max-md:justify-items-center md:grid-cols-3 md:w-11/12">
          <div className="max-w-[805px] h-[781px] md:col-span-2 max-md:hidden">
            <img src={beatsnoop} alt="beatsnoop" />
          </div>
          <Outlet />
        </div>
      </div>
    )}
  </>
);

export default LayoutLoginAndSign;
