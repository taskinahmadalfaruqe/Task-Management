import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types'

const PrivetRouts = ({ children }) => {
    const { user,isUserLoding } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children
    } 
    if(isUserLoding){
        return (<div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
        </div>)
    }else{
        <Navigate  state={location.pathname} to={"/login"}></Navigate>
    }
    return <Navigate  state={location.pathname} to={"/login"}></Navigate>
};


PrivetRouts.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivetRouts
