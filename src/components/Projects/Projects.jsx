import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";
import Loader from "../Loader/Loader";

export default function Projects() {
   const [projects, setProjects] = useState([]);
   const [loadind, setLoading] = useState(false);
   const [skip, setSetSkip] = useState(0);
   const [limit] = useState(3);
   const [loadMore, setLoadMore] = useState(true);

   useEffect(() => {
      setLoading(true);
      fetch(
         `https://ashfatul-islam-server.vercel.app/projects/?limit=${limit}&skip=${
            skip * limit
         }`
      )
         .then((res) => res.json())
         .then((data) => {
            setProjects((prv) => [...prv, ...data]);
            setLoading(false);
         })
         .then(
            fetch(
               `https://ashfatul-islam-server.vercel.app/projects/?limit=${limit}&skip=${
                  (skip + 1) * limit
               }`
            )
               .then((res) => res.json())
               .then((data) => {
                  if (data.length > 0) {
                     console.log(data);
                     setLoadMore(true);
                  } else {
                     setLoadMore(false);
                  }
               })
         )
         .catch((e) => {
            console.log(e);
            setLoading(false);
         });
   }, [skip, limit]);

   const loadmore = () => {
      setSetSkip((state) => state + 1);
   };
   return (
      <div className="container">
         <SectionTitle title="Most Recent Projects" color="black" />

         {loadind ? (
            <Loader />
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {projects?.map((project) => (
                  <SingleProject key={project._id} data={project} />
               ))}
            </div>
         )}

         <div className="show-all-project flex justify-center mt-10">
            {loadMore && (
               <button className="btn" onClick={loadmore}>
                  Load 3 More Projects
               </button>
            )}
         </div>
      </div>
   );
}
