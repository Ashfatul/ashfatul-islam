import { NavLink } from "react-router-dom";

export default function SingleProject() {
   return (
      <tr>
         <td>
            <div className="photo">
               <div className="mask mask-squircle w-12 h-12">
                  <img src="" alt="photo" />
               </div>
            </div>
         </td>
         <td>
            <div className="flex items-center space-x-3">
               <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">10/12/22</div>
               </div>
            </div>
         </td>
         <td className="hidden md:block">
            <p className="whitespace-break-spaces">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
               dolorum, eum labore fugiat, eos vero nisi necessitatibus
               quibusdam aperiam esse maxime adipisci, similique dolore
               consequatur magni repellat delectus optio atque!
            </p>
         </td>
         <td>React, Bootstarp</td>
         <th>
            <div className="flex gap-3">
               <NavLink
                  className="btn btn-primary btn-xs"
                  to={`/root/update-project/${"dynamic_id"}`}
               >
                  Update
               </NavLink>
               <button className="btn btn-warning btn-xs">Delete</button>
            </div>
         </th>
      </tr>
   );
}
