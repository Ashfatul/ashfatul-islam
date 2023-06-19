import { createBrowserRouter } from "react-router-dom";
import BackEndLayout from "../layout/BackEndLayout";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Login from "../components/Login/Login";
import LoggedInRedirect from "../Redirect/LoggedInRedirect";
import NotLoggedInRedirect from "../Redirect/NotLoggedInRedirect";
import Dashboard from "../components/Dashboard/Dashboard";
import Error404 from "../components/Error404/Error404";
import FrontEndLayout from "../layout/FrontEndLayout";
import Home from "../pages/Home/Home";
import ProjectAddUpdateForm from "../components/ProjectAddUpdateForm/ProjectAddUpdateForm";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

const router = createBrowserRouter([
   {
      path: "/",
      element: <FrontEndLayout />,
      children: [
         { path: "/", element: <Home /> },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/skills",
            element: <Skills />,
         },
         {
            path: "/projects",
            element: <Projects />,
         },
      ],
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
         {
            path: "/root/add-project",
            element: <ProjectAddUpdateForm isUpdating={false} />,
         },
         {
            path: "/root/update-project/:id",
            element: <ProjectAddUpdateForm isUpdating />,
         },
      ],
   },
   {
      path: "*",
      element: <Error404 />,
   },
]);

export default router;
