/* eslint-disable no-unused-vars */
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";
import { useQuery } from "@tanstack/react-query";

export default function Projects() {
   const { isLoading, isError, data, error, refetch } = useQuery({
      queryKey: ["projects"],
      queryFn: async () => {
         const data = await fetch(
            "https://ashfatul-islam-server.vercel.app/projects"
         );
         return data.json();
      },
   });

   return (
      <>
         <div className="projects">
            <SectionTitle title="My Projects" color="black" />
            <p className="text-2xl mb-10">
               Total Projects:{" "}
               <span className="text-blue-500">{data?.length}</span>
            </p>
            {isLoading && !isError ? (
               "Loading ..."
            ) : (
               <div className="overflow-x-auto">
                  <table className="table w-full">
                     <thead>
                        <tr>
                           <th className="bg-slate-800 text-white">Photo</th>
                           <th className="bg-slate-800 text-white">Title</th>
                           <th className="hidden md:block bg-slate-800 text-white">
                              Description
                           </th>
                           <th className="bg-slate-800 text-white">Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        {data?.map((project) => (
                           <SingleProject
                              key={project._id}
                              project={project}
                              refetch={refetch}
                           />
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </>
   );
}
