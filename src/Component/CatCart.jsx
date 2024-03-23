const CatCart = ({cat}) => {
    // console.log(cat.logo);
    const {logo, availability,category_name}=cat;
    return (
        <div className="bg-gray-200 rounded-lg px-12 py-8 ">
            <img className="mb-10" src={logo} alt="" />
            <h1 className="text-xl font-bold">{category_name}</h1>
            <p>{availability}</p>
        </div>
    );
};

export default CatCart;