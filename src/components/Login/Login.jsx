import { useForm } from "react-hook-form";

export default function Login() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const UpdateProfile = (data) => {
      console.log(data);
   };

   return (
      <div className="form-container flex justify-center items-center min-h-screen">
         <form
            onSubmit={handleSubmit(UpdateProfile)}
            className="bg-slate-300 rounded-lg p-5"
         >
            <h2 className="text-2xl text-center mb-5">Welcome Back!!</h2>
            <div className="form-control">
               <label>Email</label>
               <input
                  type="text"
                  placeholder="email@example.com"
                  className="input input-bordered"
                  {...register("name", { required: true })}
               />
            </div>

            {errors.name && (
               <span className="text-red-500">This field is required</span>
            )}

            <div className="form-control mt-3">
               <label>Password</label>
               <input
                  type="text"
                  placeholder="http://img.bb/photo.jpg"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
               />
            </div>
            {errors.photo && (
               <span className="text-red-500">This field is required</span>
            )}

            <input
               type="submit"
               className="btn mt-5 block w-full"
               value={"Login"}
            />
         </form>
      </div>
   );
}
