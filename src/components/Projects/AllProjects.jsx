import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";

export default function AllProjects() {
   const [projects, setProjects] = useState();
   useEffect(() => {
      fetch(`https://ashfatul-islam-server.vercel.app/projects/`)
         .then((res) => res.json())
         .then((data) => setProjects(data))
         .catch((e) => console.log(e));
   }, []);
   return (
      <div className="container">
         <SectionTitle title="All Projects" color="black" />

         <div className="grid grid-cols-3 gap-5">
            {projects?.map((project) => (
               <SingleProject key={project._id} data={project} />
            ))}
         </div>
      </div>
   );
}
