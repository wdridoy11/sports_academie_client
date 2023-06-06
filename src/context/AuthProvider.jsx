import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth';
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const [user,setUser] = useState([]);
  const [loading,setLoading]=useState(true)

  // create user using email and password
  const createUserUsingEmail=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // user login user email 
  const loginUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // logout user
  const logOut = ()=>{
    return signOut(auth)
  }

  // user login checking
  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
    })
    return()=>{
      return unSubscribe();
    }
  },[])

  // user info
  const userInfo ={
    user,
    logOut,
    loading,
    loginUser,
    createUserUsingEmail,
  }

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider