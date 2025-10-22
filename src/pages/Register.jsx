import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import loginImg from "../assets/login.png";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
 const  {createUserWithEmailAndPasswordFunc,updateProfileFunc,sendEmailVerificationFunc,signoutUserFunc,setUser,setLoading} = useContext(AuthContext)
    const navigate = useNavigate();

 const handleSubmit =(e)=>{
    e.preventDefault();
      const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

      console.log("signup function entered", {
      email,
      displayName,
      photoURL,
      password,
    });


     createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // 2nd step: Update profile
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            console.log(res);
            // 3rd step: Email verification
            sendEmailVerificationFunc()
              .then((res) => {
                console.log(res);
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
                console.log(e);
                toast.error(e.message);
              });
          })
          .catch((e) => {
            console.log(e);
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e);
        console.log(e.code);
      });
  };

  
  return (
    <div className="flex flex-row-reverse m-10 lg:w-11/12 md:w-11/12 w-10/12  mx-auto items-center justify-between lg:gap-60 md:gap-32">
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input w-full" placeholder="Name" />

          <label className="label">Photo</label>
          <input type="text" name="photo" className="input w-full" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4 w-full mb-2.5">Register</button>

          <button type="button" className="btn bg-white text-black border-[#e5e5e5]">
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
        <p className="text-sm mt-2.5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-300 hover:text-white font-medium underline"
          >
            Sign in
          </Link>
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

export default Register;
