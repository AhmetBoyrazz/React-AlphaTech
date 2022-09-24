import React from "react";

const Brand = () => {
  return (
    <div className="py-10">
      <div className="flex justify-evenly flex-wrap gap-5">
        {[
          "https://clarusway.com/wp-content/uploads/2022/06/Google-300x124.png",
          "https://clarusway.com/wp-content/uploads/2022/06/goldmansachs_logo-300x124.png",
          "https://clarusway.com/wp-content/uploads/2022/06/apple_logo-300x124.png",
          "https://clarusway.com/wp-content/uploads/2022/06/infosys_logo-300x124.png",
          "https://clarusway.com/wp-content/uploads/2022/06/deloitte_logo-300x124.png",
        ].map((link, idx) => (
          <img key={idx} src={link} alt="brand" className="w-[10rem]" />
        ))}
      </div>
    </div>
  );
};

export default Brand;
