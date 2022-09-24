import React from "react";

const ServicesCart = ({ title, icons }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-3 sm:my-0 mx-2">
      <div className="p-[2rem] bg-red-700 text-white text-7xl rounded-full">
        {icons}
      </div>
      <p className="text-2xl font-semibold">{title}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, a!
      </p>
    </div>
  );
};

export default ServicesCart;
