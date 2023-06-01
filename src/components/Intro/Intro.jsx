import { Link } from "react-router-dom";

export default function Intro() {
   return (
      <div className="" id="intro">
         <div className="container">
            <div className="content min-h-screen flex flex-col justify-center items-center">
               <h3 className="text-4xl">Hi There,</h3>
               <h1 className="text-8xl my-5">
                  I&apos;m <span className="text-blue-500">Ashfatul Islam</span>
               </h1>
               <h3 className="text-4xl">Front End Developer</h3>
               <div className="flex gap-5">
                  <Link className="mt-10 btn w-[150px]">View Resume</Link>
                  <Link className="mt-10 btn w-[150px]">View CV</Link>
               </div>
            </div>
         </div>
      </div>
   );
}
