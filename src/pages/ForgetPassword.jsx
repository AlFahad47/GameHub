import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";

const ForgetPassword = () => {
  const { sendPassResetEmailFunc, setLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const [email, setEmail] = useState(location?.state || "");

  useTitle("Password Reset | GameHub");

  const handleReset = (e) => {
    e.preventDefault();
    sendPassResetEmailFunc(email)
      .then((res) => {
        setLoading(false);
        toast.success("Check your email to reset password");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 2500);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center   min-h-screen ">
        {" "}
        <form
          onSubmit={handleReset}
          className="fieldset  px-20 py-10 w-[470px] bg-red-200 rounded-2xl"
        >
          <label className="label">Email</label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            className="input w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>

          <button className="btn btn-neutral bg-red-600 mt-4 w-full mb-2.5">
            Reset password
          </button>
          <div>
            <Link to="/login" className="link link-hover">
              Back To Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
