import SectionTitle from "../SectionTitle/SectionTitle";
import SingleProject from "./SingleProject";

export default function Projects() {
   return (
      <div className="container">
         <SectionTitle title="Most Recent Projects" color="black" />

         <div className="flex gap-5">
            <SingleProject />
         </div>
      </div>
   );
}
