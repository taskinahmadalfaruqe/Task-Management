
import PropTypes from 'prop-types'
import { MdDelete, MdEdit } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import useAxios from '../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LodeTaskData = ({ value }) => {
    const axios = useAxios();
    const navigate = useNavigate();

    const handeldelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/task/${id}`)
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            navigate('/')
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    const handelUpdate = (id) => {
        navigate(`/dashboard/updateTask/${id}`)
    }
    const handelChange = (id) => {
        navigate(`/dashboard/changeStatus/${id}`)
    }

    return (
        <div className='border border-primaryColor rounded-md w-full p-1 space-y-2'>
            <h1 className='text-2xl font-semibold'>{value.title}</h1>
            <h1>{value.description}</h1>
            <h1>{value.priority}</h1>
            <h1>Last Date: {value.deadline}</h1>
            <h1>Status: {value.status}</h1>
            <div className='flex justify-center items-center gap-2'>
                <MdDelete onClick={() => handeldelete(value._id)} className='border border-primaryColor hover:bg-primaryColor hover:text-whiteColor rounded-sm text-3xl text-primaryColor font-bold cursor-pointer'></MdDelete>
                <MdEdit onClick={() => handelUpdate(value._id)} className='border border-primaryColor hover:bg-primaryColor hover:text-whiteColor rounded-sm text-3xl text-primaryColor font-bold cursor-pointer'></MdEdit>
                <FaExchangeAlt onClick={() => handelChange(value._id)} className='border border-primaryColor hover:bg-primaryColor hover:text-whiteColor rounded-sm text-3xl text-primaryColor font-bold cursor-pointer'></FaExchangeAlt>
            </div>
        </div>
    )
}

LodeTaskData.propTypes = {
    value: PropTypes.object.isRequired,
}

export default LodeTaskData