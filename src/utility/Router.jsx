import { createBrowserRouter } from "react-router-dom";
import FrontEndLayout from "../layout/FrontEndLayout";
import BackEndLayout from "../layout/BackEndLayout";
import AuthLayout from "../layout/AuthLayout";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Login from "../components/Login/Login";
import LoggedInRedirect from "../Redirect/LoggedInRedirect";
import NotLoggedInRedirect from "../Redirect/NotLoggedInRedirect";

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
            element: <NotLoggedInRedirect>ok</NotLoggedInRedirect>,
         },
         {
            path: "/root/update-profile",
            element: (
               <NotLoggedInRedirect>
                  <UpdateProfile />
               </NotLoggedInRedirect>
            ),
         },
      ],
   },
   {
      path: "/auth",
      element: <AuthLayout />,
      children: [
         {
            path: "/auth",
            element: (
               <LoggedInRedirect>
                  <Login />
               </LoggedInRedirect>
            ),
         },
      ],
   },
   {
      path: "*",
      element: "Error 404",
   },
]);

export default router;
