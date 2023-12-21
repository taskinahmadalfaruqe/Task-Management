import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ResisterPage from "../Pages/ResisterPage/ResisterPage";
import ErrorPage from "../Pages/ErrorPage";
import AboutPage from "../Pages/About/AboutPage";
import PhotoPage from "../Pages/Photo/PhotoPage";


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
                path: '/photo',
                element:<PhotoPage></PhotoPage>
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
        element:<ResisterPage></ResisterPage>
    },
]
);

export default Router;