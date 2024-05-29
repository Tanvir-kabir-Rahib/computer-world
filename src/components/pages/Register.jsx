import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../component/GoogleLogin";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

export const Register = () => {
    const [passMatch, setPassMatch] = useState(true);
    const { createUser, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleSUbmit = (e) => {
        e.preventDefault();
        console.log(e)

        const form = e.target.form;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        if (password !== confirm_password) {
            setPassMatch(false);
        }

        console.log(email, password, confirm_password);

        if (password === confirm_password) {
            createUser(email, password);
        }
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

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
                        <input type="text" name="user_name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="confirm_password" placeholder="confirm password" className="input input-bordered" required />
                        {!passMatch && (
                            <div className="my-2">
                                <p className="text-red-500">Passwords do not match!</p>
                            </div>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleSUbmit} className="btn btn-primary">Register</button>
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
