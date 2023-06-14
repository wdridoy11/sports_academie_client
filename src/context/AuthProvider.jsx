import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth';
import app from '../utils/firebase/firebase.config';
import axios from 'axios';
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


  //user profile update
  const updateUserProfile=(user,name,photo)=>{
      updateProfile(user,{
          displayName:name,
          photoURL:photo
      })
      .then((result)=>console.log(result))
      .catch((error)=>console.log(error.message))

  }

  // user login checking
  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      if(currentUser){
        axios.post('http://localhost:5000/jwt',{email:currentUser.email})
        .then((data)=>{
          // console.log(data.data.token)
          localStorage.setItem("access-token",data.data.token)
        })
      }else{
        localStorage.removeItem("access-token")
      }
      setLoading(false)
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
    updateUserProfile,
    createUserUsingEmail,
  }

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider