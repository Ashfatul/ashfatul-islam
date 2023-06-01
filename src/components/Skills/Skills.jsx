import {
   FaBootstrap,
   FaCss3,
   FaGit,
   FaHtml5,
   FaJs,
   FaNodeJs,
   FaReact,
   FaSass,
} from "react-icons/fa";
import {
   SiAdobephotoshop,
   SiAdobexd,
   SiExpress,
   SiFigma,
   SiFirebase,
   SiMongodb,
   SiPostman,
   SiRedux,
   SiTailwindcss,
   SiVisualstudiocode,
} from "react-icons/si";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Skills() {
   return (
      <div className="container">
         <SectionTitle title="Skills Set" color="black" />
         <div className="frontend-technology flex flex-col items-center mb-10">
            <h3 className="text-xl">Frontend Technology&apos;s</h3>

            <div className="flex flex-wrap justify-center gap-5 text-5xl my-5">
               <FaHtml5 style={{ fill: "#e56027" }} />
               <FaCss3 style={{ fill: "#196db1" }} />
               <FaJs style={{ fill: "#e4d04b" }} />
               <FaBootstrap style={{ fill: "#7b11f3" }} />
               <SiTailwindcss style={{ fill: "#07b6d5" }} />
               <FaReact style={{ fill: "#61dafb" }} />
               <SiRedux style={{ fill: "#764abc" }} />
               <FaSass style={{ fill: "#c76494" }} />
            </div>
         </div>

         <div className="backend-technology flex flex-col items-center mb-10">
            <h3 className="text-xl ">Backend Technology&apos;s</h3>

            <div className="flex flex-wrap justify-center gap-5 text-5xl my-5">
               <FaNodeJs style={{ fill: "#6fa660" }} />
               <SiMongodb style={{ fill: "#449a45" }} />
               <SiFirebase style={{ fill: "#ffcb2b" }} />
               <SiExpress style={{ fill: "#000" }} />
            </div>
         </div>

         <div className="tools flex flex-col items-center mb-10">
            <h3 className="text-xl">Familiar Tools</h3>

            <div className="flex flex-wrap justify-center gap-5 text-5xl my-5">
               <FaGit style={{ fill: "#e84d31" }} />
               <SiPostman style={{ fill: "#ff6c37" }} />
               <SiVisualstudiocode style={{ fill: "#3ba4ea" }} />
               <SiFigma style={{ fill: "#ea4c1d" }} />
               <SiAdobexd style={{ fill: "#430134" }} />
               <SiAdobephotoshop style={{ fill: "#001c33" }} />
            </div>
         </div>
      </div>
   );
}
