import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { animated } from '@react-spring/web'
const ManageClass = () => {

  const [manageClasses,setManageClasses] = useState([]);
  // manage data get
  useEffect(()=>{
    fetch(`http://localhost:5000/manage_classes`)
    .then((res)=>res.json())
    .then((data)=>{
      setManageClasses(data)
    })
  },[manageClasses])

  const handleMakeApproved = (classes)=>{
    fetch(`http://localhost:5000/manage_classes/${classes._id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })
  }

  return (
    <div>
          <animated.div
            style={{
              width: 80,
              height: 80,
              background: '#ff6d6d',
              borderRadius: 50,
            }}
          />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
              manageClasses.map((classes)=><>
              <div className='rounded-lg'>
                  <img className='w-full h-[300px] object-cover rounded-t-md' src={classes.class_image} alt="Sports_image" />
                  <div className='p-4 border rounded-b-lg'>
                      <h3 className='text-2xl font-semibold mb-4'>{classes.class_name}</h3>
                      <div className='flex items-center justify-between'>
                          <div className=''>
                              <p className='text-base font-normal text-[#062015]'>{classes.instructor_name}</p>
                              <p className='text-base font-normal text-[#062015]'>{classes.instructor_email}</p>
                          </div>
                          <div className='flex gap-1 items-center'>
                              <FaUserCircle className='text-'></FaUserCircle>
                              <p className='text-base font-normal text-[#062015]'>{classes.available_seats}</p>
                          </div>
                          <div>
                              <p className='text-xl font-bold text-black'>${classes.price}</p>
                          </div>
                      </div>
                      <div>
                          <button 
                            className={classes.status === "pending"? 
                            'px-7 py-2 bg-black text-white rounded-md font-semibold text-base mt-5':
                            'px-7 py-2 border text-black rounded-md font-semibold text-base mt-5 ml-3'}> Pending
                          </button>
                          <button 
                            onClick={()=>handleMakeApproved(classes)}
                            className={classes.status === "approved"? 
                            'px-7 py-2 bg-black  text-white rounded-md font-semibold text-base mt-5 mx-3 disabled opacity-40 cursor-not-allowed':
                            'px-7 py-2 border text-black rounded-md font-semibold text-base mt-5 mx-3'}> Approved
                          </button>
                          <button 
                            className={classes.status === "approved"? 
                            'px-7 py-2 bg-black  text-white rounded-md font-semibold text-base mt-5 mx-3 disabled opacity-40 cursor-not-allowed':
                            'px-7 py-2 border text-black rounded-md font-semibold text-base mt-5 mx-3'}> Denied
                          </button>

                          {/* <button className='px-7 py-2 bg-black text-white rounded-md font-semibold text-base mt-5'>Pending</button> */}
                          {/* <button className='px-7 py-2 border text-black rounded-md font-semibold text-base mt-5 ml-3'>Approved</button> */}
                          {/* <button className='px-7 py-2 border text-black rounded-md font-semibold text-base mt-5 ml-3'>Denied</button> */}
                      </div>
                  </div>
                </div> 
              </>)
            }
        </div>
    </div>
  )
}

export default ManageClass