import { Outlet } from "react-router-dom";
import Navbar from "../components/component/Navbar";
import Footer from "../components/component/Footer";

const MainLayouts = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;