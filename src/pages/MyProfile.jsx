import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { useTitle } from "../hooks/useTitle";
import Loading from "./Loading";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  useTitle("My Profile | GameHub");

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center items-center    min-h-screen ">
      <div className="fieldset  md:px-20 md:py-10  md:w-auto w-10/12 bg-white/90 rounded-2xl">
        <h2 className="text-white/80 text-center text-3xl font-bold bg-red-600 p-2 rounded-sm w-10/12 mt-5 mx-auto border-black mb-5">
          My profile
        </h2>
        <div className="flex md:flex-row flex-col-reverse  justify-between lg:w-[700px] lg:h-60  items-center mb-3.5 gap-6">
          <div className="">
            <div className=" font-bold text-xl mb-3.5">
              <p className="text-sm text-black/50">Full Name: </p>
              <h2 className="">{user?.displayName}</h2>
            </div>
            <div className=" font-bold text-xl">
              <p className="text-sm text-black/50">Email Address: </p>
              <h2>{user?.email}</h2>
            </div>
          </div>
          <img
            src={user?.photoURL}
            className="rounded-full  h-48 w-auto border-6 border-amber-50"
            alt=""
          />
        </div>

        <Link
          to="/update"
          className="btn btn-neutral bg-red-600 mt-4  mb-2.5 w-10/12 mx-auto"
        >
          Update
        </Link>
        <div>
          <Link to="/" className="link link-hover ">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
