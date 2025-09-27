import React from "react";
import vector1 from "../assets/vector1.png";

const BannerContainer = ({ countCard, resolvedCountCard }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 p-3">
      <div
        className="bg-gray-500 h-[300px] flex justify-center items-center flex-col text-white rounded-xl"
        style={{
          backgroundImage: `url(${vector1}),url(${vector1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 className="text-2xl font-bold">In-Progress</h4>
        <p className="text-2xl font-bold">{countCard}</p>
      </div>
      <div
        className="bg-gradient-to-r from-[#54cf68] to-[#00827a] opacity-70 h-[300px] flex justify-center items-center flex-col text-white rounded-xl"
        // style={{
        //   backgroundImage: `url(${vector1})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <h4 className="text-2xl font-bold">Resolved</h4>
        <p className="text-2xl font-bold">{resolvedCountCard}</p>
      </div>
    </div>
  );
};

export default BannerContainer;
