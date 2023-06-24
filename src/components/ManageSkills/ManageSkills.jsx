import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SkillsItem from "./SkillsItem";
import toastr from "toastr";
import {
   AiOutlineFieldNumber,
   AiOutlinePoweroff,
   AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

export default function ManageSkills() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const [categories, setCategories] = useState([]);
   const [skills, setSkills] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchSkills = () => {
      fetch("https://ashfatul-islam-server.vercel.app/skills")
         .then((res) => res.json())
         .then((res) => {
            setSkills(res);
            setLoading(false);
         })
         .catch((e) => {
            console.log(e);
            setLoading(false);
         });
   };

   useEffect(() => {
      fetch("https://ashfatul-islam-server.vercel.app/skills-category")
         .then((res) => res.json())
         .then((res) => {
            setCategories(res);
         })
         .catch((e) => {
            console.log(e);
         });

      fetchSkills();
   }, []);

   const createSkill = async (data) => {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      await fetch(
         `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
         {
            method: "POST",
            body: formData,
         }
      )
         .then((res) => res.json())
         .then((res) => {
            data = {
               ...data,
               image: res?.data?.url,
            };
            return data;
         })
         .then((res) => {
            fetch("https://ashfatul-islam-server.vercel.app/add-skill", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(res),
            })
               .then((res) => res.json())
               .then(() => {
                  toastr.info("Skill Added Successfully");
                  fetchSkills();
               })
               .catch((e) => console.log(e));
         })
         .catch((e) => {
            console.log(e);
            toastr.error("Failed To Add Skill");
         });
   };

   const deleteSkill = (id) => {
      fetch(`https://ashfatul-islam-server.vercel.app/skills/delete/${id}`, {
         method: "DELETE",
      })
         .then(() => {
            toastr.info("Skill Deleted");
            fetchSkills();
         })
         .catch((e) => console.log(e));
   };

   return (
      <>
         <div className="flex flex-col md:flex-row gap-5">
            <div className="table-container w-full md:w-3/5">
               <h2 className="text-2xl text-center mb-5">Manage Skills!</h2>
               <table className="w-full table">
                  <thead>
                     <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {loading ? (
                        <tr>
                           <td colSpan={4}>Loading ...</td>
                        </tr>
                     ) : skills.length > 0 ? (
                        skills.map((item) => (
                           <SkillsItem
                              key={item._id}
                              skill={item}
                              handleDelete={deleteSkill}
                           />
                        ))
                     ) : (
                        <tr>
                           <td className="text-center" colSpan={4}>
                              No Skill Found
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            <div className="form-container w-full md:w-2/5">
               <form
                  onSubmit={handleSubmit((data) => createSkill(data))}
                  className="bg-white rounded-lg p-5 w-full"
               >
                  <h2 className="text-2xl text-center mb-5">Add New Skill!</h2>
                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text">Choose Category</span>
                     </label>
                     <label className="input-group">
                        <span>
                           <BiCategory />
                        </span>
                        <select
                           className="input input-bordered w-full"
                           {...register("parentCategoryID", {
                              required: true,
                           })}
                        >
                           <option value="">Choose One</option>
                           {categories.map((c) => (
                              <option key={c._id} value={c._id}>
                                 {c.categoryName}
                              </option>
                           ))}
                        </select>
                     </label>
                  </div>

                  {errors.parentCategoryID && (
                     <span className="text-red-500">
                        This field is required
                     </span>
                  )}

                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text">Order</span>
                     </label>
                     <label className="input-group">
                        <span>
                           <AiOutlineFieldNumber />
                        </span>
                        <input
                           type="number"
                           placeholder={"0"}
                           defaultValue={""}
                           className="input input-bordered w-full"
                           {...register("order", {
                              required: true,
                              valueAsNumber: true,
                           })}
                        />
                     </label>
                  </div>

                  {errors.order && (
                     <span className="text-red-500">
                        This field is required
                     </span>
                  )}

                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text">Skill Name</span>
                     </label>
                     <label className="input-group">
                        <span>
                           <AiOutlineQuestionCircle />
                        </span>
                        <input
                           type="text"
                           placeholder={"React"}
                           defaultValue={""}
                           className="input input-bordered w-full"
                           {...register("skillName", { required: true })}
                        />
                     </label>
                  </div>

                  {errors.skillName && (
                     <span className="text-red-500">
                        This field is required
                     </span>
                  )}

                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text">Skill Depth %</span>
                     </label>
                     <label className="input-group">
                        <span>
                           <AiOutlineQuestionCircle />
                        </span>
                        <input
                           type="number"
                           placeholder="0"
                           className="input input-bordered w-full"
                           {...register("skillParentage", {
                              required: {
                                 value: true,
                                 message: "This field is required",
                              },
                              min: {
                                 value: 0,
                                 message: "Value must be bigger then 0",
                              },
                              max: {
                                 value: 100,
                                 message:
                                    "Value must be smaller then or equal to 100",
                              },
                              valueAsNumber: true,
                           })}
                        />
                     </label>
                  </div>

                  {errors.skillParentage && (
                     <span className="text-red-500">
                        {errors.skillParentage.message}
                     </span>
                  )}

                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text">Skill Image</span>
                     </label>
                     <label className="input-group">
                        <span>
                           <AiOutlineFieldNumber />
                        </span>
                        <input
                           type="file"
                           className="file-input file-input-primary input-bordered w-full"
                           {...register("image", {
                              required: true,
                           })}
                        />
                     </label>
                  </div>

                  {errors.image && (
                     <span className="text-red-500">
                        This field is required
                     </span>
                  )}

                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text">Status</span>
                     </label>
                     <label className="input-group">
                        <span>
                           <AiOutlinePoweroff />
                        </span>
                        <select
                           type="text"
                           placeholder={"photo.png"}
                           className="input input-bordered w-full"
                           {...register("status", { required: true })}
                        >
                           <option value="active">Active</option>
                           <option value="disabled">Disabled</option>
                        </select>
                     </label>
                  </div>
                  {errors.status && (
                     <span className="text-red-500">
                        This field is required
                     </span>
                  )}

                  <input
                     type="submit"
                     className="btn mt-10 block w-full"
                     value={"Add Skills Category"}
                  />
               </form>
            </div>
         </div>
      </>
   );
}
