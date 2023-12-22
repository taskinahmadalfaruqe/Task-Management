import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import LodeTaskData from "./LodeTaskData";


const Task = () => {
    const axios = useAxios();
    const [loding, setLoding]=useState(true)
    const [todo, setTODo]=useState([]);
    const [ongoing, setOnGoing]=useState([]);
    const [done, setDone]=useState([]);
    useEffect(() => {
        axios.get('/taskInfo')
            .then(res => {
                setLoding(true)
                setTODo(res.data.todoResult)
                setOnGoing(res.data.ongoingResult)
                setDone(res.data.doneResult)
                setLoding(false);
            })
    }, [axios])

    if(loding){
        return <p>loding............</p>
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
            <div className="border border-primaryColor rounded-md min-h-52 flex gap-1 flex-col">
                <h2 className="text-center bg-secondoryColor p-1 text-darkbg font-semibold text-xl">TO-DO</h2>
                <div className="text-center text-2xl font-semibold">
                    {
                        todo?.length === 0 ? "Sorry No Data Found":""
                    }
                </div>
                <div className="p-2 flex justify-center items-center flex-col gap-2 w-full">
                    {
                        todo?.map(value=> <LodeTaskData key={value._id} value={value}></LodeTaskData>)
                    }
                </div>
            </div>

            <div className="border border-primaryColor rounded-md min-h-52 flex gap-1 flex-col">
                <h2 className="text-center bg-secondoryColor p-1 text-darkbg font-semibold text-xl">On Going</h2>
                <div className="text-center text-2xl font-semibold">
                    {
                        ongoing?.length === 0 ? "Sorry No Data Found":""
                    }
                </div>
                <div className="p-2 flex justify-center items-center flex-col gap-2 w-full">
                    {
                        ongoing?.map(value=> <LodeTaskData key={value._id} value={value}></LodeTaskData>)
                    }
                </div>
            </div>

            <div className="border border-primaryColor rounded-md min-h-52 flex gap-1 flex-col">
                <h2 className="text-center bg-secondoryColor p-1 text-darkbg font-semibold text-xl">Done</h2>
                <div className="text-center text-2xl font-semibold">
                    {
                        done?.length === 0 ? "Sorry No Data Found":""
                    }
                </div>
                <div className="p-2 flex justify-center items-center flex-col gap-2 w-full">
                    {
                        done?.map(value=> <LodeTaskData key={value._id} value={value}></LodeTaskData>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Task;