import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthProvider'
import { useForm } from 'react-hook-form';

const AddAClass = () => {

    const {user} = useContext(AuthContext)
    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = data =>{
        console.log(data)
    };
  return (
    <div>
        <div className='container mx-auto px-5'>
            <div className='w-full lg:w-1/2 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name='class_name' 
                        id='class_name'
                        {...register("class_name", { required: true})} 
                        placeholder="Class name" 
                        className="input mb-3 input-bordered w-full" 
                    />
                    <input 
                        type="text" 
                        name='class_image' 
                        id='class_image' 
                        {...register("class_image", { required: true})} 
                        placeholder="Class Image" 
                        className="input mb-3 input-bordered w-full" 
                    />
                    <input 
                        type="text" 
                        name='instructor_name' 
                        id='instructor_name' 
                        {...register("instructor_name", { required: true})} 
                        placeholder="Instructor Name" 
                        className="input mb-3 input-bordered w-full" 
                    />
                    <input 
                        type="text" 
                        name='instructor_email' 
                        id='instructor_email'
                        defaultValue={user.email} 
                        placeholder="Instructor Email" 
                        className="input mb-3 disabled bg-slate-300 input-bordered w-full" 
                        readOnly
                    />
                    <input 
                        type="number" 
                        name='available_seats' 
                        id='available_seats'
                        {...register("available_seats", { required: true})} 
                        placeholder="Available seats" 
                        className="input mb-3 input-bordered w-full" 
                    />
                    <input 
                        type="number" 
                        name='price' 
                        id='price'
                        {...register("price", { required: true})} 
                        placeholder="Price" 
                        className="input mb-3 input-bordered w-full" 
                    />
                    <button className='px-7 py-2 bg-black text-white rounded-md font-semibold text-base mt-5'>Add a class</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddAClass