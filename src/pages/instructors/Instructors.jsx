import React, { useEffect, useState } from 'react'
import Cover from '../../components/shared/cover/Cover'
const coverImage = `https://img.freepik.com/free-photo/empty-classroom-due-coronavirus-pandemic_637285-8845.jpg?w=1380&t=st=1686107959~exp=1686108559~hmac=416fd2d9a871e381f690c10bd21f2ce1ae9be581a09438a4a693a396d7e654bc`

const Instructors = () => {

  const [instructors, setInstructors] = useState([]);
  
useEffect(()=>{
  fetch(`https://sports-academie-server.vercel.app/users`)
  .then((res)=>res.json())
  .then((data)=>{
    const filterUser = data.filter(userRole=>userRole.role ==="instructor")
    setInstructors(filterUser)
  })
},[])


  return (
    <div>
      <Cover coverImg={coverImage} title="Classes"></Cover>
        <div className='container mx-auto px-5 py-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
              {instructors.map((instructorsInfo)=><>
                <div className='rounded-lg'>
                  <img className='w-full h-[300px] object-cover rounded-t-md' src={instructorsInfo.photoURL} alt="instructors_image" />
                  <div className='p-4 border rounded-b-lg'>
                      <h3 className='text-2xl font-semibold'>{instructorsInfo.name || instructorsInfo.displayName}</h3>
                      <p className='text-base font-normal text-[#062015]'>{instructorsInfo.email}</p>
                  </div>
                </div>             
              </>)}
            </div>
        </div>
    </div>
  )
}

export default Instructors