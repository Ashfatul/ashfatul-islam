import { createBrowserRouter } from "react-router-dom";
import BackEndLayout from "../layout/BackEndLayout";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Login from "../components/Login/Login";
import LoggedInRedirect from "../Redirect/LoggedInRedirect";
import NotLoggedInRedirect from "../Redirect/NotLoggedInRedirect";
import Dashboard from "../components/Dashboard/Dashboard";
import Error404 from "../components/Error404/Error404";
import FrontEndLayout from "../layout/FrontEndLayout";

const router = createBrowserRouter([
   {
      path: "/",
      element: <FrontEndLayout />,
   },
   {
      path: "/auth",
      element: (
         <LoggedInRedirect>
            <Login />
         </LoggedInRedirect>
      ),
   },
   {
      path: "/root",
      element: (
         <NotLoggedInRedirect>
            <BackEndLayout />
         </NotLoggedInRedirect>
      ),
      children: [
         {
            path: "/root",
            element: <Dashboard />,
         },
         {
            path: "/root/update-profile",
            element: <UpdateProfile />,
         },
      ],
   },
   {
      path: "*",
      element: <Error404 />,
   },
]);

export default router;
