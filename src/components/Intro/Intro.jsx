import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
   const [user, setUser] = useState({});
   const [designationArray, setDesignationArray] = useState([]);

   useEffect(() => {
      fetch(`${import.meta.env.VITE_API_SERVER}user/`)
         .then((res) => res.json())
         .then((res) => setUser(res))
         .catch((e) => console.log(e));
   }, []);

   useEffect(() => {
      const designation = user.designation;
      setDesignationArray(designation ? designation.split(",") : []);
   }, [user]);

   return (
      <div id="intro">
         <div className="container">
            {user.displayName && (
               <div className="content min-h-[calc(100vh-100px)] flex flex-col justify-center px-3 py-5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl">
                     Hi There,
                  </h3>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-5">
                     I&apos;m{" "}
                     <span className="text-blue-500">
                        {user.displayName || ""}
                     </span>
                  </h1>
                  {designationArray.length > 0 && (
                     <div className="text-2xl sm:text-3xl md:text-4xl block lg:flex h-12 min-h-full">
                        <span className="mr-5">
                           {"<"}
                           <span className="text-blue-500">{"/"}</span>
                           {">"}
                        </span>
                        <Typewriter words={designationArray} loop={true} />
                     </div>
                  )}
                  <div className="flex flex-wrap gap-5 mt-10">
                     {user.resumeLink && (
                        <Link className="btn w-[150px]" to={user.resumeLink}>
                           View Resume
                        </Link>
                     )}
                     {user.cvLink && (
                        <Link className="btn w-[150px]" to={user.cvLink}>
                           View CV
                        </Link>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
