import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";

export default function Projects() {
   const [projects, setProjects] = useState();
   useEffect(() => {
      fetch("http://localhost:5000/projects/?limit=3")
         .then((res) => res.json())
         .then((data) => setProjects(data))
         .catch((e) => console.log(e));
   }, []);
   return (
      <div className="container">
         <SectionTitle title="Most Recent Projects" color="black" />

         <div className="grid grid-cols-3 gap-5">
            {projects?.map((project) => (
               <SingleProject key={project._id} data={project} />
            ))}
         </div>
      </div>
   );
}
