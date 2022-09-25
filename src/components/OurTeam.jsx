import React from "react";
import OurTeamCart from "./OurTeamCart";
const OurTeam = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="text-center mb-5 mx-5">
        <p className="text-6xl font-thin">Our Team</p>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et deleniti
          quas at magni, iusto voluptates neque corrupti dolorum! Repellat,
          quod.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[3rem] sm:gap-[2rem] md:gap-[6rem] mx-5">
        <OurTeamCart
          image="https://ca.slack-edge.com/T03LBL87DA8-U03MW5VGEMS-e7da38ceffb6-512"
          name="Frank - Mentor"
          talent="Back-end Developer"
        />
        <OurTeamCart
          image="https://ca.slack-edge.com/T03LBL87DA8-U03RGMLSW1L-e6bd17d33a8b-512"
          name="Mustafa Başar"
        />
        <OurTeamCart
          image="https://ca.slack-edge.com/T03LBL87DA8-U03KULWRB9D-5b17324fe99c-512"
          name="Mustafa Başar"
          talent="Front-end Developer"
        />
      </div>
    </div>
  );
};

export default OurTeam;
