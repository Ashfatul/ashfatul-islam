import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
   return (
      <div id="about">
         <div className="container">
            <SectionTitle title="About" />
            <div className="block sm:flex gap-5 py-10 items-center w-full lg:w-3/5 md:w-4/5 md:mx-auto">
               <div className="photo">
                  <img
                     src="https://i.ibb.co/cFfJ18s/ashfatul-photo-transparent.png"
                     alt="ashfatul photo"
                     className="h-[250px] w-[250px] object-cover object-center rounded-lg mx-auto bg-gray-300 -skew-x-3 border-cyan-600 border-8"
                  />
               </div>
               <div className="about flex-1 mt-10 sm:mt-0">
                  <h3>
                     I&apos;m a passionate front-end web developer with a flair
                     for creating visually stunning and highly functional
                     websites. With a keen eye for detail and a deep
                     understanding of HTML, CSS, and JavaScript, I bring designs
                     to life, delivering exceptional user experiences.
                     Let&apos;s collaborate and bring your web projects to the
                     next level!
                  </h3>

                  <div className="social">
                     <ul className="flex gap-5 text-2xl mt-10">
                        <li>
                           <Link
                              to="https://github.com/ashfatul"
                              className="hover:text-orange-500"
                              target="_blank"
                           >
                              <FaGithub />
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="https://linkedin.com/in/ashfatul"
                              className="hover:text-orange-500"
                              target="_blank"
                           >
                              <FaLinkedin />
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="mailto:ashfatul.islam@gmail.com"
                              className="hover:text-orange-500"
                              target="_blank"
                           >
                              <FaEnvelope />
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
