import { createContext } from "react";
import {
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   //    updateProfile,
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
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {loading ? <Loader /> : children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
