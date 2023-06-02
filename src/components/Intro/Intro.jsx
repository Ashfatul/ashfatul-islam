import { Link } from "react-router-dom";

export default function Intro() {
   return (
      <div className="" id="intro">
         <div className="container">
            <div className="content min-h-[calc(100vh-100px)] flex flex-col justify-center items-center px-3 py-5">
               <h3 className="text-2xl sm:text-3xl md:text-4xl">Hi There,</h3>
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-5 text-center">
                  I&apos;m <span className="text-blue-500">Ashfatul Islam</span>
               </h1>
               <div className="text-2xl sm:text-3xl md:text-4xl block lg:flex text-center">
                  <div className="">Front End Developer</div>
                  <span className="mx-10 hidden lg:inline">|</span>
                  <div className="">MERN Stack Developer</div>
               </div>
               <div className="flex flex-wrap justify-center gap-5 mt-10">
                  <Link className="btn w-[150px]">View Resume</Link>
                  <Link className="btn w-[150px]">View CV</Link>
               </div>
            </div>
         </div>
      </div>
   );
}
