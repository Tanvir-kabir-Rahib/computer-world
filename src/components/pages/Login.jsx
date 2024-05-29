import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../component/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
    const { signIn, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location?.state?.from?.pathname || "/";
  
    const handleSUbmit = async (e) => {
      e.preventDefault();
  
      const form = e.target.form;
      const email = form.email.value;
      const password = form.password.value;
  
      console.log(email, password);
  
      await signIn(email, password);
    };
  
    useEffect(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, [user, from, navigate]);
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
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSUbmit} className="btn btn-primary">Login</button>
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