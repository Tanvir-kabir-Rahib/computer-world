import { Link } from "react-router-dom";
import GoogleLogin from "../component/GoogleLogin";

export const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card lg:w-4/12 md:w-6/12 sm:w-10/12 shadow-2xl bg-base-100">
                <div className="pb-8 card-body">
                    <form className="">
                        <p className="text-center text-3xl font-bold">Register Now</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder=" confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                        <div className="mt-6">
                            <GoogleLogin />
                        </div>
                        <p className="mt-4 text-center">Already have an account? <Link className="text-rose-500 hover:underline" to={'/login'}>Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};
