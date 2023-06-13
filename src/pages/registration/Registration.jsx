import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import loginImg from '../../assets/login.png'
import { AuthContext } from '../../context/AuthProvider';
import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
const bgImage =`https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=900&t=st=1686065798~exp=1686066398~hmac=49de08e1ec1392f4b6527388784cb99430c4a629bb8e5b18a72c65a06e3e6923`

const Registration = () => {

  const [showPassword, setShowPassword] = useState(false);
  const {createUserUsingEmail, updateUserProfile} = useContext(AuthContext)
  const [confirmPassword, setConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
      if(data.password !== data.confirm_password){
       Swal.fire(
        'Password',
        'Password not matching please try again',
        'error'
      )
      }else{
        fetch(`https://sports-academie-server.vercel.app/users`,{
          method:"POST",
          headers:{
            'content-type':"application/json"
          },
          body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        // create user
        createUserUsingEmail(data.email, data.password)
        .then((res)=>{
          const user = res.user;
          updateUserProfile(user,data.name,data.photoURL)
          console.log("user",user)
        })
        .catch((err)=>console.log(err.message))
      }
    };

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})`}}>
    <div className="hero-overlay bg-opacity-30"></div>
      <div className='container mx-auto px-5'>
          <div className='grid md:grid-cols-2 glass gap-10 py-20 px-10 rounded-xl items-center'>
              <div className=''>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                      <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            {...register("name",{required: true})}
                            placeholder="Enter your Name" 
                            className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white   rounded-full w-full" 
                        />
                        {errors.name?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Name field is required</p>}
                    </div>
                    <div className='mb-3'>
                      <input 
                            type="email" 
                            name='email' 
                            id='name' 
                            {...register("email",{required: true})}
                            placeholder="Enter your email" 
                            className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white   rounded-full w-full" 
                        />
                        {errors.email?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Email field is required</p>}
                    </div>
                    <div className='mb-3'>
                      <input 
                            type="tel" 
                            name='tel' 
                            id='tel' 
                            {...register("tel",{required: true})}
                            placeholder="Enter your Phone" 
                            className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white   rounded-full w-full" 
                        />
                        {errors.email?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Email field is required</p>}
                    </div>
                    <div className='mb-3'>
                      <div className='relative'>
                          <input 
                                type={showPassword ? "text":"password"} 
                                name='password' 
                                id='password' 
                                {...register("password",
                                  {
                                    required: true,
                                    minLength: 6, 
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                  })
                                }
                                placeholder="Enter your password"
                                className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                            />
                            <button onClick={()=>setShowPassword(password=>!password)} className='absolute top-1/3 right-6 text-xl'>
                                <FaEye></FaEye>
                            </button>
                      </div>
                        {errors.password?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Password field is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-600 pl-3 mt-1' role="alert">Password minimum 6 character</p>}
                        {errors.password?.type === 'pattern' && <p role="alert" className='text-red-600'>Password must have one Uppercase one lowercase one number one special characters </p>}
                    </div>
                    <div className='mb-3'>
                      <div className='relative'>
                      <input 
                            type={confirmPassword ? "text":"password"}
                            name='confirm_password' 
                            id='confirm_password' 
                            {...register("confirm_password",{required: true})}
                            placeholder="Confirm Password"
                            className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                        />
                         <button onClick={()=>setConfirmPassword(password=>!password)} className='absolute top-1/3 right-6 text-xl'>
                              <FaEye></FaEye>
                        </button>
                      </div>
                        {errors.confirm_password?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Confirm Password field is required</p>}
                    </div>
                    <div className='mb-3'>
                      <input 
                            type="text" 
                            name='photoURL' 
                            id='photoURL' 
                            {...register("photoURL",{required: true})}
                            placeholder="Enter your Photo URL"
                            className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                        />
                        {errors.photoURL?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Photo field is required</p>}
                    </div>
                    <input 
                          className='py-2 block w-full px-10 rounded-full mt-5 cursor-pointer text-base text-white font-medium glass' 
                          type="submit" 
                          value="Registration" 
                    />
                  </form>
                  <p className='text-base font-medium text-white text-center mt-4'>
                      New here? <Link className='text-slate-800' to={`/login`}> Login</Link>
                  </p>
                  <div className="divider before:bg-white after:bg-white text-white">OR</div>
                  <SocialLogin></SocialLogin>
              </div>
              <div>
                  <img className='w-full md:w-9/12' src={loginImg} alt="login" />
              </div>
          </div>
      </div>
  </div>
  )
}

export default Registration