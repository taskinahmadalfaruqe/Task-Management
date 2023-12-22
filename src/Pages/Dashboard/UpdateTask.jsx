import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTask() {
    const { id } = useParams();
    const navigate = useNavigate();
    const axios = useAxios();
    const [defaultValue, setDefaultValue] = useState({
        title: '',
        description: '',
        deadline: '',
        priority: 'low',
        status: 'done'
    });

    useEffect(() => {
        axios.get(`/taskInfo/${id}`)
            .then(res => {
                if (res.data) {
                    setDefaultValue(res.data);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [axios, id]);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        deadline: '',
        priority: '',
        status: ''
    });

    useEffect(() => {
        setFormData(defaultValue); // Set form data to default values
    }, [defaultValue]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`/task/${id}`, formData)
            .then(res => {

                if (res.data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Updated User Status!",
                        text: "Your file has been Updated.",
                        icon: "success",
                        timer: 2000
                    });
                    navigate('/dashboard/home')
                }

            })

    };

    return (
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title" className="block mb-1">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    defaultValue={defaultValue.title}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    placeholder='Title'
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block mb-1">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    defaultValue={defaultValue.description}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    placeholder='Description'
                    required
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="deadline" className="block mb-1">Deadline:</label>
                <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    defaultValue={defaultValue.deadline}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="priority" className="block mb-1">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    defaultValue={defaultValue.priority}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    required
                >
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="status" className="block mb-1">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    defaultValue={defaultValue.status}
                    className="w-full px-3 py-2 border rounded-md dark:bg-lightdarkbg"
                    required
                >
                    <option value="todo">To-Do</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <button
                type="submit"
                className="bg-primaryColor px-4 py-2 rounded-md w-full mb-5 hover:bg-secondoryColor hover:text-darkbg transition-all duration-200"
            >
                Update Task
            </button>
        </form>
    );
}

export default UpdateTask;
