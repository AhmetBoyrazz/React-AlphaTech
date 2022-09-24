import React from "react";
import banner from "../assets/banner.jpeg";

const Main = () => {
  return (
    <div>
      <div className="absolute h-screen">
        <img
          src={banner}
          alt="banner"
          className="h-full object-cover w-screen"
        />
      </div>
      <div className="flex h-screen justify-center">
        <div className="absolute text-center mt-[15rem]">
          <p className="text-4xl text-purple-600">
            The IT Career of Your Dreams Starts Here!
          </p>
          <p className="text-5xl text-purple-600">Alpha Tech!</p>
          <button className="mt-6 bg-red-700 px-4 py-2 text-white rounded-lg">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
