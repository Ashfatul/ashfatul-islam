import { createBrowserRouter } from "react-router-dom";
import FrontEndLayout from "../layout/FrontEndLayout";
import BackEndLayout from "../layout/BackEndLayout";
import AuthLayout from "../layout/AuthLayout";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
   {
      path: "/",
      element: <FrontEndLayout />,
      errorElement: "Something went wrong",
      children: [
         {
            path: "/",
            element: "Front End",
         },
      ],
   },
   {
      path: "/root",
      element: <BackEndLayout />,
      children: [
         {
            path: "/root",
            element: "Back End",
         },
         {
            path: "/root/update-profile",
            element: <UpdateProfile />,
         },
      ],
   },
   {
      path: "/auth",
      element: <AuthLayout />,
      children: [
         {
            path: "/auth",
            element: <Login />,
         },
      ],
   },
   {
      path: "*",
      element: "Error 404",
   },
]);

export default router;
