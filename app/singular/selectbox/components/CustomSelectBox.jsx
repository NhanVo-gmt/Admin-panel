"use client";
import React, { useState } from "react";

const cities = ["Tehran", "Shiraz", "Yazd", "Mashad", "Esfashan"];
import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const CustomSelectBox = () => {
  const [selectedCity, setSelectedCity] = useState("Tehran");
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="bg-gray-100 flex flex-col justify-center items-center w-64"
    >
      <div className="flex flex-row justify-between items-center bg-white w-48 my-2 p-2 rounded-lg cursor-pointer">
        <span>{selectedCity}</span>
        <BsChevronExpand />
      </div>
      <div className={`flex flex-col w-48 my-2 bg-white rounded-lg ${open ? "opacity-100 h-auto" : "opacity-0 h-0 "} overflow-hidden transition-all duration-200 cursor-pointer `}>
        {cities.map((item) => (
          <div className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-200 ${selectedCity === item ? "bg-orange-200" : ""}`} key={item}>
            <AiOutlineCheck />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelectBox;
