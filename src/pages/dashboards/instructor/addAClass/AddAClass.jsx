import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthProvider'

const AddAClass = () => {

    const {user} = useContext(AuthContext)
console.log(user)
  return (
    <div>
        <div className='container mx-auto px-5'>
            <div>
                <form>
                    <input 
                        type="text" 
                        name='class_name' 
                        id='class_name' 
                        placeholder="Class name" 
                        className="input input-bordered w-full" 
                    />
                    <input 
                        type="text" 
                        name='class_image' 
                        id='class_image' 
                        placeholder="Class Image" 
                        className="input input-bordered w-full" 
                    />
                    <input 
                        type="text" 
                        name='instructor_name' 
                        id='instructor_name' 
                        placeholder="Instructor Name" 
                        className="input input-bordered w-full" 
                    />
                    <input 
                        type="text" 
                        name='instructor_email' 
                        id='instructor_email'
                        defaultValue={user.email} 
                        placeholder="Instructor Email" 
                        className="input disabled input-bordered w-full" 
                        readOnly
                    />
                    <input 
                        type="tel" 
                        name='available_seats' 
                        id='available_seats'
                        placeholder="Available seats" 
                        className="input input-bordered w-full" 
                    />
                    <input 
                        type="text" 
                        name='price' 
                        id='price'
                        placeholder="Price" 
                        className="input input-bordered w-full" 
                    />
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddAClass