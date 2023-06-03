import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";
import { NavLink } from "react-router-dom";

export default function Projects() {
   const [projects, setProjects] = useState();
   useEffect(() => {
      fetch(`https://ashfatul-islam-server.vercel.app/projects/?limit=3`)
         .then((res) => res.json())
         .then((data) => setProjects(data))
         .catch((e) => console.log(e));
   }, []);
   return (
      <div className="container">
         <SectionTitle title="Most Recent Projects" color="black" />

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects?.map((project) => (
               <SingleProject key={project._id} data={project} />
            ))}
         </div>

         <div className="show-all-project flex justify-center mt-10">
            <NavLink className="btn" to="/all-projects">
               View All Projects
            </NavLink>
         </div>
      </div>
   );
}
