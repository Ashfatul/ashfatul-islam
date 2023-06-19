import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
   return (
      <div id="intro">
         <div className="container">
            <div className="content min-h-[calc(100vh-100px)] flex flex-col justify-center px-3 py-5">
               <h3 className="text-2xl sm:text-3xl md:text-4xl">Hi There,</h3>
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-5">
                  I&apos;m <span className="text-blue-500">Ashfatul Islam</span>
               </h1>
               <div className="text-2xl sm:text-3xl md:text-4xl block lg:flex h-12 min-h-full">
                  <span>
                     {"<"}
                     <span className="text-blue-500">{"/"}</span>
                     {">"}
                  </span>
                  <Typewriter
                     words={["Front End Developer", "MERN Stack Developer"]}
                     loop={true}
                  />
               </div>
               <div className="flex flex-wrap gap-5 mt-10">
                  <Link className="btn w-[150px]">View Resume</Link>
                  <Link className="btn w-[150px]">View CV</Link>
               </div>
            </div>
         </div>
      </div>
   );
}
