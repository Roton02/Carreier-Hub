import Category from "./Category";
import Featured from "./Featured";
import Banner from "./Banner";

const HomeData = () => {
    return (
        <div className=" px-10">
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default HomeData;