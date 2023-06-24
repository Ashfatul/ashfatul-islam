import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleCategory from "./SingleCategory";
import Loader from "../Loader/Loader";

export default function Skills() {
   const [category, setCategory] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      fetch("https://ashfatul-islam-server.vercel.app/skills-category")
         .then((res) => res.json())
         .then((data) => {
            setCategory(data);
            setLoading(false);
         })
         .catch((e) => {
            console.log(e);
            setLoading(false);
         });
   }, []);

   return (
      <div className="container" id="skills">
         <SectionTitle title="Skills Set" color="black" />

         {loading ? (
            <Loader />
         ) : (
            category.map((c) => <SingleCategory key={c._id} data={c} />)
         )}
      </div>
   );
}
