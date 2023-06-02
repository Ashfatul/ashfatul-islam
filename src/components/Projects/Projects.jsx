import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";
import { NavLink } from "react-router-dom";

export default function Projects({ title, showmore, limit }) {
   const [projects, setProjects] = useState();
   useEffect(() => {
      fetch(`https://ashfatul-islam-server.vercel.app/projects/?limit=${limit}`)
         .then((res) => res.json())
         .then((data) => setProjects(data))
         .catch((e) => console.log(e));
   }, []);
   return (
      <div className="container">
         <SectionTitle title={title} color="black" />

         <div className="grid grid-cols-3 gap-5">
            {projects?.map((project) => (
               <SingleProject key={project._id} data={project} />
            ))}
         </div>

         {showmore && (
            <div className="show-all-project flex justify-center mt-10">
               <NavLink className="btn" to="/all-projects">
                  Show More
               </NavLink>
            </div>
         )}
      </div>
   );
}
