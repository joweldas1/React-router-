import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import './App.css'

const Home = () => {

    
    return (
        <div className="container ">
            <div className="">
            <Header></Header>
            <Outlet></Outlet> 
            <Footer></Footer>
            </div>
       </div>
    );
};

export default Home;