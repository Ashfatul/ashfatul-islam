import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../utility/AuthProvider";
import {
   FaGraduationCap,
   FaHouseUser,
   FaRegFilePdf,
   FaUser,
   FaRegFileCode,
   FaPen,
} from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";

export default function UpdateFrontEndProfile() {
   const { profileUpdateFrontEnd } = useContext(AuthContext);
   const [user, setUser] = useState({});
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const update = (data) => {
      profileUpdateFrontEnd(data);
   };

   useEffect(() => {
      fetch("https://ashfatul-islam-server.vercel.app/user")
         .then((res) => res.json())
         .then((res) => setUser(res))
         .catch((e) => console.log(e));
   }, []);

   return (
      <div className="form-container mt-5 flex-1">
         <form
            onSubmit={handleSubmit(update)}
            className="bg-white rounded-lg p-5 w-full"
         >
            <h2 className="text-2xl text-center mb-5">Frontend Profile!</h2>

            <input type="hidden" defaultValue={"admin"} {...register("role")} />

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Website Title</span>
               </label>
               <label className="input-group">
                  <span>
                     <FaHouseUser />
                  </span>
                  <input
                     type="text"
                     placeholder={"Website Title"}
                     defaultValue={user.websiteName || ""}
                     className="input input-bordered w-full"
                     {...register("websiteName", { required: true })}
                  />
               </label>
            </div>

            {errors.websiteName && (
               <span className="text-red-500">Website Title Is Required</span>
            )}

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Name</span>
               </label>
               <label className="input-group">
                  <span>
                     <FaUser />
                  </span>
                  <input
                     type="text"
                     placeholder={"Jhon doe"}
                     defaultValue={user.displayName || ""}
                     className="input input-bordered w-full"
                     {...register("displayName", { required: true })}
                  />
               </label>
            </div>

            {errors.name && (
               <span className="text-red-500">This field is required</span>
            )}

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">
                     Comma Separated Designations
                  </span>
               </label>
               <label className="input-group">
                  <span>
                     <FaGraduationCap />
                  </span>
                  <input
                     type="text"
                     placeholder={"Marn Stack Developer, Front End Developer"}
                     defaultValue={user.designation || ""}
                     className="input input-bordered w-full"
                     {...register("designation", { required: true })}
                  />
               </label>
            </div>

            {errors.designation && (
               <span className="text-red-500">Designation is required</span>
            )}

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Photo</span>
               </label>
               <label className="input-group">
                  <span>
                     <HiPhotograph />
                  </span>
                  <input
                     type="text"
                     placeholder={"photo.png"}
                     defaultValue={user.photoURL || ""}
                     className="input input-bordered w-full"
                     {...register("photoURL", { required: true })}
                  />
               </label>
            </div>
            {errors.photo && (
               <span className="text-red-500">This field is required</span>
            )}

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">CV Link</span>
               </label>
               <label className="input-group">
                  <span>
                     <FaRegFilePdf />
                  </span>
                  <input
                     type="url"
                     placeholder="http://links-to-file.pdf"
                     defaultValue={user.cvLink || ""}
                     className="input input-bordered w-full"
                     {...register("cvLink")}
                  />
               </label>
            </div>

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Resume Link</span>
               </label>
               <label className="input-group">
                  <span>
                     <FaRegFileCode />
                  </span>
                  <input
                     type="url"
                     placeholder="https://link-to-file.pdf"
                     defaultValue={user.resumeLink || ""}
                     className="input input-bordered w-full"
                     {...register("resumeLink")}
                  />
               </label>
            </div>

            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">About</span>
               </label>
               <label className="input-group">
                  <span>
                     <FaPen />
                  </span>
                  <textarea
                     type="text"
                     placeholder={"Write something about yourself"}
                     defaultValue={user.about || ""}
                     className="input input-bordered w-full h-48 p-3"
                     {...register("about", { required: true })}
                  ></textarea>
               </label>
            </div>

            {errors.about && (
               <span className="text-red-500">
                  Write something for about section
               </span>
            )}

            <input
               type="submit"
               className="btn mt-10 block w-full"
               value={"Update Frontend Profile"}
            />
         </form>
      </div>
   );
}
