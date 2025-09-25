import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black grid grid-cols-5 gap-10 p-8 mt-20 max-w-[1200px] mx-auto">
      <div className="">
        <h2 className="text-lg  font-bold text-white">CS — Ticket System</h2>
        <p className="text-[#a1a1aa]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
          <li className="mt-2">@CS — Ticket System</li>
          <li className="mt-2">@CS — Ticket System</li>
          <li className="mt-2">@CS — Ticket System</li>
          <li className="mt-2">support@cst.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
