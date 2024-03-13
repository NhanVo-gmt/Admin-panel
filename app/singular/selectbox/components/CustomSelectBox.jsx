"use client";

import React, { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const cities = ["Tehran", "Shiraz", "Yazd", "Mashad", "Esfashan"];

const CustomSelectBox = () => {
  const [selectedCity, setSelectedCity] = useState("Tehran");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="bg-gray-100 flex flex-col justify-center items-center w-fit relative z-30"
      >
        <div className="flex flex-row justify-between items-center bg-white w-48 my-2 p-2 rounded-lg cursor-pointer">
          <span>{selectedCity}</span>
          <BsChevronExpand />
        </div>
        <div
          className={`flex flex-col w-48 my-2 bg-white rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0 "
          } overflow-hidden transition-all duration-200 cursor-pointer absolute top-16 left-0`}
        >
          {cities.map((item) => (
            <div
              onClick={() => {
                setSelectedCity(item);
                setOpen(true);
              }}
              className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-200 ${
                selectedCity === item ? "bg-orange-200" : ""
              }`}
              key={item}
            >
              <AiOutlineCheck
                className={`text-orange-300 ${
                  selectedCity === item ? "opacity-100" : "opacity-0"
                }`}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`bg-gray-100 min-h-screen fixed inset-0 opacity-50 z-20 ${open ? "block " : "hidden"}`}></div>
    </>
  );
};

export default CustomSelectBox;
