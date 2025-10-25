import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import avaterImg from "../assets/avater.png";
const Navbar = () => {
  const { user, setUser, loading, setLoading, signoutUserFunc } =
    use(AuthContext);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(loading);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all">All Games</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar  shadow-sm bg-[#262626] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" px-4 py-3 mr-1 btn-ghost  lg:hidden cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#262626] rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {navLinks}
          </ul>
        </div>
        <NavLink
          to="/"
          className="flex justify-center items-center  md:ml-2 font-bold btn-ghost pl-0  text-xl"
        >
          {" "}
          <img
            className="mr-1 lg:mr-2 md:mr-2  "
            src={logoImg}
            alt=""
          /> Game <span className="text-[#EE0001]">Hub</span>{" "}
        </NavLink>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navLinks}</ul>
        {user ? (
          <div className="flex justify-between items-center text-center gap-4">
            <Link to="/profile">
              <img
                src={user?.photoURL || avaterImg}
                className="h-[40px] w-[40px] rounded-full mx-auto"
                alt=""
              />
            </Link>

            <button
              onClick={handleSignout}
              className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <button className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
