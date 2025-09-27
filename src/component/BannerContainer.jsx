import React from "react";

const BannerContainer = ({ countCard, resolvedCountCard }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 p-3">
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] h-[250px] flex justify-center items-center flex-col text-white rounded-xl ">
        <h4 className="text-2xl font-bold">In-Progress</h4>
        <p className="text-2xl font-bold">{countCard}</p>
      </div>
      <div className="bg-gradient-to-r from-[#54cf68] to-[#00827a] opacity-70 h-[250px] flex justify-center items-center flex-col text-white rounded-xl">
        <h4 className="text-2xl font-bold">Resolved</h4>
        <p className="text-2xl font-bold">{resolvedCountCard}</p>
      </div>
    </div>
  );
};

export default BannerContainer;
