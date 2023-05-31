/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utility/AuthProvider";

export default function NotLoggedInRedirect({ children }) {
   const { user } = useContext(AuthContext);
   if (!user) {
      return <Navigate to="/auth" />;
   } else {
      return children;
   }
}
