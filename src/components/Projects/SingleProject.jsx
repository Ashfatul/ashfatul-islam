import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SingleProject({ data }) {
   const { title, photo, description, tags, date, github, liveSite } = data;
   return (
      <div className="card bg-base-100 shadow-xl">
         <figure>
            <img src={photo} alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="badge badge-accent">{date}</div>
            <p className="my-5">{description}</p>
            <div className="card-actions justify-start">
               <div className="badge badge-outline hover:text-blue-500 cursor-default">
                  {tags}
               </div>
            </div>

            <div className="flex gap-3 mt-5">
               <Link to={github} className="btn flex gap-2 flex-1">
                  <FaGlobe /> View Live
               </Link>
               <Link to={liveSite} className="btn flex gap-2 flex-1">
                  <FaGithub /> GitHub
               </Link>
            </div>
         </div>
      </div>
   );
}
