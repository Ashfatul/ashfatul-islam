/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utility/AuthProvider";

export default function LoggedInRedirect({ children }) {
   const { user } = useContext(AuthContext);
   if (user) {
      return <Navigate to="/root" />;
   } else {
      return children;
   }
}
