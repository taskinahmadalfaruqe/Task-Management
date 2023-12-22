import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import DashboardNav from "../Component/DashboardNav";


const DashboardLayout = () => {
    return (
        <div className="dark:bg-darkbg dark:text-whiteColor min-h-[100vh]">
            <Navbar></Navbar>
            <div className="grid grid-cols-4 container gap-5">
                <div className=" hidden lg:flex justify-center items-start col-span-1 bg-secondoryColor dark:bg-lightdarkbg py-5 ">
                    <DashboardNav></DashboardNav>
                </div>
                <div className="col-span-4 lg:col-span-3">
                    <h1 className="text-center mt-5 font-bold text-primaryColor text-3xl">Welcome to Task Management Web..</h1>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;