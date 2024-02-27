import React from "react";
import MainHeader from "./MainHeader";

import {AiOutlineHome} from "react-icons/ai"
import {GrProjects} from "react-icons/gr"
import Link from "next/link";


const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-lg w-60 p-4">
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2 mb-5">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
              <GrProjects className="mr-2" />
              <Link href="/">Projects</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
