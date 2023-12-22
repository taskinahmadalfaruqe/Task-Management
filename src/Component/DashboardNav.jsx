import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashboardNav = () => {
    const { user } = useAuth();
    const image = user?.photoURL
    return (
        <div className="flex justify-center items-center text-center flex-col gap-5">
            <div className="flex justify-center items-center text-center flex-col">
                <img src={image} alt="UserImage" className="w-20 h-20 rounded-full border border-primaryColor" />
                <h2>{user?.displayName}</h2>
                <p>{user?.email}</p>
            </div>
            <div className="w-full px-5 flex justify-center items-center gap-5 flex-col">
                <NavLink
                    to={"/dashboard/home"}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primaryColor font-semibold text-lg w-full  text-whiteColor p-1 px-3 rounded-md"
                            : " hover:bg-secondoryColor font-semibold w-full text-lg   p-1 px-3  dark:hover:bg-transparent dark:hover:text-primaryColor hover:text-whiteColor border border-primaryColor rounded-md"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={"/dashboard/addtask"}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primaryColor font-semibold text-lg w-full  text-whiteColor p-1 px-3 rounded-md"
                            : " hover:bg-secondoryColor font-semibold w-full text-lg   p-1 px-3  dark:hover:bg-transparent dark:hover:text-primaryColor hover:text-whiteColor border border-primaryColor rounded-md"
                    }
                >
                    Add Task
                </NavLink>
            </div>
        </div>

    );
};

export default DashboardNav;