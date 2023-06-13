import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthProvider'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {

    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        fetch(`http://localhost:5000/manage_classes`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then((res)=>res.json(data))
        .then((data)=>{
          if(data.insertedId){
            Swal.fire(
                'Congratulation',
                'Class added successfully',
                'success'
              )
          }
          navigate("/dashboard/my_class")
        })
    };

  return (
    <div className='py-20'>
        <div className='container mx-auto px-5'>
            <h3 className='text-4xl font-semibold text-black text-center mb-5'>Add Class</h3>
            <div className='w-full lg:w-1/2 mx-auto p-10 border rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text" 
                        name='class_name' 
                        id='class_name'
                        {...register("class_name", { required: true})} 
                        placeholder="Class name" 
                        className="input mb-3 input-bordered w-full" 
                    />
                     {errors.class_name?.type === 'required' && <p className='text-red-600 mb-2' role="alert">Class name is required</p>}
                    <input 
                        type="text" 
                        name='class_image' 
                        id='class_image' 
                        {...register("class_image", { required: true})} 
                        placeholder="Class Image" 
                        className="input mb-3 input-bordered w-full" 
                    />
                     {errors.class_image?.type === 'required' && <p className='text-red-600 mb-2' role="alert">Class image is required</p>}
                    <input 
                        type="text" 
                        name='instructor_name' 
                        id='instructor_name' 
                        defaultValue={user.displayName}
                        {...register("instructor_name", { required: true})} 
                        placeholder="Instructor Name" 
                        className="input mb-3 disabled bg-slate-300 input-bordered w-full" 
                        readOnly
                    />
                    {errors.instructor_name?.type === 'required' && <p className='text-red-600 mb-2' role="alert">Instructor name is required</p>}
                    <input 
                        type="text" 
                        name='instructor_email' 
                        id='instructor_email'
                        defaultValue={user.email} 
                        {...register("instructor_email", { required: true})} 
                        placeholder="Instructor Email" 
                        className="input mb-3 disabled bg-slate-300 input-bordered w-full" 
                        readOnly
                    />
                    {errors.instructor_email?.type === 'required' && <p className='text-red-600 mb-2' role="alert">Instructor email is required</p>}
                    <input 
                        type="number" 
                        name='available_seats' 
                        id='available_seats'
                        {...register("available_seats", { required: true})} 
                        placeholder="Available seats" 
                        className="input mb-3 input-bordered w-full" 
                    />
                    {errors.available_seats?.type === 'required' && <p className='text-red-600 mb-2' role="alert">Available seats is required</p>}
                    <input 
                        type="number" 
                        name='price' 
                        id='price'
                        {...register("price", { required: true})} 
                        placeholder="Price" 
                        className="input mb-3 input-bordered w-full" 
                    />
                    {errors.price?.type === 'required' && <p className='text-red-600 mb-2' role="alert">Price is required</p>}
                    <button className='px-7 py-2 bg-[#05F3FF] text-white rounded-md font-semibold text-base mt-5'>Add a class</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddClass
