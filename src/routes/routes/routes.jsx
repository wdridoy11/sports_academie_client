import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Home from '../../pages/home/home/Home'
import Login from '../../pages/login/Login'
import Registration from '../../pages/registration/Registration'
import Instructors from '../../pages/instructors/Instructors'
import Classes from '../../pages/classes/Classes'
import Dashboard from '../../layout/Dashboard'
import AddClass from '../../pages/dashboards/instructor/addClass/AddClass'
import MyClass from '../../pages/dashboards/instructor/myClass/MyClass'

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
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"add_class",
                element:<AddClass></AddClass>
            },
            {
                path:"my_class",
                element:<MyClass></MyClass>
            }
        ]
    }
])

export default router