import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import userPicture from '../../assets/defaultUserPic.png';
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
    const { logout, user } = useAuth();

    const handleLogout = async () => {
        await logout()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><Link to={'/'}>Computer World</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                </ul>
            </div>
            {
                !user && (
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link to={"/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Register</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <Link to={"/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
            {
                user && (
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.photoURL ? 
                                        <img alt="User Picture" src={`${user?.photoURL}` || userPicture} />
                                        :
                                        <img alt="User Picture" src={userPicture} />
                                    }
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li className="lg:hidden"><Link to={'/dashboard/allProducts'}>All Products</Link></li>
                                <li className="lg:hidden"><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                                <li>
                                    <a className="justify-between" onClick={handleLogout}>
                                        Logout <FaArrowRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;