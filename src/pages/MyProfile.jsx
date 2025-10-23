import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { useTitle } from "../hooks/useTitle";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  useTitle("My Profile | GameHub");
  return (
    <div className="flex justify-center items-center   min-h-screen ">
      <div className="fieldset  px-20 py-10 w-[570px] bg-red-200 rounded-2xl">
        <div className="flex flex-row-reverse justify-between items-center mb-3.5">
          <img src={user?.photoURL} className="rounded-full" alt="" />

          <div className="">
            <div className="flex font-bold text-xl mb-3.5">
              {" "}
              <p className="">Name: </p>
              <h2 className="">{user?.displayName}</h2>
            </div>
            <div className="flex font-bold text-xl">
              {" "}
              <p className="">Email: </p>
              <h2>{user?.email}</h2>
            </div>
          </div>
        </div>

        <Link
          to="/update"
          className="btn btn-neutral bg-red-600 mt-4 w-full mb-2.5"
        >
          Update
        </Link>
        <div>
          <Link to="/" className="link link-hover">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
