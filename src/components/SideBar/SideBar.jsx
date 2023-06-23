import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaPen, FaUser } from "react-icons/fa";

export default function SideBar() {
   return (
      <div className="drawer-side">
         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
         <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
               <NavLink to="/root" className="flex gap-3" end>
                  <MdDashboardCustomize /> Dashboard
               </NavLink>
            </li>
            <li>
               <NavLink to="add-project" className="flex gap-3" end>
                  <FaPen /> Add New Project
               </NavLink>
            </li>
            <li>
               <NavLink to="manage-skills-category" className="flex gap-3" end>
                  <FaPen /> Skills Category
               </NavLink>
            </li>
            <li>
               <NavLink to="manage-skills" className="flex gap-3" end>
                  <FaPen /> Manage Skills
               </NavLink>
            </li>
            <li>
               <NavLink to="frontend-profile" className="flex gap-3" end>
                  <FaUser /> Frontend Profile
               </NavLink>
            </li>
            <li>
               <NavLink to="backend-profile" className="flex gap-3" end>
                  <FaUser /> Backend Profile
               </NavLink>
            </li>
            <li>
               <NavLink to="social-links" className="flex gap-3" end>
                  <FaUser /> Social Links
               </NavLink>
            </li>
         </ul>
      </div>
   );
}
