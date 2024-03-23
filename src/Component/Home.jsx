import { Outlet } from "react-router-dom";
import Nabvar from "./Nabvar";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
       <div className=" px-10"> 
       <Nabvar></Nabvar>
       </div>
      <Outlet></Outlet>
      <div>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
