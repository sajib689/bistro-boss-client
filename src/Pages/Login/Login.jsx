import { useEffect } from "react";
import img from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/icon/google 1.png";
import github from "../../assets/icon/github 1.png";
import facebook from "../../assets/icon/facebook 1.png";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { loginWithForm, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    if (validateCaptcha(captcha) == true) {
      loginWithForm(email, password)
        .then((data) => {
          if (data) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Sign Up Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          if (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.message}`,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Invalid Captcha`,
      });
    }
    navigate(from, { replace: true });
    form.reset();
  };
  const handleGoogle = () => {
    signWithGoogle().then((data) => {
      navigate(from, {replace: true})
      console.log(data);
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Sign In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center text-[35px] mt-3 font-bold">Login</h1>

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  name="captcha"
                  type="text"
                  placeholder="Enter the text above"
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary ">Login</button>
              </div>
            </form>
            <p className="text-center">
              New here? <Link to="/signup">Create a New Account</Link>
            </p>
            <div className="text-center">
              <p className="mt-3">Or sign in with</p>
              <div className="flex items-center justify-center mb-3">
                <img
                  className="p-2 ms-2 mt-3 border border-black rounded-[50%]"
                  src={facebook}
                  alt=""
                />
                <Link onClick={handleGoogle}>
                  <img
                    className="p-2 ms-2 mt-3 border border-black rounded-[50%]"
                    src={google}
                    alt=""
                  />
                </Link>
                <img
                  className="p-2 ms-2 mt-3 border border-black rounded-[50%]"
                  src={github}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
