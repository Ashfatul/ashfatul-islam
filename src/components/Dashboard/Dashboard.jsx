import { useContext } from "react";
import { AuthContext } from "../../utility/AuthProvider";
import { Navigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function Dashboard() {
   const { user } = useContext(AuthContext);
   if (!user.displayName) {
      toastr.error("Update Profile First");
      return <Navigate to="/root/update-profile" />;
   } else {
      return (
         <div className="content block text-center sm:text-left sm:flex items-center bg-slate-600 p-5 rounded-lg gap-3">
            <img
               src={
                  user.photoURL ||
                  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
               }
               className="w-32 h-32 rounded-lg object-cover object-center mx-auto sm:mx-0 mb-10 sm:mb-0 border-5 border-emerald-400"
               alt={user.displayName || "Admin photo"}
            />
            <div className="text-white">
               <p>Welcome to Backend</p>
               <h1 className="text-4xl">{user.displayName || "Admin"}</h1>
            </div>
         </div>
      );
   }
}
