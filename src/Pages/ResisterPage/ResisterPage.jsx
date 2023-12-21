import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const ResisterPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {handelUserCreate,handelUpadate}=useAuth();

    const handelResiser = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');
        handelUserCreate(email, password)
            .then((userCredential) => {
                handelUpadate(name, photoURL)
                navigate(location.state ? location.state : "/");
                if (userCredential) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Sign Out Successfully',
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
    return (
        <div className="flex justify-center items-center">
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border">
                <h4 className="block font-sans text-2xl text-center font-semibold leading-snug tracking-normal text-orangeColor antialiased">
                    Sign Up To Study Hub
                </h4>
                <p className="mt-1 text-center block font-sans text-base font-normal leading-relaxed  antialiased">
                    Enter your details For Explore More Feature.
                </p>
                <form
                    onSubmit={handelResiser}
                    className="mt-8 mb-2 w-full md:w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-primaryColor border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primaryColor placeholder-shown:border-t-primaryColor focus:border-2 focus:border-primaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                type="text" // Add type="text" for the Name input
                                placeholder=" "
                                required
                                name="name"
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primaryColor before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primaryColor after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primaryColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primaryColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Name
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-primaryColor border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primaryColor placeholder-shown:border-t-primaryColor focus:border-2 focus:border-primaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                type="email" // Add type="text" for the Email input
                                placeholder=" "
                                required
                                name="email"
                            />

                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primaryColor before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primaryColor after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primaryColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primaryColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="text"
                                className="peer h-full w-full rounded-md border border-primaryColor border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primaryColor placeholder-shown:border-t-primaryColor focus:border-2 focus:border-primaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                required
                                name="photoURL"
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primaryColor before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primaryColor after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primaryColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primaryColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Photo URL
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="password"
                                className="peer h-full w-full rounded-md border border-primaryColor border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primaryColor placeholder-shown:border-t-primaryColor focus:border-2 focus:border-primaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                required
                                name="password"
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primaryColor before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primaryColor after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primaryColor peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primaryColor peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                    </div>
                    <button
                        className="mt-6 block w-full select-none rounded-lg bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-whiteColor shadow-md shadow-primaryColor/20 transition-all hover:shadow-lg hover:shadow-primaryColor/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                    >
                        Register
                    </button>
                    <p className="mt-4 flex gap-1 text-center font-sans text-base font-normal leading-relaxed  antialiased">
                        Already have an account?
                        <Link
                            className="font-medium text-orangeColor transition-colors hover:text-primaryColor"
                            to='/login'
                        >
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ResisterPage;