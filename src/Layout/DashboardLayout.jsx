import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import DashboardNav from "../Component/DashboardNav";


const DashboardLayout = () => {
    return (
        <div className="dark:bg-darkbg dark:text-whiteColor min-h-[100vh]">
            <Navbar></Navbar>
            <div className="grid grid-cols-4 container gap-5">
                <div className="col-span-1 bg-secondoryColor dark:bg-lightdarkbg py-5 min-h-[100vh]">
                    <DashboardNav></DashboardNav>
                </div>
                <div className="col-span-3 bg-red-300">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;