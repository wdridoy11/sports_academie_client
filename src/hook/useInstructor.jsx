import { useContext } from "react"
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../context/AuthProvider";

const useInstructor =()=>{
const {user} = useContext(AuthContext);
const [axiosSecure]= useAxiosSecure();
const {data:isInstructor, isLoading:isInstructorLoading}=useQuery({
  queryKey:["isInstructor",user?.email],
  queryFn:async()=>{
    const res = await axiosSecure.get(`users/instructor/${user?.email}`)
    return res.data.admin
  }
})
return [isInstructor, isInstructorLoading]
}
export default useInstructor
