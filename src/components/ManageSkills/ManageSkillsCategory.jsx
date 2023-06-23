import { useForm } from "react-hook-form";
import {
   AiOutlineFieldNumber,
   AiOutlineQuestionCircle,
   AiOutlinePoweroff,
} from "react-icons/ai";
import SkillsCategoryItem from "./SkillsCategoryItem";
import toastr from "toastr";
import { useState } from "react";

export default function ManageSkillsCategory() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchCategory = () => {
      fetch("https://ashfatul-islam-server.vercel.app/skills-category")
         .then((res) => res.json())
         .then((res) => {
            setCategories(res);
            setLoading(false);
         })
         .catch((e) => {
            console.log(e);
            setLoading(false);
         });
   };

   fetchCategory();

   const deleteCategory = (id) => {
      fetch(
         `https://ashfatul-islam-server.vercel.app/skills-category/delete/${id}`,
         {
            method: "DELETE",
         }
      )
         .then((res) => res.json())
         .then(() => {
            toastr.info("Category Deleted Successfully");
            fetchCategory();
         })
         .catch((e) => console.log(e));
   };

   const updateSkillsCategory = (data) => {
      fetch("https://ashfatul-islam-server.vercel.app/skills-category", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then(() => {
            toastr.success("Skill Category Added Successfully");
            fetchCategory();
         })
         .catch((e) => console.log(e));
   };
   return (
      <>
         <div className="flex flex-col md:flex-row gap-5">
            <div className="table-container w-full md:w-3/5">
               <h2 className="text-2xl text-center mb-5">Skills Category!</h2>
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
                        "Loading ..."
                     ) : categories.length > 0 ? (
                        categories.map((item) => (
                           <SkillsCategoryItem
                              key={item._id}
                              skill={item}
                              handleDelete={deleteCategory}
                           />
                        ))
                     ) : (
                        <tr>
                           <td className="text-center" colSpan={4}>
                              No Skill Category Found
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            <div className="form-container w-full md:w-2/5">
               <form
                  onSubmit={handleSubmit((data) => updateSkillsCategory(data))}
                  className="bg-white rounded-lg p-5 w-full"
               >
                  <h2 className="text-2xl text-center mb-5">
                     Add Skills Category!
                  </h2>

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
                        <span className="label-text">Category Name</span>
                     </label>
                     <label className="input-group">
                        <span>
                           <AiOutlineQuestionCircle />
                        </span>
                        <input
                           type="text"
                           placeholder={"Frontend"}
                           defaultValue={""}
                           className="input input-bordered w-full"
                           {...register("categoryName", { required: true })}
                        />
                     </label>
                  </div>

                  {errors.categoryName && (
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
