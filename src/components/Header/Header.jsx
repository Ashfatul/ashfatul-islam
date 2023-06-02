import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
   const menuItems = (
      <>
         <li>
            <NavLink
               to="#about"
               className="py-2 px-4 lg:py-4 text-gray-400 font-bold uppercase hover:bg-transparent hover:text-blue-500 focus:text-blue-700 focus:bg-transparent"
            >
               About
            </NavLink>
         </li>
         <li>
            <NavLink
               to="#skills"
               className="py-2 px-4 lg:py-4 text-gray-400 font-bold uppercase hover:bg-transparent hover:text-blue-500 focus:text-blue-700 focus:bg-transparent"
            >
               Skills
            </NavLink>
         </li>
         <li>
            <NavLink
               to="#projects"
               className="py-2 px-4 lg:py-4 text-gray-400 font-bold uppercase hover:bg-transparent hover:text-blue-500 focus:text-blue-700 focus:bg-transparent"
            >
               Projects
            </NavLink>
         </li>
         <li>
            <NavLink
               to="#contacts"
               className="py-2 px-4 lg:py-4 text-gray-400 font-bold uppercase hover:bg-transparent hover:text-blue-500 focus:text-blue-700 focus:bg-transparent"
            >
               Contacts
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/auth"
               className="py-2 px-4 lg:py-4 text-gray-400 font-bold uppercase hover:bg-transparent hover:text-blue-500 focus:text-blue-700 focus:bg-transparent"
            >
               Admin
            </NavLink>
         </li>
      </>
   );
   return (
      <Headroom>
         <div className="shadow-sm bg-white">
            <div className="container">
               <div className="navbar min-h-fit p-0 flex justify-between">
                  <div className="">
                     <Link
                        to="/"
                        className="text-2xl font-bold uppercase text-blue-500 hover:text-blue-700"
                     >
                        Ashfatul
                     </Link>
                  </div>

                  <div className="dropdown dropdown-end">
                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"
                           />
                        </svg>
                     </label>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                     >
                        {menuItems}
                     </ul>
                  </div>

                  <div className="hidden lg:flex">
                     <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                  </div>
               </div>
            </div>
         </div>
      </Headroom>
   );
}
