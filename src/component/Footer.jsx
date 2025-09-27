import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="  grid grid-cols-1 md:grid-cols-5 gap-10 p-8 mt-20 ">
        <div className="">
          <h2 className="text-lg  font-bold text-white">CS — Ticket System</h2>
          <p className="text-[#a1a1aa]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h2 className="text-lg  font-bold text-white">Company</h2>
          <ul className="text-[#a1a1aa] ">
            <li className="mt-2">About Us</li>
            <li className="mt-2">Our Mission</li>
            <li className="mt-2">Contact Saled</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg  font-bold text-white">Services</h2>
          <ul className="text-[#a1a1aa] ">
            <li className="mt-2">Products & Services</li>
            <li className="mt-2">Customer Stories</li>
            <li className="mt-2">Download Apps</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg  font-bold text-white">Information</h2>
          <ul className="text-[#a1a1aa] ">
            <li className="mt-2">Privacy Policy</li>
            <li className="mt-2">Terms & Conditions</li>
            <li className="mt-2">Join Us</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg  font-bold text-white">Social Links</h2>
          <ul className="text-[#a1a1aa] ">
            <li className="mt-2 flex items-center gap-2">
              <FaXTwitter className="text-black bg-white rounded-full p-1 text-2xl" />
              @CS — Ticket System
            </li>
            <li className="mt-2 flex items-center gap-2">
              <FaLinkedin className="text-black bg-white rounded-full p-1 text-2xl" />
              @CS — Ticket System
            </li>
            <li className="mt-2 flex items-center gap-2">
              <FaFacebookF className="text-black bg-white rounded-full p-1 text-2xl" />
              @CS — Ticket System
            </li>
            <li className="mt-2 flex items-center gap-2">
              <IoMdMailOpen className="text-black bg-white rounded-full p-1 text-2xl" />
              support@cst.com
            </li>
          </ul>
        </div>
      </div>
      <p className="text-[#fafafa] text-center">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
