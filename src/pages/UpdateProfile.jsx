import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";

const UpdateProfile = () => {
  const { updateProfileFunc, setUser, user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  useTitle("Update Profile | GameHub");
  const navigate = useNavigate();
  const handleUpadte = (e) => {
    e.preventDefault();
    updateProfileFunc(displayName, photoURL)
      .then((res) => {
        // console.log("before", user);
        // console.log("after", res);
        setUser((prev) => ({
          ...prev,
          displayName: displayName?.trim() ? displayName : prev.displayName,
          photoURL: photoURL?.trim() ? photoURL : prev.photoURL,
        }));
        // console.log("after", user);

        toast.success("Update successful");
        navigate("/profile");
      })
      .catch((e) => {
        toast.error(e.message);
        // console.log(e);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center   min-h-screen ">
        {" "}
        <form
          onSubmit={handleUpadte}
          className="fieldset  px-20 py-10 w-[470px] bg-red-200 rounded-2xl"
        >
          <label className="label">Name</label>
          <input
            name="name"
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            className="input w-full"
            placeholder="Name"
          />

          <label className="label">Photo URL</label>
          <input
            name="photo"
            onChange={(e) => setPhotoURL(e.target.value)}
            type="text"
            className="input w-full"
            placeholder="photo URL"
          />
          <button className="btn btn-neutral bg-red-600 mt-4 w-full mb-2.5">
            Update Information
          </button>
          <div>
            <Link to="/profile" className="link link-hover">
              Back To Profile
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
