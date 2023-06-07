import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Home from '../../pages/home/home/Home'
import Login from '../../pages/login/Login'
import Registration from '../../pages/registration/Registration'
import Instructors from '../../pages/instructors/Instructors'
import Classes from '../../pages/classes/Classes'
import Dashboard from '../../layout/Dashboard'

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
        element:<Dashboard></Dashboard>
    }
])

export default router