import React, { useContext, useState } from "react";
import loginImg from "../assets/login.png";
import { Link, Links, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthContext";
import { useTitle } from "../hooks/useTitle";

const Login = () => {
  const {
    signInWithEmailAndPasswordFunc,
    setUser,
    setLoading,
    signInWithGoogleFunc,
  } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  useTitle("Login | GameHub");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        setLoading(false);

        if (!res.user?.emailVerified) {
          toast.error("Your email is not verified.");

          return;
        }
        setUser(res.user);
        toast.success("Signin successful");
        navigate(from);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google signin");
    signInWithGoogleFunc()
      .then((res) => {
        console.log(res);
        setLoading(false);
        setUser(res.user);
        navigate(from);
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="text-white flex m-10 lg:w-11/12 md:w-11/12 w-10/12  mx-auto items-center justify-between lg:gap-60 md:gap-32">
      <div className="flex-1">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="input w-full text-black"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input w-full text-black"
            placeholder="Password"
          />
          <div>
            <Link
              to="/forget-password"
              state={email}
              className="link link-hover"
            >
              Forgot password?
            </Link>
          </div>

          <button className="btn btn-neutral mt-4 w-full mb-2.5">Login</button>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>
        <p className="pt-4">
          New to our website? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800 " to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
      <div className="lg:flex-1 md:flex-1 ">
        <img
          className="rounded-[40px] lg:flex md:flex hidden"
          src={loginImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
