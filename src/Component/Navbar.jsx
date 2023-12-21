import { Link, NavLink } from "react-router-dom";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";


const html = document.documentElement;

const Navbar = () => {
    const { user, handelLogOut } = useAuth();
    const [clicked, setClicked] = useState(false);
    const [isDark, setIsDark] = useState('light');


    const handelUserInfo = () => {
        setClicked(!clicked)
    }


    useEffect(() => {
        const setMood = localStorage.getItem('mood');
        html.classList.add(setMood || 'light')
        setIsDark(setMood || 'light')
    }, [])

    const isDarkClled = () => {

        if (isDark === 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            localStorage.setItem('mood', 'dark')
            setIsDark('dark')

        } else {
            html.classList.remove('dark');
            html.classList.add('light')
            localStorage.setItem('mood', 'light')
            setIsDark('light')
        }
    }

    const NavBar = (
        <div className="flex flex-col gap-5 lg:gap-2 xl:flex-row justify-center lg:justify-center lg:items-center ">
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-primaryColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : "  hover:bg-secondoryColor font-semibold text-lg  border-primaryColor p-1 px-3 rounded-md dark:hover:bg-transparent dark:hover:text-primaryColor"
                }
            >
                Home
            </NavLink>

            <NavLink
                to={"/about"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-primaryColor font-semibold text-lg  text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-secondoryColor font-semibold text-lg  border-primaryColor p-1 px-3 rounded-md dark:hover:bg-transparent dark:hover:text-primaryColor"
                }
            >
                About
            </NavLink>

            <NavLink
                to={"/photo"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-primaryColor font-semibold text-lg  text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-secondoryColor font-semibold text-lg  border-primaryColor p-1 px-3 rounded-md dark:hover:bg-transparent dark:hover:text-primaryColor"
                }
            >
                Photo
            </NavLink>
            {
                user ? <NavLink
                    to={"/dashboard"}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-primaryColor font-semibold text-lg  text-whiteColor p-1 px-3 rounded-md"
                            : " hover:bg-secondoryColor font-semibold text-lg  border-primaryColor p-1 px-3 rounded-md dark:hover:bg-transparent dark:hover:text-primaryColor"
                    }
                >
                    Dashboard
                </NavLink> : ""
            }


            <div>
                {user ? (
                    <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                        <div
                            onClick={handelUserInfo}
                            className=" relative w-full flex justify-center items-center">
                            <div className="w-14 h-14 rounded-full border border-primaryColor  cursor-pointer overflow-hidden">
                                {user ? (user && (user.photoURL ?
                                    <img className="w-full h-full" src={user.photoURL} alt="User" /> : <img src="https://i.ibb.co/2nC8FF4/user.webp"></img>))
                                    :
                                    <img src="https://i.ibb.co/2nC8FF4/user.webp" className="w-full h-full" ></img>}
                            </div>

                            {/* ABSOLUTE PART  */}
                            {
                                clicked ? <div className="top-0 left-[50%] -translate-x-[50%] -xl:translate-x-0  xl:top-16 xl:right-0 xl:w-[25vw] absolute z-20 border border-primaryColor  rounded-md p-5 text-center  flex justify-center items-center gap-3 flex-col  text-lg font-semibold bg-secondoryColor dark:bg-lightdarkbg">
                                    <div className="flex justify-end items-center w-full">
                                        <AiOutlineClose className="text-3xl font-bold  cursor-pointer bg-Primborder-primaryColor rounded-md hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300"></AiOutlineClose>
                                    </div>
                                    <div className="w-14 h-14 rounded-full border border-primaryColor  cursor-pointer relative overflow-hidden">
                                        {user ? (user && (user.photoURL ?
                                            <img className="w-full h-full" src={user.photoURL} alt="User" /> : <img src="https://i.ibb.co/2nC8FF4/user.webp"></img>))
                                            :
                                            <img src="https://i.ibb.co/2nC8FF4/user.webp" className="w-full h-full" ></img>}
                                    </div>
                                    <div>
                                        <h2>{user.displayName}</h2>
                                        <h2>{user.email}</h2>
                                    </div>

                                    <div className="flex justify-center items-center gap-5 w-full flex-col">
                                        <Link
                                            to={'/dashboard'}
                                            className=" border-primaryColor bg-primaryColor hover:text-primaryColor hover:bg-whiteColor hover:border-primaryColor font-semibold text-lg uppercase  p-1 px-3 rounded-md text-whiteColor w-full">
                                            Dashboard
                                        </Link>
                                        <Link className="w-full">
                                            <button
                                                onClick={handelLogOut}
                                                className=" border-primaryColor bg-primaryColor hover:text-primaryColor hover:bg-whiteColor hover:border-primaryColor font-semibold text-lg uppercase  p-1 px-3 rounded-md text-whiteColor w-full"
                                            >
                                                logout
                                            </button>
                                        </Link>
                                    </div>
                                </div> : ""
                            }


                        </div>
                        <Link>
                            <button
                                onClick={handelLogOut}
                                className=" border-primaryColor bg-primaryColor hover:text-primaryColor hover:bg-whiteColor hover:border-primaryColor font-semibold text-lg uppercase  p-1 px-3 rounded-md text-whiteColor"
                            >
                                logout
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Link to={"/login"}>
                        <button className=" border border-primaryColor bg-primaryColor hover:text-primaryColor hover:bg-whiteColor  font-semibold text-lg uppercase  p-1 px-3 rounded-md text-whiteColor">
                            login
                        </button>
                    </Link>
                )}
            </div>

            <div className="w-full flex justify-center items-center">
                <div
                    onClick={isDarkClled}
                    className=" w-9 h-9 lg:w-12 lg:h-12 lg:border border-primaryColor rounded-full ml-3 transition-all duration-300 flex justify-center  font-bold items-center cursor-pointer text-3xl text-primaryColor dark:bg-whiteColor">
                    {
                        isDark === 'light' ? <MdDarkMode ></MdDarkMode> : <MdLightMode></MdLightMode>
                    }
                </div>
            </div>
        </div>
    );
    return (
        <div className=" dark:bg-lightdarkbg dark: border-b border-primaryColor ">
            <div className="container  flex justify-between items-center">
                <div className="  logo  text-2xl font-semibold text-primaryColor">
                    <Link to={"/"}>
                        TaskManagement
                    </Link>
                </div>

                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost xl:hidden text-2xl  text-primaryColor"
                    >
                        <LiaBarsSolid></LiaBarsSolid>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content rounded-md  z-[10000] p-3 shadow bg-slate-100 dark:bg-lightdarkbg  absolute top-14 w-[90vw] md:w-[50vw] lg:w-[30vw] text-center right-0"
                    >
                        {NavBar}
                    </ul>
                </div>
                <div className="hidden xl:flex">
                    <ul className="menu menu-horizontal px-1">{NavBar}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;