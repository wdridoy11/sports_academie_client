import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const MySelecteClass = () => {

  const [selects, setSelects] = useState([]);
  // class data load
  useEffect(()=>{
    fetch(`http://localhost:5000/selects`)
    .then((res)=>res.json())
    .then((data)=>{
      setSelects(data)
    })
  },[])


  const handleRemoveSelects=(id)=>{
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
        fetch(`http://localhost:5000/selects/${id}`,{
          method:"DELETE",
          headers:{
            "content-type":"application/json"
          }
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.deletedCount>0){
            Swal.fire("Deleted!", "User deleted successfully", "success");
          }
          const remaining = selects.filter((user)=>user._id !== id);
          setSelects(remaining);
        })
      }
    })
  }


  return (
    <div>
      <div>
        <div className='grid grid-cols-3 gap-5'>
          {selects.map((classes)=><div>
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
                    <button onClick={()=>handleRemoveSelects(classes._id)} className='px-7 py-2 bg-red-600 text-white rounded-md font-semibold text-base mt-5 mr-3'>Remove</button>
                    <button className='px-7 py-2 bg-[#05F3FF] text-black rounded-md font-semibold text-base mt-5'>Pay Now</button>
                </div>
             </div> 
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default MySelecteClass