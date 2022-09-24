import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleBar, setToggleBar] = useState(false);
  return (
    <>
      <div className="bg-[#212529] py-3 flex sm:justify-around justify-between items-center sm:fixed z-10 w-full">
        <div className="text-xl text-white ml-5 sm:ml-0">Alpha Tech</div>
        <div>
          <div
            className="sm:hidden p-2 text-3xl mr-4 text-white"
            onClick={() => setToggleBar(!toggleBar)}
          >
            <MdOutlineMenu />
          </div>
          <ul className="sm:flex hidden">
            {["Services", "Portfolio", "About Us", "Staff", "Contact Us"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="p-2 text-gray-400 hover:text-gray-300 duration-200"
                >
                  <a href={`${item}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {toggleBar && (
        <div className="bg-[#212529] pb-2 duration-500 sm:hidden absolute z-10 w-full">
          <ul className="ml-[.7rem]">
            {["Services", "Portfolio", "About Us", "Staff", "Contact Us"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="p-2 text-gray-400 hover:text-gray-300 duration-200"
                >
                  <a href={item}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
