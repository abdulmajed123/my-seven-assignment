import React, { use } from "react";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { GoArchive } from "react-icons/go";

const Card = ({
  ticketData,
  setCountCard,
  seletedCard,
  setSeletedCard,
  setResolvedCountCard,
  selecResolveTask,
  setSelecResolveTask,
}) => {
  const initialData = use(ticketData);
  // console.log(initialData);

  const handleCardClick = (data) => {
    toast(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FaCheckCircle style={{ color: "green" }} />
        In Progress!
      </div>
    );
    setCountCard((count) => count + 1);
    setSeletedCard((prev) =>
      prev.find((t) => t.id === data.id) ? prev : [...prev, data]
    );
  };
  const handleComplateBtnClick = (data) => {
    toast(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FaCheckCircle style={{ color: "green" }} />
        Completed!
      </div>
    );
    setResolvedCountCard((count) => count + 1);
    setSeletedCard((prev) => prev.filter((t) => t.id !== data.id));
    setSelecResolveTask((prev) => [...prev, data]);
    setCountCard((count) => (count > 0 ? count - 1 : "0"));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 max-w-[1200px] mx-auto mt-10">
      <div className="bg-gray-200   col-span-9 p-3">
        <h2 className="text-2xl font-bold text-gray-500">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
          {initialData.map((data) => {
            return (
              <div
                className="bg-white shadow-md rounded-2xl cursor-pointer p-5 "
                onClick={() => {
                  handleCardClick(data);
                }}
              >
                <div className="flex justify-between items-center gap-3">
                  <h2 className="text-[#001931] text-lg font-bold">
                    {data.title}
                  </h2>
                  <button
                    className={`px-3 rounded-2xl flex justify-between items-center gap-2 
                    ${
                      data.status == "Open"
                        ? "bg-[#b9f8cf]"
                        : data.status == "In-Progress"
                        ? "bg-[#f8f3b9]"
                        : ""
                    }
                    
                    `}
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        data.status == "Open"
                          ? "bg-[#02a53b]"
                          : data.status == "In-Progress"
                          ? "bg-[#febb0c]"
                          : ""
                      }`}
                    ></div>
                    {data.status}
                  </button>
                </div>
                <p className="my-2 text-[#627382]">{data.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <p className="text-[#627382]">{data.id}</p>
                    <p
                      className={`text-md ${
                        data.priority == "HIGH PRIORITY"
                          ? "text-[#f83044]"
                          : data.priority == "MEDIUM PRIORITY"
                          ? "text-[#febb0c]"
                          : data.priority == "LOW PRIORITY"
                          ? "text-[#02a53b]"
                          : "text-gray-500"
                      }`}
                    >
                      {data.priority}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-[#627382]">{data.customer}</p>
                    <p className="text-[#627382] flex items-center gap-1">
                      {" "}
                      <GoArchive />
                      {data.createdAt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-200  col-span-3 p-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-500">Task Status</h2>
          <div className="mt-5 p-2">
            {seletedCard.length === 0 ? (
              <p className=" text-gray-400 font-semibold">
                Select a ticket to add to Task Status
              </p>
            ) : (
              seletedCard.map((data, index) => (
                <div key={index} className="bg-white p-2 rounded mb-2 shadow">
                  <p className="font-bold">{data.title}</p>
                  <button
                    onClick={() => {
                      handleComplateBtnClick(data);
                    }}
                    className="bg-[#02a53b] w-full py-2 mt-2 text-white tex-lg rounded-md cursor-pointer"
                  >
                    Complete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="mt-30">
          <h2 className="text-2xl font-bold text-gray-500">Resolved Task</h2>
          <div className="mt-5 p-2">
            {selecResolveTask.length === 0 ? (
              <p className=" text-gray-400 font-semibold">
                No resolved tasks yet.
              </p>
            ) : (
              selecResolveTask.map((data) => (
                <div className="bg-white p-2 rounded mb-2 shadow">
                  <h2 className="text-lg font-bold">{data.title}</h2>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-green-500 font-semibold">
                      <FaCheckCircle className="text-green-600" />
                      Completed!
                    </div>
                    <p>click to remove</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
