import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthProvider'
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyClass = () => {

  const {user} = useContext(AuthContext);
  const [instructorClass, setInstructorClass] = useState([]);
  // manage_class instructor find
  useEffect(()=>{
    fetch(`https://sports-academie-server.vercel.app/manage_classes`)
    .then((res)=>res.json())
    .then((data)=>{
      const instructorData = data.filter((ins)=>ins.instructor_email === user.email)
      setInstructorClass(instructorData)
    })
  },[])
  
  return (
    <div className='w-full'>
      <div className='px-5'>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>image</th>
                <th>name</th>
                <th>Process</th>
                <th>Total Enrolled</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {instructorClass.map((instructor,index)=><>
                <tr>
                   <th>{index+1}</th>
                   <td>
                     <div className="flex items-center space-x-3">
                         <div className="mask mask-squircle w-12 h-12">
                           <img className='w-12 h-12 object-cover' src={instructor.class_image} alt="Avatar Tailwind CSS Component" />
                         </div>
                     </div>
                   </td>
                   <td className='text-base font-semibold'>{instructor.class_name}</td>
                   <td><button className='px-5 py-2 bg-[#05F3FF] rounded-md'>{instructor.status}</button></td>
                   <td className='text-base font-semibold'>0</td>
                   <td className='text-base font-semibold'>Feedback</td>
                   <td>
                      <Link to={`/dashboard/update_class/${instructor._id}`}>
                          <FaEdit className='text-4xl rounded-md bg-[#05F3FF] p-2'></FaEdit>
                      </Link>
                    </td>
                  </tr>
              </>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyClass


