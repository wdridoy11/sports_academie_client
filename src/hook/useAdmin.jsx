import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";

const useAdmin =()=>{
const {user} = useContext(AuthContext);
const [axiosSecure]= useAxiosSecure();
const {data:isadmin, isLoading:isAdminLoading}=useQuery({
  queryKey:["isadmin",user?.email],
  queryFn:async()=>{
    const res = await axiosSecure.get(`users/admin/${user?.email}`)
    return res.data.admin
  }
})
return [isadmin, isAdminLoading]
}
export default useAdmin