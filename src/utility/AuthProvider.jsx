import { createContext } from "react";
import {
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from "firebase/auth";
import app from "./firebase";
import { useEffect } from "react";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Loader from "../components/Loader/Loader";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const signIn = async (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
         .then(() => {
            toastr.success("Login Success");
            setLoading(false);
            return "success";
         })
         .catch((e) => {
            toastr.error(e.message);
            setLoading(false);
         });
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const profileUpdate = (data) => {
      if (user) {
         updateProfile(user, {
            displayName: data.displayName,
            photoURL: data.photoURL,
         })
            .then(() => {
               toastr.success("Profile updated");
               return "success";
            })
            .catch((error) => {
               toastr.error(error.message);
            });
      }
   };

   const profileUpdateFrontEnd = (data) => {
      fetch(`${import.meta.env.VITE_API_SERVER}update-user-profile/`, {
         method: "PATCH",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then(() => {
            toastr.success("Profile Updated Successfully");
         })
         .catch((e) => console.log(e));
   };

   const socialLinksUpdate = (data) => {
      fetch("${import.meta.env.VITE_API_SERVER}social-links", {
         method: "PATCH",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then(() => {
            toastr.success("Social links Updated Successfully");
         })
         .catch((e) => console.log(e));
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
         setUser(loggedUser);
         setLoading(false);
      });

      return () => {
         unsubscribe();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      signIn,
      logOut,
      profileUpdate,
      profileUpdateFrontEnd,
      socialLinksUpdate,
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {loading ? <Loader /> : children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
