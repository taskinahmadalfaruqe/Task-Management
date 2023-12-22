

import { useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddTask() {
    const navigate= useNavigate();
    const axios = useAxios();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        deadline: '',
        priority: 'low',
        status: 'done'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/task', formData)
            .then(res => {
                if (res.data.acknowledged)
                navigate('/dashboard/home')
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "SuccessFully Login",
                        text: 'Your New Task Successfully Added.',
                        showConfirmButton: true,
                        timer: 2000,
                    });
            })
    };

    return (
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title" className="block  mb-1">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    placeholder='Title'
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block  mb-1">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    placeholder='Discription'
                    required
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="deadline" className="block  mb-1">Deadline:</label>
                <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="priority" className="block  mb-1">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    required
                >
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button
                type="submit"
                className="bg-primaryColor px-4 py-2 rounded-md w-full mb-5 hover:bg-secondoryColor hover:text-darkbg transition-all duration-200"
            >
                Add Task
            </button>
        </form>
    );
}

export default AddTask;
