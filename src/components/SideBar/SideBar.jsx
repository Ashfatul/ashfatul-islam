import { NavLink } from "react-router-dom";

export default function SideBar() {
   return (
      <div className="drawer-side">
         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
         <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
               <NavLink to="update-profile">Update Profile</NavLink>
            </li>
            <li>
               <a>Sidebar Item 2</a>
            </li>
         </ul>
      </div>
   );
}
