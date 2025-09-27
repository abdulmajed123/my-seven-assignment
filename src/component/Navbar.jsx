import React from "react";
import Container from "./BannerContainer";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between items-center  ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Changelog</a>
            <a href="">Blog</a>
            <a href="">Download</a>
            <a href="">Contact</a>
          </ul>
        </div>
        <a className="hidden sm:block text-[24px]  font-bold">
          CS — Ticket System
        </a>
      </div>

      <div className="flex">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-5 mr-5">
            <a className="text-lg text-[#000000e6]" href="">
              Home
            </a>
            <a className="text-lg text-[#000000e6]" href="">
              FAQ
            </a>
            <a className="text-lg text-[#000000e6]" href="">
              Changelog
            </a>
            <a className="text-lg text-[#000000e6]" href="">
              Blog
            </a>
            <a className="text-lg text-[#000000e6]" href="">
              Download
            </a>
            <a className="text-lg text-[#000000e6]" href="">
              Contact
            </a>
          </ul>
        </div>
        <div className="navbar-end flex justify-end">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
