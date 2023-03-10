import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navItems = (
    <>
      <li className="font-bold text-red-700">
        <Link to="/">Home</Link>
      </li>

      <li className="font-bold text-red-700">
        <Link to="/about">About US</Link>
      </li>

      <li className="font-bold text-red-700">
        <Link to="/service">Our Service</Link>
      </li>

      <li className="font-bold text-red-700">
        <Link to="/client">Our Valuable Clients</Link>
      </li>

    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <div>
              <p>
                <span className="text-red-600 font-bold text-md lg:text-3xl">
                  RED
                </span>

                <span className="text-red-600 font-bold text-lg lg:text-3xl">
                  {" "}
                  FLOWER
                </span>

                <br />

                <span className="text-yellow-500">Building Needs</span>
              </p>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          <Link className="navButton">Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
