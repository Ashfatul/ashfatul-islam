import { Link, NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import { VscListSelection } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../utility/AuthProvider";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Helmet } from "react-helmet";

export default function BackEndLayout() {
   const { logOut, user } = useContext(AuthContext);
   const handleLogout = () => {
      const confirmLogout = confirm("Are you sure you want to log out?");
      if (confirmLogout) {
         logOut();
         toastr.info("Logged out successfully");
      }
   };
   return (
      <>
         <Helmet>
            <title>{user.displayName || "SetUser"} | Portfolio</title>
         </Helmet>
         <div className="header p-3 flex justify-between items-center bg-slate-600 text-white">
            <Link to="/root" className="text-3xl text-white">
               Ashfatul
            </Link>

            <NavLink to="/" target="_blank" className="text-xl hidden sm:block">
               View Website
            </NavLink>

            <button className="btn" onClick={handleLogout}>
               Logout
            </button>

            <label
               htmlFor="sidebar"
               className="drawer-button bg-orange-500 hover:bg-orange-600 rounded-full p-3 lg:hidden"
            >
               <VscListSelection />
            </label>
         </div>
         <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-5 bg-gray-100">
               <Outlet />
            </div>
            <SideBar />
         </div>
      </>
   );
}
