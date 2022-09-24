import React from "react";
import { Photo1, Photo2, Photo3, Photo4, Photo5, Photo6 } from "../assets";
import PortfolioCart from "./PortfolioCart";

const Portfolio = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="text-center mb-10 mx-5">
        <p className="text-6xl font-thin">Portfolio</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
          dolorum quasi? Neque consectetur odio placeat inventore perferendis
          quibusdam omnis deleniti.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-4 mx-5 max-w-[80rem] grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/*  */}
          <PortfolioCart photo={Photo1} />
          <PortfolioCart photo={Photo2} />
          <PortfolioCart photo={Photo3} />
          <PortfolioCart photo={Photo4} />
          <PortfolioCart photo={Photo5} />
          <PortfolioCart photo={Photo6} />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
