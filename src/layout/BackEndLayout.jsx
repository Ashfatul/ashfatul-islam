import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import { VscListSelection } from "react-icons/vsc";

export default function BackEndLayout() {
   return (
      <>
         <div className="header p-3 flex justify-between items-center bg-slate-600 text-white">
            <NavLink to="/root" className="text-3xl">
               Ashfatul
            </NavLink>

            <NavLink to="/" target="_blank" className="text-xl hidden sm:block">
               View Website
            </NavLink>

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
