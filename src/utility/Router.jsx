import { createBrowserRouter } from "react-router-dom";
import BackEndLayout from "../layout/BackEndLayout";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Login from "../components/Login/Login";
import LoggedInRedirect from "../Redirect/LoggedInRedirect";
import NotLoggedInRedirect from "../Redirect/NotLoggedInRedirect";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
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
      element: <BackEndLayout />,
      children: [
         {
            path: "/root",
            element: (
               <NotLoggedInRedirect>
                  <Dashboard />
               </NotLoggedInRedirect>
            ),
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
      path: "*",
      element: "Error 404",
   },
]);

export default router;
