import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
   SiExpress,
   SiMongodb,
   SiNodedotjs,
   SiReact,
   SiTailwindcss,
} from "react-icons/si";
import { useEffect, useState } from "react";

export default function Footer({ user }) {
   const [social, setSocial] = useState({});
   useEffect(() => {
      fetch("https://ashfatul-islam-server.vercel.app/social-links/")
         .then((res) => res.json())
         .then((data) => setSocial(data))
         .catch((e) => console.log(e));
   }, []);
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
                     {social.github && (
                        <li>
                           <Link
                              to={social.github}
                              className="flex items-center gap-2 text-white my-2 hover:text-orange-200"
                           >
                              <FaGithub /> GitHub
                           </Link>
                        </li>
                     )}

                     {social.linkedin && (
                        <li>
                           <Link
                              to={social.linkedin}
                              className="flex items-center gap-2 text-white my-2 hover:text-orange-200"
                           >
                              <FaLinkedin /> LinkedIn
                           </Link>
                        </li>
                     )}

                     {social.email && (
                        <li>
                           <Link
                              to={`mailto:${social.email}`}
                              className="flex items-center gap-2 text-white my-2 hover:text-orange-200"
                           >
                              <FaEnvelope /> Email
                           </Link>
                        </li>
                     )}
                  </ul>
               </div>
            </div>
         </div>
         <div className="copyright text-center text-white py-5 bg-black">
            Copyright &copy; {user.websiteName || ""} | All right reserved |{" "}
            <span>{new Date().getFullYear()}</span>
         </div>
      </div>
   );
}
