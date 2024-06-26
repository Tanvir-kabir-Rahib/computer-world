import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/component/Navbar";
import Footer from "../components/component/Footer";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center mt-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to={'/dashboard/allProducts'}>All Products</Link></li>
                        <li><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default DashboardLayout;