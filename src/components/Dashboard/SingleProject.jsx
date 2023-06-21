import { NavLink } from "react-router-dom";
import SingleTag from "./SingleTag";

export default function SingleProject({ project, refetch }) {
   const { _id, title, photo, description, tags, date } = project;

   const handleDelete = (id, refetch) => {
      const ask = confirm("Are you sure to delete?");
      if (ask) {
         fetch(`https://ashfatul-islam-server.vercel.app/project/${id}`, {
            method: "DELETE",
         });
         refetch();
      }
   };
   return (
      <tr>
         <td>
            <div className="photo">
               <div className="w-20 h-20">
                  <img src={photo} alt={title} />
               </div>
            </div>
         </td>
         <td>
            <div className="flex items-center space-x-3">
               <div className="whitespace-break-spaces">
                  <div className="font-bold">{title}</div>
                  <div className="text-sm opacity-50">{date}</div>
                  <div className="max-w-[300px] flex flex-wrap mt-3">
                     {tags?.map((t) => (
                        <SingleTag tag={t} key={t} />
                     ))}
                  </div>
               </div>
            </div>
         </td>
         <td className="hidden md:table-cell">
            <div className="description">
               <p className="whitespace-break-spaces">{description}</p>
            </div>
         </td>

         <td>
            <div className="flex gap-3">
               <NavLink
                  className="btn btn-primary btn-xs"
                  to={`/root/update-project/${_id}`}
               >
                  Update
               </NavLink>
               <button
                  className="btn btn-warning btn-xs"
                  onClick={() => handleDelete(_id, refetch)}
               >
                  Delete
               </button>
            </div>
         </td>
      </tr>
   );
}
