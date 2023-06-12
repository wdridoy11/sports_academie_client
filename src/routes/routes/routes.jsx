import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// import pages
import Main from '../../layout/Main'
import Error from '../../pages/error/Error'
import Login from '../../pages/login/Login'
import Home from '../../pages/home/home/Home'
import Dashboard from '../../layout/Dashboard'
import Classes from '../../pages/classes/Classes'
import Instructors from '../../pages/instructors/Instructors'
import Registration from '../../pages/registration/Registration'
import MyClass from '../../pages/dashboards/instructor/myClass/MyClass'
import AddClass from '../../pages/dashboards/instructor/addClass/AddClass'
import ManageUser from '../../pages/dashboards/admin/manageUser/ManageUser'
import ManageClass from '../../pages/dashboards/admin/manageClass/ManageClass'
import MySelecteClass from '../../pages/dashboards/student/mySelecteClass/MySelecteClass'
import Payment from '../../pages/dashboards/payment/Payment'
import MyEnrollClass from '../../pages/dashboards/student/myEnrollClass/MyEnrollClass'
import PrivetRoute from '../privetRoute/PrivetRoute'

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
                path:"add_class",
                element:<AddClass></AddClass>
            },
            {
                path:"my_class",
                element:<MyClass></MyClass>
            },
            {
                path:"manage_class",
                element:<ManageClass></ManageClass>
            },
            {
                path:"manage_user",
                element:<ManageUser></ManageUser>
            },
            {
                path:"my_enroll_class",
                element:<MyEnrollClass></MyEnrollClass>
            },
            {
                path:"my_selecte_class",
                element:<MySelecteClass></MySelecteClass>
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