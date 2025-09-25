import React from "react";

const Container = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-20 max-w-[1200px] mx-auto ">
      <div className="bg-gray-500 h-[200px] flex justify-center items-center flex-col text-white rounded-xl">
        <h4 className="text-2xl font-bold">In-Progress</h4>
        <p className="text-2xl font-bold">0</p>
      </div>
      <div className="bg-pink-500 h-[200px] flex justify-center items-center flex-col text-white rounded-xl">
        <h4 className="text-2xl font-bold">Resolved</h4>
        <p className="text-2xl font-bold">0</p>
      </div>
    </div>
  );
};

export default Container;
