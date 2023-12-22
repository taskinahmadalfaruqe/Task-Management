import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ResisterPage from "../Pages/ResisterPage/ResisterPage";
import ErrorPage from "../Pages/ErrorPage";
import AboutPage from "../Pages/About/AboutPage";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AddTask from "../Pages/Dashboard/AddTask";
import UpdateTask from "../Pages/Dashboard/UpdateTask";
import ChangeStatus from "../Pages/Dashboard/ChangeStatus";
import ReviewsPage from "../Pages/Reviews/ReviewsPage";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/about',
                element:<AboutPage></AboutPage>
            },
            {
                path: '/reviews',
                element:<ReviewsPage></ReviewsPage>
            },
            {
                path: '/login',
                element:<LoginPage></LoginPage>
            },
            {
                path: '/resister',
                element:<ResisterPage></ResisterPage>
            },
            
        ]

    },
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard/home',
                element: <DashboardHome></DashboardHome>
            },
            {
                path:'/dashboard/addtask',
                element: <AddTask></AddTask>
            },
            {
                path:'/dashboard/updateTask/:id',
                element: <UpdateTask></UpdateTask>
            },
            {
                path:'/dashboard/changeStatus/:id',
                element: <ChangeStatus></ChangeStatus>
            },
        ]
    },
]
);

export default Router;