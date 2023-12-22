import axios from "axios";
const axisoPublic = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://task-mangement-server.vercel.app'
})
const useAxios = () => {
    return axisoPublic
};
export default useAxios;