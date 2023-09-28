import { Link } from "react-router-dom";
import google from "../../assets/icon/google 1.png";
import github from "../../assets/icon/github 1.png";
import facebook from "../../assets/icon/facebook 1.png";
import img from "../../assets/others/authentication1.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { registerWithForm, signWithGoogle } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    registerWithForm(data.email, data.password)
    .then((result) => {
      // const user = result.user
      if (result) {
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
  };

  
  const handleGoogle = () => {
    signWithGoogle().then((data) => {
      console.log(data);
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center text-[35px] mt-3 font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  {...register(
                    "password",
                    { required: true },
                    { pattern: /^[A-Za-z]+$/i, required: true }
                  )}
                  type="text"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

            
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary "
                />
              </div>
            </form>
            <p className="text-center">
              Already registered? <Link to="/login">Go to log in</Link>
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

export default SignUp;
