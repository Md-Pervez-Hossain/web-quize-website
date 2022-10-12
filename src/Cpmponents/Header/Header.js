import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-white shadow-2xl py-5 ">
      <div className="w-9/12 mx-auto flex justify-between font-bold gap-5 uppercase ">
        <div>
          <Link to="/">Tech-Quize</Link>
        </div>
        <div className="md:hidden">
          {open ? (
            <XMarkIcon
              onClick={() => setOpen(!open)}
              className="h-6 w-6 text-blue-500"
            />
          ) : (
            <Bars3Icon
              onClick={() => setOpen(!open)}
              className="h-6 w-6 text-blue-500"
            />
          )}
        </div>
        <div
          className={`flex md:justify-end text-center duration-1000 ease-in-out mt-10 md:mt-0 bg-white p-2 w-full md:w-9/12 left-0  absolute md:static items-center  flex-col  md:flex-row gap-6   ${
            open ? "top-32px" : "top-[-250px]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/tutorials">Quize</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
