import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  console.log(auth);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
 const sendEmailVerificationFunc = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const signoutUserFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

   const signInWithGoogleFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    updateProfileFunc,
    createUserWithEmailAndPasswordFunc,
    sendEmailVerificationFunc,
    signoutUserFunc,
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
