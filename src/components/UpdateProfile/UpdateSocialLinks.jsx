import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../utility/AuthProvider";
import { FaUser } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";

export default function UpdateSocialLinks() {
   const { socialLinksUpdate } = useContext(AuthContext);
   const { register, handleSubmit } = useForm();
   const [social, setSocialLinks] = useState({});

   const socialLinks = (data) => {
      socialLinksUpdate(data);
   };

   useEffect(() => {
      fetch("https://ashfatul-islam-server.vercel.app/social-links")
         .then((res) => res.json())
         .then((data) => setSocialLinks(data))
         .catch((e) => console.log(e));
   }, []);

   return (
      <div className="form-container mt-5">
         <form
            onSubmit={handleSubmit(socialLinks)}
            className="bg-white rounded-lg p-5 w-full"
         >
            <h2 className="text-2xl text-center mb-5">Social Links!</h2>
            <input type="hidden" {...register("role")} defaultValue="links" />
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">GitHub</span>
               </label>
               <label className="input-group">
                  <span>
                     <FaUser />
                  </span>
                  <input
                     type="url"
                     placeholder={"https://github.com/username"}
                     defaultValue={social.github || ""}
                     className="input input-bordered w-full"
                     {...register("github")}
                  />
               </label>
            </div>

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">LinkedIn</span>
               </label>
               <label className="input-group">
                  <span>
                     <HiPhotograph />
                  </span>
                  <input
                     type="url"
                     placeholder={"https://linkedin.com/in/username"}
                     defaultValue={social.linkedin || ""}
                     className="input input-bordered w-full"
                     {...register("linkedin")}
                  />
               </label>
            </div>

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <label className="input-group">
                  <span>
                     <HiPhotograph />
                  </span>
                  <input
                     type="email"
                     placeholder={"username@email.com"}
                     defaultValue={social.email || ""}
                     className="input input-bordered w-full"
                     {...register("email")}
                  />
               </label>
            </div>

            <input
               type="submit"
               className="btn mt-10 block w-full"
               value={"Update Social Links"}
            />
         </form>
      </div>
   );
}
