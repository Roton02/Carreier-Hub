import { useEffect, useState } from "react";
import FeaturedCart from "./FeaturedCart";
// import { key } from "localforage";

const Featured = () => {
    const [featuredCart , setfeaturedCard] =useState([])
    const [dataLength, setDatalength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then((res)=> res.json())
        .then((data)=> setfeaturedCard(data))
    },[])
    return (
        <div>
            <div className="text-center my-10 space-y-2">
            <h1 className="text-5xl font-bold">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4 my-5">
                {
                    featuredCart.slice(0,dataLength).map(cart => <FeaturedCart key={cart.id} cart={cart}></FeaturedCart>)
                }
            </div>
            <div className={dataLength === featuredCart.length && "hidden" }>
            <div className="text-center mb-5 ">
                <button onClick={()=>setDatalength(featuredCart.length)} className="btn btn-primary font-bold px-4 text-2xl "> See All </button> 
            </div>
            </div> 
        </div>
    );
};

export default Featured;