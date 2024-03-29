"use client";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import React, { useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import Link from "next/link";

const languages = [
  { id: 1, flag: "fi fi-us", route: "/en" },
  { id: 2, flag: "fi fi-ir", route: "/fa" },
];

const LanguageSelectBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center relative z-30"
      >
        <div className="p-2 rounded-lg cursor-pointer">
          <span className="text-2xl">
            <BsGlobeAmericas />
          </span>
        </div>
        <div
          className={`flex flex-col w-14 my-2 bg-white rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0 "
          } overflow-hidden transition-all duration-200 cursor-pointer absolute top-12 right-0`}
        >
          {languages.map((item) => (
            <div
              onClick={() => {
                setOpen(true);
              }}
              className={`flex justify-center items-center gap-x-2 px-2 py-1 hover:bg-sky-200`}
              key={item.id}
            >
              <Link href={item.route}>
                <span className={item.flag}></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default LanguageSelectBox;
