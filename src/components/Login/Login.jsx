import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../utility/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Login() {
   const navigate = useNavigate();
   const { signIn } = useContext(AuthContext);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const Login = (data) => {
      signIn(data.email, data.password).then((res) => {
         if (res === "success") {
            navigate("/root");
         }
      });
   };

   return (
      <div className="container block text-center md:text-left md:flex items-center min-h-screen">
         <div className="content flex-1 mb-10 md:mb-0">
            <h1 className="text-5xl mb-10">Welcome to Backend</h1>
            <h2 className="text-xl mb-10">
               To access the functionality of performing CRUD operations on the
               available items on the site, you are required to log in.
            </h2>
            <p>Please Provide Authentication Credentials To Login.</p>

            <NavLink
               to="/"
               className="mt-5 flex gap-2 w-fit items-center hover:text-orange-500 underline underline-offset-4"
            >
               <FaArrowLeft /> Back To Frontend
            </NavLink>
         </div>
         <div className="form-container flex-1 flex justify-center">
            <form
               onSubmit={handleSubmit(Login)}
               className="bg-slate-300 rounded-lg p-5 w-72 sm:w-80"
            >
               <h2 className="text-2xl text-center mb-5">Welcome Back!!</h2>
               <div className="form-control">
                  <label>Email</label>
                  <input
                     type="text"
                     placeholder="email@example.com"
                     className="input input-bordered"
                     {...register("email", { required: true })}
                  />
               </div>

               {errors.name && (
                  <span className="text-red-500">This field is required</span>
               )}

               <div className="form-control mt-3">
                  <label>Password</label>
                  <input
                     type="password"
                     placeholder="password"
                     className="input input-bordered"
                     {...register("password", { required: true })}
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
      </div>
   );
}
