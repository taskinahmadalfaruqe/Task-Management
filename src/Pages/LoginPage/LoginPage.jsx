import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { FcGoogle } from 'react-icons/fc'
import useAuth from "../../Hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { FaFacebook } from "react-icons/fa";



const LoginPage = () => {
    const { handelGoogleLogin, loginWithEmailPass, handelFacebookLogin } = useAuth();
    const GoogleLogin = new GoogleAuthProvider();
    const facebookprovider = new FacebookAuthProvider();

    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        loginWithEmailPass(email, password)
            .then((userCredential) => {
                if (userCredential) {
                    navigate(location?.state ? location.state : "/");
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Login Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
            })
            .catch((error) => {
                const errorsms = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500,
                    footer: `${errorsms}`
                })

            });
    }


    const loginWithGoogle = () => {
        handelGoogleLogin(GoogleLogin)
            .then((userCredential) => {
                const email = userCredential.user.email
                if (userCredential) {
                    navigate(location?.state ? location.state : "/");
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Login Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                        footer: `${email}`
                    })

                }
            })
            .catch((error) => {
                const errorsms = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500,
                    footer: `${errorsms}`
                })

            });
    }


    const loginWithFacebook = () => {
        handelFacebookLogin(facebookprovider)
            .then((result) => {
                // Handle successful Facebook login
                const user = result
                console.log(user);
                navigate(location?.state ? location.state : "/");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User has been Login Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                    footer: `${user.email}` // or any other user data
                });
            })
            .catch((error) => {
                // Handle errors during login
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500,
                    footer: `${errorMessage}`
                });
            });
    };

    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border  shadow-none">
                <h4 className="block font-sans text-2xl text-center font-semibold leading-snug tracking-normal text-orangeColor antialiased">
                    Sign In
                </h4>
                <p className="mt-1 text-center block font-sans text-base font-normal leading-relaxed  antialiased">
                    Enter your details to Login.
                </p>
                <form
                    onSubmit={handleLogin}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">

                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                type="email"
                                placeholder=" "
                                id="email"
                                name="email"
                                required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primaryColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primaryColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="password"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                id="password"
                                name="password"
                                required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primaryColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primaryColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                    </div>
                    <button
                        className="mt-6 block w-full select-none rounded-lg bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primaryColor/20 transition-all hover:shadow-lg hover:shadow-primaryColor/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                    >
                        Log In
                    </button>
                    <p className="mt-4  text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased flex gap-1">
                        Do not have an account?
                        <Link
                            state={location.state}
                            to='/resister'
                            className="font-medium text-orangeColor transition-colors hover:text-primaryColor"

                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
            <div className=" flex gap-5">
                <button
                    onClick={loginWithGoogle}
                    className=" flex justify-center items-center gap-3 mt-6  w-full select-none rounded-lg bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primaryColor/20 transition-all hover:shadow-lg hover:shadow-primaryColor/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-light="true"
                >
                    Continue With <FcGoogle className="text-2xl"></FcGoogle>
                </button>
                <button
                    onClick={loginWithFacebook}
                    className=" flex justify-center items-center gap-3 mt-6  w-full select-none rounded-lg bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primaryColor/20 transition-all hover:shadow-lg hover:shadow-primaryColor/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-light="true"
                >
                    Continue With <FaFacebook className="text-2xl"></FaFacebook>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;