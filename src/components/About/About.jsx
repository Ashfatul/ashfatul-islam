import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function About() {
   const [user, setUser] = useState({});
   const [social, setSocial] = useState({});

   useEffect(() => {
      fetch(`${import.meta.env.VITE_API_SERVER}user/`)
         .then((res) => res.json())
         .then((data) => setUser(data))
         .catch((e) => console.log(e));
   }, []);

   useEffect(() => {
      fetch(`${import.meta.env.VITE_API_SERVER}social-links/`)
         .then((res) => res.json())
         .then((data) => setSocial(data))
         .catch((e) => console.log(e));
   }, []);

   return (
      <div id="about">
         <div className="container">
            <SectionTitle title="About" />
            <div className="block sm:flex gap-5 py-10 items-center w-full lg:w-3/5 md:w-4/5 md:mx-auto">
               <div className="photo">
                  <img
                     src={user?.photoURL}
                     alt={user?.displayName}
                     className="h-[250px] w-[250px] object-cover object-center rounded-lg mx-auto bg-gray-300 border-cyan-600 border-8"
                  />
               </div>
               <div className="about flex-1 mt-10 sm:mt-0">
                  <h3>{user?.about}</h3>

                  <div className="social">
                     <ul className="flex gap-5 text-2xl mt-10">
                        {social.github && (
                           <li>
                              <Link
                                 to={social.github}
                                 className="hover:text-orange-500"
                                 target="_blank"
                              >
                                 <FaGithub />
                              </Link>
                           </li>
                        )}
                        {social.linkedin && (
                           <li>
                              <Link
                                 to={social.linkedin}
                                 className="hover:text-orange-500"
                                 target="_blank"
                              >
                                 <FaLinkedin />
                              </Link>
                           </li>
                        )}
                        {social.email && (
                           <li>
                              <Link
                                 to={`mailto:${social.email}`}
                                 className="hover:text-orange-500"
                                 target="_blank"
                              >
                                 <FaEnvelope />
                              </Link>
                           </li>
                        )}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
