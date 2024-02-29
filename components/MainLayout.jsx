"use client"

import React, { useContext } from "react";
import MainHeader from "./MainHeader";

import {AiOutlineHome} from "react-icons/ai"
import {GrProjects} from "react-icons/gr"
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { SiHelpscout } from "react-icons/si"
import { FiPhoneCall } from "react-icons/fi"

import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";


const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext); 

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-150 ${open ? "w-60 p-4" : "w-0"} lg:w-60 lg:p-4`}>
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
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
              <FaCheck className="mr-2" />
              <h3 className="flex-1">Single</h3>
              <FaAngleRight />
            </li>
            <ul>
              <li></li>
            </ul>
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
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
