"use client";

import React, { useContext } from "react";
import MainHeader from "./layout-sections/MainHeader";

import { MenuContext } from "@/context/MenuContext";
import MainSidebar from "./layout-sections/MainSidebar";
import MobileButtonNavigaion from "./layout-sections/MobileButtonNavigaion";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-green-200 min-h-screen">
      <div className={`${open ? "max-lg:blur-lg" : "blur-0"}`}>
        <MainSidebar />
        <MainHeader />
        <main className="lg:ml-[280px]">{children}</main>
      </div>
      <MobileButtonNavigaion />
    </div>
  );
};

export default MainLayout;
