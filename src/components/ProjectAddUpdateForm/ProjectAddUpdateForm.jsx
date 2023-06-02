import { useParams } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import toastr from "toastr";
import { useEffect, useState } from "react";

export default function ProjectAddUpdateForm({ isUpdating }) {
   const [data, setData] = useState();
   const { id } = useParams();

   useEffect(() => {
      const fetchProject = async () => {
         await fetch(
            `https://ashfatul-islam-server.vercel.app/update-project/${id}`
         )
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((e) => console.log(e));
      };
      if (isUpdating && id) {
         fetchProject();
      }
   }, [id, isUpdating]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const addNewProject = (info) => {
      fetch("https://ashfatul-islam-server.vercel.app/projects", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(info),
      })
         .then((res) => res.json())
         .then((res) => {
            toastr.success("Added Successfully", res);
         })
         .catch((e) => console.log(e));
   };

   const handleUpdate = (info) => {
      fetch(`https://ashfatul-islam-server.vercel.app/update-project/${id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(info),
      })
         .then((res) => res.json())
         .then((res) => {
            toastr.success("Updated Successfully", res);
         })
         .catch((e) => console.log(e));
   };

   return (
      <div>
         <SectionTitle
            title={isUpdating ? "Update Project" : "Add New Project"}
            color="black"
         />

         <form
            onSubmit={handleSubmit((info) => {
               isUpdating ? handleUpdate(info) : addNewProject(info);
            })}
         >
            <div className="form-control w-4/5 mx-auto bg-white rounded-lg p-5">
               <label className="label">
                  <span className="label-text">Project Title</span>
               </label>
               <input
                  type="text"
                  placeholder="Awesome Landing Page"
                  defaultValue={data?.title || ""}
                  {...register("title", { required: true })}
                  className="input input-bordered w-full"
               />
               {errors.title && (
                  <small className="text-red-500">Invalid Title</small>
               )}

               <label className="label">
                  <span className="label-text">Project Image URL</span>
               </label>
               <input
                  type="text"
                  defaultValue={data?.photo || ""}
                  {...register("photo", { required: true })}
                  placeholder="https://imgbb.com/image.png"
                  className="input input-bordered w-full"
               />
               {errors.photo && (
                  <small className="text-red-500">Invalid Photo URL</small>
               )}

               <label className="label">
                  <span className="label-text">
                     Project Description (max 30 words)
                  </span>
               </label>
               <textarea
                  type="text"
                  defaultValue={data?.description || ""}
                  {...register("description", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered w-full h-32"
               />
               {errors.description && (
                  <small className="text-red-500">Invalid Description</small>
               )}

               <label className="label">
                  <span className="label-text">Project Date</span>
               </label>
               <input
                  type="date"
                  defaultValue={data?.date || ""}
                  {...register("date", { required: true })}
                  className="input input-bordered w-full"
               />
               {errors.date && (
                  <small className="text-red-500">Invalid Date</small>
               )}

               <label className="label">
                  <span className="label-text">
                     Project Tags (Comma Separated - Max 3 )
                  </span>
               </label>
               <input
                  type="text"
                  defaultValue={data?.tags || ""}
                  {...register("tags", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="React, Bootstrap"
               />
               {errors.tags && (
                  <small className="text-red-500">Invalid Tags</small>
               )}

               <label className="label">
                  <span className="label-text">Link To GitHub Repo</span>
               </label>
               <input
                  type="url"
                  defaultValue={data?.github || ""}
                  {...register("github", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="https://github.com/ashfatul/project"
               />
               {errors.github && (
                  <small className="text-red-500">Invalid GitHub Link</small>
               )}

               <label className="label">
                  <span className="label-text">Link To Live Site</span>
               </label>
               <input
                  type="url"
                  defaultValue={data?.liveSite || ""}
                  {...register("liveSite", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="https://random.netlify.com"
               />
               {errors.liveSite && (
                  <small className="text-red-500">Invalid Live Site Link</small>
               )}

               <input
                  type="submit"
                  className="btn mt-5"
                  value={isUpdating ? "Update Project" : "Add Project"}
               />
            </div>
         </form>
      </div>
   );
}
