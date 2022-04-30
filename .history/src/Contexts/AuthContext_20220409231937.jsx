import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Database/init-firebase';
import {
  createUserWithEmailAndPassword, //* this will create: email, password,
  signInWithEmailAndPassword, //* this is to signIn with
  onAuthStateChanged, //* this check any change of signed in and signed out
  signOut, //* signout
  // GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updateEmail,
  // getAuth
} from 'firebase/auth';

// const authUpdate = getAuth()

const AuthContext = createContext({
  currentUser:{uid:1234, email:"email",displayName:"name",photoURL:"https://cdn.freebiesupply.com/logos/large/2x/ck-logo-svg-vector.svg"},
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
  updateUserProfile: () => Promise,
})


// This is the variable that will be used in the comp register
export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    uid:1234, 
    email:"",
    displayName:"",
    photoURL:""
  })

  // * this useEffect is updating the [currentUser] state each time the user login & logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null);
    })
    return () => {
      unsubscribe()
    }
  }, [])

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  function logout() {
    return signOut(auth)
  }

  // !signIn with Google Auth
  //   function signInWithGoogle() {
  //   const provider = new GoogleAuthProvider()
  //   return signInWithPopup(auth, provider)
  // }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  //Read more documentation on firebase if you want to learn more
  function updateUserProfile(username){
    // here i'm retrieving the user & update it
    return updateEmail(auth.currentUser, username)
  }


  const value = {
    currentUser,
    register, //import the value
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    resetPassword,
    updateUserProfile
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}