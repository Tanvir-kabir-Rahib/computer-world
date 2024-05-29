import { Outlet } from "react-router-dom";
import Navbar from "../components/component/Navbar";
import Footer from "../components/component/Footer";

const DashboardLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default DashboardLayout;