
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import image from '../assets/BannerImage.jpg'

const Banner = () => {
    const {user}=useAuth();
    const navigate= useNavigate();
    const handleExploreClick = () => {
        if(user){
            navigate('/dashboard/home')
        }else{
            navigate('/login')
        }
    };
    return (
        <div className="relative h-72 lg:h-96  bg-cover bg-center" style={{ backgroundImage: `url(${image})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Do you want to maintain your daily work</h1>
                <p className="text-lg mb-6">Discover amazing things with us!</p>
                <button
                    className="px-6 py-3 bg-primaryColor border border-primaryColor uppercase font-semibold  rounded  transition duration-300 cursor-pointer hover:bg-secondoryColor hover:text-primaryColor"
                    onClick={handleExploreClick}
                >
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Banner;
