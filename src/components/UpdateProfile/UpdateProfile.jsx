import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../utility/AuthProvider";

export default function UpdateProfile() {
   const { profileUpdate } = useContext(AuthContext);
   const { user } = useContext(AuthContext);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const update = (data) => {
      profileUpdate(data);
   };

   return (
      <div className="form-container flex justify-center items-center mt-5">
         <form
            onSubmit={handleSubmit(update)}
            className="bg-white rounded-lg p-5 w-full md:w-4/5"
         >
            <h2 className="text-2xl text-center">Update Your Profile!</h2>
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Name</span>
               </label>
               <label className="input-group">
                  <span>Name</span>
                  <input
                     type="text"
                     placeholder={user?.displayName || "Jhon doe"}
                     defaultValue={user?.displayName || ""}
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
                  <span className="label-text">Photo</span>
               </label>
               <label className="input-group">
                  <span>Photo</span>
                  <input
                     type="text"
                     placeholder={user?.photoURL || "photo.png"}
                     defaultValue={user?.photoURL || ""}
                     className="input input-bordered w-full"
                     {...register("photoURL", { required: true })}
                  />
               </label>
            </div>
            {errors.photo && (
               <span className="text-red-500">This field is required</span>
            )}

            <input
               type="submit"
               className="btn mt-5 block w-full"
               value={"Update"}
            />
         </form>
      </div>
   );
}
