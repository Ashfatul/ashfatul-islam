import { createBrowserRouter } from "react-router-dom";
import BackEndLayout from "../layout/BackEndLayout";
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
import UpdateBackEndProfile from "../components/UpdateProfile/UpdateBackEndProfile";
import UpdateFrontEndProfile from "../components/UpdateProfile/UpdateFrontEndProfile";
import UpdateSocialLinks from "../components/UpdateProfile/UpdateSocialLinks";
import ManageSkills from "../components/ManageSkills/ManageSkills";
import ManageSkillsCategory from "../components/ManageSkills/ManageSkillsCategory";

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
            path: "/root/frontend-profile",
            element: <UpdateFrontEndProfile />,
         },
         {
            path: "/root/backend-profile",
            element: <UpdateBackEndProfile />,
         },
         {
            path: "/root/social-links",
            element: <UpdateSocialLinks />,
         },
         {
            path: "/root/add-project",
            element: <ProjectAddUpdateForm isUpdating={false} />,
         },
         {
            path: "/root/manage-skills-category",
            element: <ManageSkillsCategory />,
         },
         {
            path: "/root/manage-skills",
            element: <ManageSkills />,
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
