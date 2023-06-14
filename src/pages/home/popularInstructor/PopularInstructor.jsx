import React, { useEffect, useState } from 'react'

const PopularInstructor = () => {

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
        <div>
            <div className='container mx-auto px-5 py-20'>
            <h1 className='text-4xl font-semibold text-black text-center mb-5'>Popular Instructor</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-10'>
              {instructors.map((instructorsInfo)=><div key={instructorsInfo._id} className='rounded-lg'>
                  <img className='w-full h-[200px] object-cover rounded-t-md' src={instructorsInfo.photoURL} alt="instructors_image" />
                </div>)}
            </div>
        </div>
        </div>
    </div>
  )
}

export default PopularInstructor