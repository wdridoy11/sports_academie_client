import React from 'react'
import { Link } from 'react-router-dom'
const errorImage = `https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=1380&t=st=1686222231~exp=1686222831~hmac=ddb69867d15d84171df78b481d3192618659e22288f61cb42df21246e2ea367b`;
const Error = () => {
  return (
    <div>
        <div className='container mx-auto px-5'>
            <div className='w-full md:w-1/2 mx-auto text-center'>
                <img src={errorImage} alt="error page" />
                <h1 className='text-7xl font-bold text-black mb-1'>404</h1>
                <h3 className='text-4xl font-semibold text-black mb-4'>Page Not Found!</h3>
                <Link to={'/'} className='px-7 py-2 bg-[#05F3FF] text-white rounded-md font-semibold text-base mt-5'>Back to Home Page</Link>
            </div>
        </div>
    </div>
  )
}

export default Error