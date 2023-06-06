import React from 'react'
import {FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const SocialLogin = () => {
  return (
    <div>
      <div className='flex gap-2 justify-center'>
        <button className='p-4 border text-xl glass rounded-full'><FaGoogle></FaGoogle></button>
        <button className='p-4 border text-xl glass rounded-full'><FaGithub></FaGithub></button>
        <button className='p-4 border text-xl glass rounded-full'><FaFacebook></FaFacebook></button>
      </div>
    </div>
  )
}

export default SocialLogin