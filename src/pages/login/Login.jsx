import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import loginImg from '../../assets/login.png'
import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
const bgImage =`https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=900&t=st=1686065798~exp=1686066398~hmac=49de08e1ec1392f4b6527388784cb99430c4a629bb8e5b18a72c65a06e3e6923`

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const [error,setError] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password)
        .then((res)=>{
          const user = res.user;
          console.log(user)
        })
        .catch((err)=>setError(err.message))
    };
  
  return (
    <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})`}}>
          <div className="hero-overlay bg-opacity-30"></div>
            <div className='container mx-auto px-5'>
                <div className='grid md:grid-cols-2 glass gap-10 py-20 px-10 rounded-xl items-center'>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <p className='text-red-600 text-center mb-2 text-lg '>{error}</p>
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
                          <div>
                            <input 
                                  type="password" 
                                  name='password' 
                                  id='password' 
                                  {...register("password",{required: true})}
                                  placeholder="Enter your password"
                                  className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                              />
                              {errors.password?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Password field is required</p>}
                          </div>
                          <input 
                                className='py-2 block w-full px-10 rounded-full text-white mt-5 cursor-pointer text-base font-medium glass' 
                                type="submit" 
                                value="Login" 
                          />
                        </form>
                        <p className='text-base font-medium text-white text-center mt-4'>
                            New here? <Link className='text-slate-800' to={`/registration`}>Create a New Account</Link>
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
    </div>
  )
}

export default Login