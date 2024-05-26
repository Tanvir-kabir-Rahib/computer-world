import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card lg:w-4/12 md:w-6/12 sm:w-10/12 shadow-2xl bg-base-100">
                    <form className="card-body">
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
                    <p className="mt-4 text-center">Already have an account? <Link className="text-rose-500 hover:underline" to={'/login'}>Login Now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};
