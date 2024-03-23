import { FaDollarSign } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const CurrenAplied = ({job}) => {
    // console.log(job);
    const {logo,job_title,remote_or_onsite, job_type,location,salary} =job;
    return (
        <div className="p-8 px-40 flex justify-between  rounded-lg space-y-2 border-2">
            <div className="flex items-center gap-2">
            <div className="w-[150px]  bg-gray-200">
            <img className="p-10"  src={logo} alt="" />
            </div>
            <div>
            <h1 className="text-3xl">
                {job_title}
            </h1>
            <div className="flex text-primary font-semibold">
                <h1 className="border-2 border-primary px-4 p-2">{remote_or_onsite}</h1>
                <h1 className="border-2 border-primary px-4 p-2 ml-5"> {job_type} </h1>
            </div>
            <div className="flex gap-5">
                <h1 className="flex items-center gap-2"><IoLocation></IoLocation> {location}</h1>
                <h1 className="flex items-center gap-2"> <FaDollarSign></FaDollarSign> salary  {salary}</h1>
            </div>
            </div>
            </div>
            <button className="btn btn-primary"> view details </button>
        </div>
    );
};

export default CurrenAplied;