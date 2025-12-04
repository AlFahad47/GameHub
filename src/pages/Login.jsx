import React, { useContext, useEffect, useState } from "react";
import loginImg from "../assets/regChar.png";
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
    // console.log({ email, password });
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
    <div className="text-white flex    mx-auto items-center justify-between mr-0 ">
      <div className="flex-1 ">
        <div className="text-center md:mt-auto mt-10">
          <h2 className="text-2xl font-bold">LOGIN</h2>
          <p></p>
        </div>

        <form
          onSubmit={handleLogin}
          className="fieldset lg:w-7/12 md:11/12 mx-auto max-w-[320px]"
        >
          <label className="input validator min-h-[52px] mb-4">
            <svg
              className="h-[1em] opacity-50 text-primary-content"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              className="  text-primary-content"
              placeholder="Email"
            />
          </label>
          <label className="input validator min-h-[52px]">
            <svg
              className="h-[1em] opacity-50 text-primary-content"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              name="password"
              type="password"
              className=" w-full text-primary-content"
              placeholder="Password"
            />
          </label>
          <div>
            <Link
              to="/forget-password"
              state={email}
              className="link link-hover"
            >
              Forgot password?
            </Link>
          </div>

          <button className="btn btn-neutral bg-red-600 mt-4 min-h-12 w-full mb-2.5">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn bg-primary rounded-sm min-h-12 text-primary-content border-[#F0EDFF]"
          >
            <svg
              className="rounded-full"
              aria-label="Google logo"
              width="32"
              height="32"
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
            <h2 className="font-normal text-[12px]">
              <span>Login with</span> <span className="font-bold">Google</span>
            </h2>
          </button>
        </form>
        <p className="pt-4 md:w-7/12 md:mb-auto mb-10 max-w-[320px]  mx-auto text-primary-content">
          New to our website? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800 " to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
      <div className="lg:flex-1 md:flex-1 justify-center items-center bg-red-600 p-10  lg:flex md:flex hidden">
        <img className="rounded-[40px] h-[670px]  " src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
