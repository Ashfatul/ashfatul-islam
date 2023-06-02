import { NavLink } from "react-router-dom";

export default function SingleProject({ project, refetch }) {
   const { _id, title, photo, description, tags, date } = project;

   const handleDelete = (id, refetch) => {
      const ask = confirm("Are you sure to delete?");
      if (ask) {
         fetch(`http://localhost:5000/project/${id}`, {
            method: "DELETE",
         });
         refetch();
      }
   };
   return (
      <tr>
         <td>
            <div className="photo">
               <div className="mask mask-squircle w-12 h-12">
                  <img src={photo} alt={title} />
               </div>
            </div>
         </td>
         <td>
            <div className="flex items-center space-x-3">
               <div>
                  <div className="font-bold">{title}</div>
                  <div className="text-sm opacity-50">{date}</div>
               </div>
            </div>
         </td>
         <td className="hidden md:block">
            <p className="whitespace-break-spaces">{description}</p>
         </td>
         <td>{tags}</td>
         <th>
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
         </th>
      </tr>
   );
}
