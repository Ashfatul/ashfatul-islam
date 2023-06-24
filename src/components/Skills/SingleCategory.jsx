import { useEffect, useState } from "react";
import SingleSkill from "./SingleSkill";

export default function SingleCategory({ data }) {
   const [skills, setSkills] = useState([]);
   useEffect(() => {
      fetch(
         `https://ashfatul-islam-server.vercel.app/skills/category/${data._id}`
      )
         .then((res) => res.json())
         .then((data) => setSkills(data))
         .catch((e) => console.log(e));
   }, [data]);

   return (
      <div>
         <h3 className="text-2xl underline underline-offset-8 text-center py-12">
            {data.categoryName}
         </h3>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill) => (
               <SingleSkill key={skill._id} skill={skill} />
            ))}
         </div>
      </div>
   );
}
