"use client"

import React, { useEffect, useRef, useState } from "react";

const TabsComponent = ({ items }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const firstBtnRef = useRef();

    useEffect(() => {
        firstBtnRef.current.focus();
    }, [])

  return (
    <div className="bg-sky-100 flex justify-center items-center py-12">
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        <div className="bg-blue-400 flex justify-between rounded-lg p-2 font-bold text-white">
          {items.map((item, index) => (
            <button 
            ref={index === 0 ? firstBtnRef : null}
            onClick={() => setSelectedTab(index)}
            className={`w-full outline-none p-2 rounded-xl hover:bg-blue-300 text-center ${selectedTab === index ? "ring-2 bg-white text-blue-500" : ""}`}>
              {item.title}
            </button>
          ))}
        </div>
        <div className="bg-white p-2">
            {items.map((item, index) => (
                <div className={`${selectedTab === index ? "" : "hidden"}`}>
                    {item.content}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
