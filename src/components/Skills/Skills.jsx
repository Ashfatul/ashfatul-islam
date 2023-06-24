import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleCategory from "./SingleCategory";

export default function Skills() {
   const [category, setCategory] = useState([]);
   useEffect(() => {
      fetch("https://ashfatul-islam-server.vercel.app/skills-category")
         .then((res) => res.json())
         .then((data) => setCategory(data))
         .catch((e) => console.log(e));
   }, []);

   return (
      <div className="container" id="skills">
         <SectionTitle title="Skills Set" color="black" />

         {category.map((c) => (
            <SingleCategory key={c._id} data={c} />
         ))}
      </div>
   );
}
