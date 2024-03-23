import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { SaveAplicationData } from "./SaveLocalStorage";

const JobDetails = () => {
    
    const loaderData = useLoaderData()
    // console.log(loaderData);
    const {id} = useParams()
    const idx = parseInt(id)
    const jobDetails = loaderData.find(job => job.id === idx);
    // console.log(jobDetails);
    // console.log(id);
    // const idx = parseInt(id)
    // console.log(idx);
    const {job_responsibility,job_description, educational_requirements,experiences,salary, job_title, contact_information}=jobDetails;
     const {phone,address, email} = contact_information ;
    //  console.log(phone, address, email);
     const handleApply=()=>{
        SaveAplicationData(idx)
    }
    return (
        <div>
          <div className="py-32 text-center bg-gray-100">
          <h1 className="text-5xl font-bold"> Job Details {jobDetails.id} </h1>
          </div>
          <div className="bg-white px-44 py-10 flex gap-10">
            <div className="w-2/3 space-y-4"> 
                <p> <span className="text-xl font-semibold">job_description:</span> {job_description} </p>
                <p> <span className="text-xl font-semibold">job_responsibility:</span> {job_responsibility} </p>
                <p> <span className="text-xl font-semibold">  educational_requirements:</span><br /> { educational_requirements} </p>
                <p> <span className="text-xl font-semibold">experiences:</span><br /> {experiences} </p>
            </div>
            <div className="w-1/3  ">
                <div className=" rounded-lg bg-gray-200 space-y-2 p-4">
                <h1 className="text-xl font-bold"> Job Details </h1>
                <h1><span className=" font-semibold">Salary:</span>  {salary}</h1>
                <h1> <span className=" font-semibold ">Job title:</span> {job_title} </h1>
                <h1 className="text-xl font-bold">Contact Information</h1>
                <h1> <span className=" font-semibold">Phone:
                </span> {phone} </h1>
                <h1> <span className=" font-semibold">Email:
                </span> {email}</h1>
                <h1> <span className=" font-semibold">Address:
                </span>{address} </h1>
                </div>
                <div className="">
                    <NavLink to='/aplied'><button onClick={handleApply} className="w-full btn btn-primary my-2 text-white text-xl font-semibold ">Apply Now</button></NavLink>
                </div>
            </div>
          </div>
        </div>
    );
};

export default JobDetails;