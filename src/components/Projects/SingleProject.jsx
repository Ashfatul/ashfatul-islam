import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function SingleProject({ data }) {
   const { title, photo, description, tags, date, github, liveSite } = data;
   return (
      <div className="card bg-base-100 shadow-xl overflow-hidden">
         <img
            src={photo}
            alt={title}
            className="object-cover object-center w-full"
         />
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="badge badge-accent">{date}</div>
            <p className="my-5">{description}</p>
            <div className="card-actions justify-start">
               {tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
               ))}
            </div>

            <div className="flex gap-3 mt-5">
               <Link
                  to={liveSite}
                  target="_blank"
                  className="btn flex gap-2 flex-1"
               >
                  <FaGlobe /> View Live
               </Link>
               <Link
                  to={github}
                  target="_blank"
                  className="btn flex gap-2 flex-1"
               >
                  <FaGithub /> GitHub
               </Link>
            </div>
         </div>
      </div>
   );
}
