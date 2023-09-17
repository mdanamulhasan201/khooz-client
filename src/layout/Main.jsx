import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
// import Nav from "../pages/Shared/nav";

const Main = () => {
    return (
        <div>

           {/* <Nav></Nav> */}
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;