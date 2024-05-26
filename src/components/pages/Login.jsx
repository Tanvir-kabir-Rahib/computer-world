import { Link } from "react-router-dom";
import GoogleLogin from "../component/GoogleLogin";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card lg:w-4/12 md:w-6/12 sm:w-10/12 shadow-2xl bg-base-100">
                <div className="card-body">
                    <form className="">
                        <p className="text-center text-3xl font-bold">Login Now</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                        <div className="mt-6">
                            <GoogleLogin />
                        </div>
                        <p className="mt-4 text-center">Create new account? <Link className="text-rose-500 hover:underline" to={'/register'}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;