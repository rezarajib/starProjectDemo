import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold mr-1 transition-colors duration-200 ${
              isActive ? "text-cyan-400 border-b-2 border-cyan-400 rounded-none" : "hover:text-cyan-400"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/parts"}
          className={({ isActive }) =>
            `font-semibold mr-1 transition-colors duration-200 ${
              isActive ? "text-cyan-400 border-b-2 border-cyan-400 rounded-none" : "hover:text-cyan-400"
            }`
          }
        >
          Auto Parts
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/categories"}
          className={({ isActive }) =>
            `font-semibold mr-1 transition-colors duration-200 ${
              isActive ? "text-cyan-400 border-b-2 border-cyan-400 rounded-none" : "hover:text-cyan-400"
            }`
          }
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `font-semibold mr-1 transition-colors duration-200 ${
              isActive ? "text-cyan-400 border-b-2 border-cyan-400 rounded-none" : "hover:text-cyan-400"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="navbar container mx-auto px-4 lg:px-8">
        
        {/* Navbar Start: Mobile Menu & Brand Name */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-slate-900 text-white rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-slate-700"
            >
              {links}
            </ul>
          </div>
          
          {/* Company Branding */}
          <Link to={"/"} className="flex items-center gap-2">
            <div className="bg-cyan-500 text-slate-950 font-black px-2.5 py-1 rounded text-lg tracking-wider shadow-inner">
              ST
            </div>
            <div>
              <h2 className="font-bold text-xl tracking-wide uppercase">
                Star <span className="text-cyan-400">Technologies</span>
              </h2>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase -mt-1">
                Advanced Auto Parts
              </p>
            </div>
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>

        {/* Navbar End: Cart & Auth Buttons */}
        <div className="navbar-end gap-3">
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="btn btn-ghost btn-circle text-white hover:bg-slate-800">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-cyan-500 text-slate-950 font-bold border-none">
                2
              </span>
            </div>
          </Link>

          {/* Authentication Buttons */}
          <Link
            to="/signin"
            className="hidden sm:inline-flex btn btn-sm btn-outline border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="btn btn-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold border-none shadow-md"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;