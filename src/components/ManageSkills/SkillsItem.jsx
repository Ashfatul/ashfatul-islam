import { FaTrash } from "react-icons/fa";

export default function SkillsItem({ skill, handleDelete }) {
   return (
      <tr>
         <td>{skill.order}</td>
         <td>{skill.categoryName}</td>
         <td>{skill.status}</td>
         <td>
            <button
               className="btn btn-primary btn-sm"
               onClick={() => handleDelete(skill._id)}
            >
               <FaTrash />
            </button>
         </td>
      </tr>
   );
}
