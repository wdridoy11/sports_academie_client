import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// import pages
import Main from '../../layout/Main'
import Error from '../../pages/error/Error'
import Login from '../../pages/login/Login'
import Home from '../../pages/home/home/Home'
import Dashboard from '../../layout/Dashboard'
import Classes from '../../pages/classes/Classes'
import AdminRoute from '../adminRoute/AdminRoute'
import PrivetRoute from '../privetRoute/PrivetRoute'
import Payment from '../../pages/dashboards/payment/Payment'
import Instructors from '../../pages/instructors/Instructors'
import Registration from '../../pages/registration/Registration'
import InstructorsRoute from '../instructorsRoute/InstructorsRoute'
import MyClass from '../../pages/dashboards/instructor/myClass/MyClass'
import AddClass from '../../pages/dashboards/instructor/addClass/AddClass'
import ManageUser from '../../pages/dashboards/admin/manageUser/ManageUser'
import ManageClass from '../../pages/dashboards/admin/manageClass/ManageClass'
import MySelecteClass from '../../pages/dashboards/student/mySelecteClass/MySelecteClass'
import MyEnrollClass from '../../pages/dashboards/student/myEnrollClass/MyEnrollClass'
import UpdateClass from '../../pages/dashboards/instructor/updateClass/UpdateClass'

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'instructors',
                element:<Instructors></Instructors>
            },
            {
                path:'classes',
                element:<Classes></Classes>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'registration',
                element:<Registration></Registration>
            },
        ]
    },
    {
        path:"dashboard",
        element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children:[
            {
                path:"manage_class",
                element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path:"manage_user",
                element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path:"add_class",
                element:<InstructorsRoute><AddClass></AddClass></InstructorsRoute>
            },
            {
                path:"my_class",
                element:<InstructorsRoute><MyClass></MyClass></InstructorsRoute>
            },
            {
                path:"update_class/:id",
                element:<InstructorsRoute><UpdateClass></UpdateClass></InstructorsRoute>,
                loader:({params})=>fetch(`https://sports-academie-server.vercel.app/manage_classes/${params.id}`)
            },
            {
                path:"my_enroll_class",
                element:<PrivetRoute><MyEnrollClass></MyEnrollClass></PrivetRoute>
            },
            {
                path:"my_selecte_class",
                element:<PrivetRoute><MySelecteClass></MySelecteClass></PrivetRoute>
            },
            {
                path:"payment",
                element:<Payment></Payment>
            },
        ]
    },
    {
        path:"*",
        element:<Error></Error>
    }
])

export default router