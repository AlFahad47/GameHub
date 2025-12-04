import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import avaterImg from "../assets/avater.png";
import { PacmanLoader, PuffLoader, PulseLoader } from "react-spinners";
import { IoIosMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
const Navbar = () => {
  const { user, setUser, loading, setLoading, signoutUserFunc } =
    use(AuthContext);

  // 1. Set the default theme (e.g., "light", "dark", "cupcake", "synthwave")
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 2. Automatically update the HTML tag whenever the state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
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

  // console.log(loading);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all">All Games</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li className="ml-5 flex justify-center items-center">
        {/*  toggle theme  */}
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "light" ? <FaSun size={20} /> : <IoIosMoon size={20} />}
        </button>
      </li>
      {loading ? (
        <li>
          <PuffLoader size={30} />
        </li>
      ) : (
        !user && (
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        )
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-10 shadow-sm bg-primary text-primary-content  md:px-20">
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
          /> Game <span className="text-[#DC2626]">Hub</span>{" "}
        </NavLink>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navLinks}</ul>
        {loading ? (
          <PulseLoader />
        ) : user ? (
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
