import React from "react";
import { Aboutus } from "../assets";

const About = () => {
  return (
    <div className="py-10">
      <div className="text-center mb-10 mx-5">
        <p className="text-6xl font-thin">About</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ex!
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row mx-10 gap-2 justify-center">
        <div className="mt-4 sm:mt-0 mx-4">
          {[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis  voluptate commodi officiis sapiente.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis  voluptate commodi officiis sapiente.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis  voluptate commodi officiis sapiente.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis  voluptate commodi officiis sapiente.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis  voluptate commodi officiis sapiente.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis  voluptate commodi officiis sapiente.",
          ].map((item, idx) => (
            <p key={idx} className="p-2">
              {item}
            </p>
          ))}
        </div>
        <div className="">
          <img src={Aboutus} alt="about" className="rounded-xl sm:h-[20rem]" />
        </div>
      </div>
    </div>
  );
};

export default About;
