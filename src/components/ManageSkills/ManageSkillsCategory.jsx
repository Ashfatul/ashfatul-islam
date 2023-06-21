import { useForm } from "react-hook-form";
import {
   AiOutlineFieldNumber,
   AiOutlineQuestionCircle,
   AiOutlinePoweroff,
} from "react-icons/ai";

export default function ManageSkillsCategory() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const updateSkillsCategory = (data) => {
      console.log(data);
   };
   return (
      <div className="form-container mt-5 flex-1">
         <form
            onSubmit={handleSubmit((data) => updateSkillsCategory(data))}
            className="bg-white rounded-lg p-5 w-full"
         >
            <h2 className="text-2xl text-center mb-5">Skills Category!</h2>

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
                     {...register("order", { required: true })}
                  />
               </label>
            </div>

            {errors.order && (
               <span className="text-red-500">This field is required</span>
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
               <span className="text-red-500">This field is required</span>
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
                     defaultValue={""}
                     className="input input-bordered w-full"
                     {...register("status", { required: true })}
                  >
                     <option value="active">Active</option>
                     <option value="disabled">Disabled</option>
                  </select>
               </label>
            </div>
            {errors.status && (
               <span className="text-red-500">This field is required</span>
            )}

            <input
               type="submit"
               className="btn mt-10 block w-full"
               value={"Add Skills Category"}
            />
         </form>
      </div>
   );
}
