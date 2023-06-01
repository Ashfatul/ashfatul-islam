import { Link } from "react-router-dom";

export default function Intro() {
   return (
      <div className="" id="intro">
         <div className="container">
            <div className="content min-h-screen flex flex-col justify-center items-center px-3 py-10">
               <h3 className="text-2xl sm:text-3xl md:text-4xl">Hi There,</h3>
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-5 text-center">
                  I&apos;m <span className="text-blue-500">Ashfatul Islam</span>
               </h1>
               <h3 className="text-2xl sm:text-3xl md:text-4xl">
                  Front End Developer
               </h3>
               <div className="flex flex-wrap justify-center gap-5 mt-10">
                  <Link className="btn w-[150px]">View Resume</Link>
                  <Link className="btn w-[150px]">View CV</Link>
               </div>
            </div>
         </div>
      </div>
   );
}
