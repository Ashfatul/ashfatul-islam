import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function FrontEndLayout() {
   const [user, setUser] = useState({});

   useEffect(() => {
      fetch(`${import.meta.env.VITE_API_SERVER}user/`)
         .then((res) => res.json())
         .then((res) => setUser(res))
         .catch((e) => console.log(e));
   }, []);
   return (
      <>
         <Helmet>
            <title>{user.displayName || ""} | Portfolio</title>
         </Helmet>

         <Header user={user} />
         <Outlet />
         <Footer user={user} />
      </>
   );
}
