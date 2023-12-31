import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Cover from '../../components/shared/cover/Cover'
import { AuthContext } from '../../context/AuthProvider';
const coverImage = `https://img.freepik.com/free-photo/empty-classroom-due-coronavirus-pandemic_637285-8845.jpg?w=1380&t=st=1686107959~exp=1686108559~hmac=416fd2d9a871e381f690c10bd21f2ce1ae9be581a09438a4a693a396d7e654bc`

const Classes = () => {

  const {user} = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);

  // user data load from database and email check
  useEffect(()=>{
    fetch(`https://sports-academie-server.vercel.app/users`)
    .then((res)=>res.json())
    .then((data)=>{
      const userEmails = data.find((userEmail)=>userEmail.email === user.email);
      setUsers(userEmails)
    })
  },[user])

  // manage_classes data get from database if status approved then show class
  useEffect(()=>{
    fetch(`https://sports-academie-server.vercel.app/manage_classes`)
    .then((res)=>res.json())
    .then((data)=>{
      const statusCheck = data.filter((classStatus)=>classStatus.status==="approved")
      setClasses(statusCheck)
    })
  },[])

  // handle login check if user not login user not select class
  const handleLoginCheck=(classInfo,email)=>{
    if(!user){
      Swal.fire(
        'Login Please',
        'Log in before selecting the course',
        'error',
      )
    }else{
      // selects data post
      fetch(`https://sports-academie-server.vercel.app/selects`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({classInfo,email:`${email}`})
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        if(data.insertedId){
          Swal.fire(
            'Congratulation',
            'Course selecting successful',
            'success'
          )
        }
      })
    }
  }

  return (
    <div>
      <Cover coverImg={coverImage} title="Classes"></Cover>
        <div className='container mx-auto px-5 py-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {classes.map((classInfo)=><div key={classInfo._id} className='rounded-lg'>
                  <img className='w-full h-[300px] object-cover rounded-t-md' src={classInfo.class_image} alt="Sports_image" />
                  <div className='p-4 border rounded-b-lg'>
                      <h3 className='text-2xl font-semibold mb-4'>{classInfo.class_name}</h3>
                      <div className='flex justify-between'>
                          <div className='flex gap-2 items-center'>
                              <p className='text-base font-normal text-[#062015]'>{classInfo.instructor_name}</p>
                          </div>
                          <div className='flex gap-1 items-center'>
                              <FaUserCircle className='text-'></FaUserCircle>
                              <p className='text-base font-normal text-[#062015]'>{classInfo.available_seats}</p>
                          </div>
                          <div>
                              <p className='text-xl font-bold text-black'>${classInfo.price}</p>
                          </div>
                      </div>
                        {users && users.role !== "student" ? <button className='px-7 py-2 bg-red-600 text-white rounded-md font-semibold text-base mt-5 opacity-50' disabled>Select</button>:
                          <button onClick={()=>handleLoginCheck(classInfo, user && user.email)}  className='px-7 py-2 bg-black text-white rounded-md font-semibold text-base mt-5'>Select</button> 
                        }
                        {users && users.role == false && <button onClick={()=>handleLoginCheck(classInfo, user && user.email)}  className='px-7 py-2 bg-black text-white rounded-md font-semibold text-base mt-5'>Select</button> }
                  </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Classes