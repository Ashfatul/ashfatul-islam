import { useForm } from "react-hook-form";

export default function UpdateProfile() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const UpdateProfile = (data) => {
      console.log(data);
   };

   return (
      <div className="form-container flex justify-center items-center mt-5">
         <form
            onSubmit={handleSubmit(UpdateProfile)}
            className="bg-white rounded-lg p-5"
         >
            <h2 className="text-2xl text-center">Update Your Profile!</h2>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Name</span>
               </label>
               <label className="input-group">
                  <span>Name</span>
                  <input
                     type="text"
                     placeholder="Jhon Doe"
                     className="input input-bordered"
                     {...register("name", { required: true })}
                  />
               </label>
            </div>

            {errors.name && (
               <span className="text-red-500">This field is required</span>
            )}

            <div className="form-control">
               <label className="label">
                  <span className="label-text">Photo</span>
               </label>
               <label className="input-group">
                  <span>Photo</span>
                  <input
                     type="text"
                     placeholder="http://img.bb/photo.jpg"
                     className="input input-bordered"
                     {...register("photo", { required: true })}
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
