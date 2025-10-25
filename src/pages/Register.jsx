import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loginImg from "../assets/regChar.png";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";

const Register = () => {
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    signoutUserFunc,
    setUser,
    setLoading,
    signInWithGoogleFunc,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  useTitle("Registration | GameHub");

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    const regExp = /(?=.*[A-Z])(?=.*[a-z]).{6,}/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // 2nd step: Update profile
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            // console.log(res);
            // 3rd step: Email verification
            sendEmailVerificationFunc()
              .then((res) => {
                // console.log(res);
                setLoading(false);

                // Signout user
                signoutUserFunc().then(() => {
                  toast.success(
                    "Signup successful. Check your email to validate your account. "
                  );
                  setUser(null);
                  navigate("/login");
                });
              })
              .catch((e) => {
                toast.error(e.message);
              });
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
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
    <div className="text-white flex   mx-auto items-center justify-between  ">
      <div className="flex-1">
        <div className="text-center md:mt-auto mt-10">
          <h2 className="text-2xl font-bold">REGISTRATION</h2>
          <p></p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="fieldset lg:w-7/12 md:11/12 mx-auto max-w-[320px]"
        >
          <label className="input validator min-h-[52px] mb-4">
            <svg
              className="h-[1em] opacity-50 text-black"
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              </g>
            </svg>
            <input
              name="name"
              type="text"
              className="  text-black"
              placeholder="Name"
            />
          </label>

          <label className="input validator min-h-[52px] mb-4">
            <svg
              className="h-[1em] opacity-50 text-black"
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
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </g>
            </svg>
            <input
              type="url"
              required
              name="photo"
              placeholder="Photo URL"
              className="  text-black"
              title="Must be valid URL"
            />
          </label>

          <label className="input validator min-h-[52px] mb-4">
            <svg
              className="h-[1em] opacity-50 text-black"
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
              name="email"
              type="email"
              className="  text-black"
              placeholder="Email"
            />
          </label>
          <label className="input validator min-h-[52px]">
            <svg
              className="h-[1em] opacity-50 text-black"
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
              className=" w-full text-black"
              placeholder="Password"
            />
          </label>

          <button className="btn btn-neutral bg-red-600 mt-4 min-h-12 w-full mb-2.5">
            Register
          </button>

          <button
            onClick={handleGoogleSignin}
            type="button"
            className="btn bg-white rounded-sm min-h-12 text-black border-[#F0EDFF]"
          >
            <svg
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
            Login with Google
          </button>
        </form>
        <p className="pt-4 md:w-7/12 md:mb-auto mb-10 max-w-[320px]  mx-auto">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-300 hover:text-white font-medium underline"
          >
            Login
          </Link>
        </p>
      </div>
      <div className="lg:flex-1 md:flex-1 bg-red-600 p-10 md:py-30 lg:py-10 lg:flex md:flex hidden justify-center items-center">
        <img className="rounded-[40px] h-[670px]  " src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Register;
