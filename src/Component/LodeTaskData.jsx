
import PropTypes from 'prop-types'
import { MdDelete , MdEdit } from "react-icons/md";
import useAxios from '../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';

const LodeTaskData = ({ value }) => {
    const axios= useAxios();
    const navigate= useNavigate();
   const handeldelete=(id)=>{
    console.log(id)
   }
   const handelUpdate=(id)=>{
    navigate(`/dashboard/updateTask/${id}`)
   }

    return (
        <div className='border border-primaryColor rounded-md w-full p-1 space-y-2'>
            <h1 className='text-2xl font-semibold'>{value.title}</h1>
            <h1>{value.description}</h1>
            <h1>{value.priority}</h1>
            <h1>Last Date: {value.deadline}</h1>
            <h1>Status: {value.status}</h1>
            <div className='flex justify-center items-center gap-2'>
                <MdDelete onClick={()=>handeldelete(value._id)} className='border border-primaryColor hover:bg-primaryColor hover:text-whiteColor rounded-sm text-3xl text-primaryColor font-bold cursor-pointer'></MdDelete>
                <MdEdit onClick={()=>handelUpdate(value._id)} className='border border-primaryColor hover:bg-primaryColor hover:text-whiteColor rounded-sm text-3xl text-primaryColor font-bold cursor-pointer'></MdEdit>
            </div>
        </div>
    )
}

LodeTaskData.propTypes = {
    value: PropTypes.object.isRequired,
}

export default LodeTaskData