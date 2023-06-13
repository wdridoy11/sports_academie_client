import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySelecteClass = () => {

  const token = localStorage.getItem("access-token")
  const [selects, setSelects] = useState([]);
  // class data load
  useEffect(()=>{
    fetch(`https://sports-academie-server.vercel.app/selects`)
    .then((res)=>res.json())
    .then((data)=>{
      setSelects(data)
    })
  },[])

  const handleRemoveSelects=(classInfo)=>{
    console.log(classInfo)
    Swal.fire({
      title: 'Are you sure?',
      text: "You will delete class!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-academie-server.vercel.app/selects/${classInfo._id}`,{
          method:"DELETE",
          headers:{
            "content-type":"application/json"
          }
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
          if(data.deletedCount>0){
            Swal.fire("Deleted!", "User deleted successfully", "success");
          }
          const remaining = selects.filter((select)=>select._id !== classInfo._id);
          setSelects(remaining);
        })
      }
    })
  }
  
  return (
    <div>
      <div>
        <div className='grid grid-cols-3 gap-5'>
          {selects && selects.map((classes)=><div>
            <div className='rounded-lg'>
              <img className='w-full h-[300px] object-cover rounded-t-md' src={classes.class_image} alt="Sports_image" />
              <div className='p-4 border rounded-b-lg'>
                <h3 className='text-2xl font-semibold mb-4'>{classes.class_name}</h3>
                <div className='flex justify-between'>
                  <div className='flex gap-2 items-center'>
                    <img className='w-7 h-7 object-cover rounded-full' src={classes.class_image} alt="Instructors" />
                    <p className='text-base font-normal text-[#062015]'>{classes.instructor_name}</p>
                  </div>
                  <div>
                    <p className='text-xl font-bold text-black'>${classes.price}</p>
                  </div>
                </div>
                    <button onClick={()=>handleRemoveSelects(classes)} className='px-7 py-2 bg-red-600 text-white rounded-md font-semibold text-base mt-5 mr-3'>Remove</button>
                    <Link to={'/dashboard/payment'} className='px-7 py-2 bg-[#05F3FF] text-black rounded-md font-semibold text-base mt-5'>Pay Now</Link>
                </div>
             </div> 
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default MySelecteClass