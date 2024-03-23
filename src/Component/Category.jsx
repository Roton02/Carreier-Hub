import { useEffect, useState } from "react";
import CatCart from "./CatCart";

const Category = () => {
    const [cataegory , setCategory] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then((res) => res.json())
        .then((data)=> setCategory(data))
    },[])
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Job Category List</h1>
            <p className="text-center my-4 mb-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between ">
            {
                cataegory.map(cat => <CatCart key={cat.id} cat={cat}></CatCart>)
            }
        </div>
        </div>
    );
};

export default Category;