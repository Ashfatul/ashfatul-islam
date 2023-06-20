import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
   SiExpress,
   SiMongodb,
   SiNodedotjs,
   SiReact,
   SiTailwindcss,
} from "react-icons/si";

export default function Footer({ user }) {
   return (
      <div className="bg-slate-800 mt-20">
         <div className="container px-3 py-10">
            <div className="flex flex-wrap">
               <div className="technology min-w-[300px] flex-1 flex items-center flex-col">
                  <h2 className="text-white text-xl mb-5 text-center">
                     Technology Used
                  </h2>

                  <ul>
                     <li className="flex gap-2 text-white my-2">
                        <SiReact /> ReactJS
                     </li>

                     <li className="flex gap-2 text-white my-2">
                        <SiTailwindcss /> Tailwind CSS
                     </li>

                     <li className="flex gap-2 text-white my-2">
                        <SiNodedotjs /> NodeJS
                     </li>

                     <li className="flex gap-2 text-white my-2">
                        <SiExpress /> Express
                     </li>

                     <li className="flex gap-2 text-white my-2">
                        <SiMongodb /> MongoDB
                     </li>
                  </ul>
               </div>
               <div className="about min-w-[300px] mb-10 text-center flex-1">
                  <h1 className="text-white text-2xl mb-5">
                     {user.displayName}
                  </h1>
                  <p className="text-white text-center">
                     Ashfatul Islam, a MERN Stack developer based in Bangladesh,
                     has created this portfolio website to showcase his skills
                     and projects.
                  </p>
               </div>
               <div className="social min-w-[300px] flex-1 flex items-center flex-col">
                  <h2 className="text-white text-xl mb-5">Find Me On</h2>
                  <ul className="gap-8">
                     <li>
                        <Link
                           to="https://github.com/ashfatul"
                           className="flex items-center gap-2 text-white my-2 hover:text-orange-200"
                        >
                           <FaGithub /> GitHub
                        </Link>
                     </li>

                     <li>
                        <Link
                           to="https://linkedin.com/in/ashfatul"
                           className="flex items-center gap-2 text-white my-2 hover:text-orange-200"
                        >
                           <FaLinkedin /> LinkedIn
                        </Link>
                     </li>

                     <li>
                        <Link
                           to="mailto:ashfatul.islam@gmail.com"
                           className="flex items-center gap-2 text-white my-2 hover:text-orange-200"
                        >
                           <FaEnvelope /> Email
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="copyright text-center text-white py-5 bg-black">
            Copyright &copy; {user.websiteName || "SetUser"} | All right
            reserved | <span>{new Date().getFullYear()}</span>
         </div>
      </div>
   );
}
