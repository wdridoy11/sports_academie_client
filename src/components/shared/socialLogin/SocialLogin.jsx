import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate= useNavigate();
  const auth = getAuth();
  // handle google login
  const handleGoogleLogin =()=>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then((res)=>{
      const user = res.user;
      fetch(`https://sports-academie-server.vercel.app/users`,{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(user)
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
      })
      navigate("/")
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  //  handle github login
  const handleGithubLogin =()=>{
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth,githubProvider)
    .then((res)=>{
      const user = res.user;
      console.log(user)
      navigate("/")
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  return (
    <div>
      <div className='flex gap-2 justify-center'>
        <button onClick={handleGoogleLogin} className='p-4 border text-xl glass rounded-full'><FaGoogle></FaGoogle></button>
        <button onClick={handleGithubLogin} className='p-4 border text-xl glass rounded-full'><FaGithub></FaGithub></button>
      </div>
    </div>
  )
}

export default SocialLogin