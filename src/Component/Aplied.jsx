import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAplicationsData } from "./SaveLocalStorage";
import CurrenAplied from "./CurrenAplied";

const Aplied = () => {
  const jobs = useLoaderData();
  const [currentAplied, setCurrentAplied] = useState([]);
  const [displayData , setDisplayData]= useState([]);
  // const [job, setJobs]= useState([])
  // console.log(job);

    const handleFilter = filter =>{
        if (filter ==="all") {
            setDisplayData(currentAplied)
        }else if(filter === 'Remote'){
            const remoteJob = currentAplied.filter(job => job.remote_or_onsite ==="Remote")
            setDisplayData(remoteJob)
        }else if(filter ==="Onsite"){
            const OnsiteJob = currentAplied.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayData(OnsiteJob)
        }
    }

  useEffect(() => {
    const getdataFromLs = getAplicationsData();
    if (jobs.length > 0) {
      const apliedJobs = jobs.filter((job) => getdataFromLs.includes(job.id));
      setCurrentAplied(apliedJobs);
      setDisplayData(apliedJobs)
    }
  }, []);

  return (
    <div>
      <div className="py-32 text-center bg-gray-100">
        <h1 className="text-5xl font-bold"> Aplied Jobs </h1>
      </div>
      <div className="space-y-2 m-2">
        <div className="flex justify-end mr-10">
        <details className="dropdown">
          <summary className="m-1 btn">Filter by </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>   <a onClick={()=>handleFilter('all')}>All</a>   </li>
            <li>   <a onClick={()=>handleFilter('Remote')}>Remote</a>  </li> 
            <li>   <a onClick={()=>handleFilter('Onsite')}>Onsite</a>  </li>
          </ul>
        </details>
        </div>
        {displayData.map((job) => (
          <CurrenAplied key={job.id} job={job}></CurrenAplied>
        ))}
      </div>
    </div>
  );
};

export default Aplied;
