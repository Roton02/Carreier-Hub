import { FaDollarSign } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
const FeaturedCart = ({cart}) => {
    // console.log(cart);
    const { id,logo,remote_or_onsite, salary, location, job_type,job_title}=cart;
    return (
        <div className="p-8 rounded-lg space-y-2 border-2">
            <img src={logo} alt="" />
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
            <Link to={`/job/${id}`}><button className="btn btn-primary"> view details </button></Link>
        </div>
    );
};

export default FeaturedCart;