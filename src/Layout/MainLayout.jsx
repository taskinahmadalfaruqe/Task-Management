import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const MainLayout = () => {
    return (
        <div className="dark:bg-darkbg dark:text-whiteColor min-h-[100vh]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;