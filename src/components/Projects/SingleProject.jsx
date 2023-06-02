import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SingleProject() {
   return (
      <div className="card w-1/3 bg-base-100 shadow-xl">
         <figure>
            <img
               src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
               alt="Shoes"
            />
         </figure>
         <div className="card-body">
            <h2 className="card-title">Landing Page</h2>
            <div className="badge badge-secondary">10-02-2022</div>
            <p className="my-5">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Similique dolorum asperiores suscipit sit ex, tempora sunt quas
               inventore odio hic enim, ipsam, repellendus autem fuga aspernatur
               ipsa veniam distinctio magni!
            </p>
            <div className="card-actions justify-start">
               <div className="badge badge-outline hover:text-blue-500 cursor-default">
                  React
               </div>
               <div className="badge badge-outline hover:text-blue-500 cursor-default">
                  Tailwind
               </div>
            </div>

            <div className="flex gap-3 mt-5">
               <Link to="" className="btn flex gap-2 flex-1">
                  <FaGlobe /> View Live
               </Link>
               <Link to="" className="btn flex gap-2 flex-1">
                  <FaGithub /> GitHub
               </Link>
            </div>
         </div>
      </div>
   );
}
