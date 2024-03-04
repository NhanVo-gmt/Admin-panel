"use client";

import React, { useContext } from "react";
import MainHeader from "./MainHeader";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-green-200 min-h-screen">
      <aside
        className={`bg-red-200 top-4 left-4 rounded-lg overflow-hidden transition-all duration-150 ${
          open ? "w-60 p-4 block fixed" : "w-0 hidden"
        } lg:w-60 lg:p-4 lg:fixed lg:top-16 lg:left-8 lg:block z-50`}
      >
        <ul>
          <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
            <AiOutlineHome className="mr-2" />
            <Link href="/">Home</Link>
          </li>
          <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
            <GrProjects className="mr-2" />
            <h3 className="flex-1">Projects</h3>
            <FaAngleRight />
          </li>
          <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
            <div className="w-full flex flex-row justify-start items-center">
              <FaCheck className="mr-2" />
              <h3 className="flex-1">Single</h3>
              <FaAngleRight />
            </div>
            <ul className="ml-8 mt-4">
              <li className="flex justify-center items-center gap-3">
                <SiSinglestore />
                <Link href="/singular/selectbox">Select box</Link>
              </li>
            </ul>
          </li>
          <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
            <FaCheckDouble className="mr-2" />
            <h3 className="flex-1">Complex</h3>
            <FaAngleRight />
          </li>
          <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
            <SiHelpscout className="mr-2" />
            <Link href="/about-us">About us</Link>
          </li>
          <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
            <FiPhoneCall className="mr-2" />
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </aside>
      <div className={`${open ? "blur-lg" : "blur-0"}`}>
        <MainHeader />
        <main className="lg:ml-[280px]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
