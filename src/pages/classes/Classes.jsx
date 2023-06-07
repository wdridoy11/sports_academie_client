import React from 'react'
import Cover from '../../components/shared/cover/Cover'
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
const coverImage = `https://img.freepik.com/free-photo/empty-classroom-due-coronavirus-pandemic_637285-8845.jpg?w=1380&t=st=1686107959~exp=1686108559~hmac=416fd2d9a871e381f690c10bd21f2ce1ae9be581a09438a4a693a396d7e654bc`

const Classes = () => {
  const {user} = useContext(AuthContext);
  const handleLoginCheck=()=>{
    if(!user){
      Swal.fire(
        'Login Please',
        'Log in before selecting the course',
        'error'
      )
    }else{
      Swal.fire(
        'Congratulation',
        'Course selecting successful',
        'success'
      )
    }
  }
  
  return (
    <div>
      <Cover coverImg={coverImage} title="Classes"></Cover>
        <div className='container mx-auto px-5 py-20'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='rounded-lg'>
                  <img className='w-full b-[300px] object-cover rounded-t-md' src={coverImage} alt="Sports_image" />
                  <div className='p-4 border rounded-b-lg'>
                      <h3 className='text-2xl font-semibold mb-4'>Food Ball</h3>
                      <div className='flex justify-between'>
                          <div className='flex gap-2 items-center'>
                              <img className='w-7 h-7 object-cover rounded-full' src={coverImage} alt="Instructors" />
                              <p className='text-base font-normal text-[#062015]'>Instructor name</p>
                          </div>
                          <div className='flex gap-1 items-center'>
                              <FaUserCircle className='text-'></FaUserCircle>
                              <p className='text-base font-normal text-[#062015]'>100</p>
                          </div>
                          <div>
                              <p className='text-xl font-bold text-black'>$50</p>
                          </div>
                      </div>
                      <button onClick={handleLoginCheck} className='px-7 py-2 bg-black text-white rounded-md font-semibold text-base mt-5'>Select</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Classes