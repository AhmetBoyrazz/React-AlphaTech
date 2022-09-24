import React from "react";
import { BsCode } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosGitNetwork } from "react-icons/io";
import ServicesCart from "./ServicesCart";

const Services = () => {
  return (
    <div className="my-10 h-auto">
      <div className="text-center mx-3">
        <p className="text-6xl font-thin">Services</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          doloribus.
        </p>
      </div>
      <div className="flex mt-[3rem] sm:mx-[2rem] justify-evenly gap-3 flex-col sm:flex-row">
        <ServicesCart title="Programming" icons={<BsCode />} />
        <ServicesCart title="Programming" icons={<MdOutlineDesignServices />} />
        <ServicesCart title="Programming" icons={<IoIosGitNetwork />} />
      </div>
    </div>
  );
};

export default Services;
