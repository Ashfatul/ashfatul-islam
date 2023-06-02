import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";

export default function Projects() {
   return (
      <div className="projects">
         <SectionTitle title="My Projects" color="black" />
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th className="bg-slate-800 text-white">Photo</th>
                     <th className="bg-slate-800 text-white">Title</th>
                     <th className="hidden md:block bg-slate-800 text-white">
                        Description
                     </th>
                     <th className="bg-slate-800 text-white">Tags</th>
                     <th className="bg-slate-800 text-white">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  <SingleProject />
               </tbody>
            </table>
         </div>
      </div>
   );
}
