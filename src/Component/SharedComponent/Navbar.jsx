import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);

  // user Log Out Button Call
  const handleLogOut = () => {
    userLogOut().then();
    toast.error("log-out successfully");
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>
          <a>Products</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/categories"}>
          <a>Categories</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/custom"}>
          <a>Custom</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>
          <a>Blogs</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-secondary">
              log out
            </button>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>
              <a className="btn bg-black text-white">Sign in</a>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
