import React from "react";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

const OurTeamCart = ({ name, image, talent }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt="profile"
        className="w-[15rem] rounded-full border-[8px] border-gray-400"
      />
      <div className="flex flex-col items-center">
        <p className="font-semibold text-2xl">{name}</p>
        <p>
          {talent ? (
            talent
          ) : (
            <a
              href="https://www.mustafabasar.dev"
              alt="link"
              className="hover:underline"
              target={"_blank"}
              rel="noreferrer"
            >
              Front-end Developer
            </a>
          )}
        </p>
        <div className="mt-2 flex gap-3">
          <div className="text-xl bg-black text-white p-2 rounded-full cursor-pointer">
            <FiTwitter />
          </div>
          <div className="text-xl bg-black text-white p-2 rounded-full cursor-pointer">
            <FiFacebook />
          </div>
          <div className="text-xl bg-black text-white p-2 rounded-full cursor-pointer">
            <FiLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCart;
