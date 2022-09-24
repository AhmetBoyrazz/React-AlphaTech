import React from "react";

const PortfolioCart = ({ photo }) => {
  return (
    <div className="w-auto border rounded-lg overflow-hidden">
      <div>
        <img src={photo} alt="a" className="w-full object-cover" />
      </div>
      <div className="w-full  text-center bg-white p-5">
        <p className="text-2xl">Lorem, ipsum.</p>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis odit
          atque nam animi dolores itaque.
        </p>
      </div>
    </div>
  );
};

export default PortfolioCart;
