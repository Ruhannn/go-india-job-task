"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";

const Sidebar = ({ className }: { className?: string }) => {
  const [wideSidebar, setWideSidebar] = useState(false);

  const toggleSidebar = () => {
    setWideSidebar(!wideSidebar);
  };
  const menuItems = [
    { title: "Discussion Forum", icon: BsChatSquareTextFill },
    { title: "Market Stories", icon: PiCurrencyCircleDollarFill },
    { title: "Sentiment" },
    { title: "Market" },
    { title: "Sector" },
    { title: "Watchlist" },
    { title: "Events" },
    { title: "News/Interview" },
  ];
  return (
    <div className={`flex ${className}`}>
      <motion.div
        className={`bg-[#1d365a] flex flex-col items-center ${
          wideSidebar ? "w-64" : "w-0"
        }`}
        initial={{ width: "0px" }}
        animate={{ width: wideSidebar ? "240px" : "0px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        {" "}
        {wideSidebar && (
          <>
            <div>
              <div className="relative">
                <div className="flex items-center mb-2 text-white gap-4 my-5">
                  <FaUser className="text-xl" />
                  <span>Hello,User</span>
                  <BsFillBellFill className="text-2xl ml-4 relative" />
                  <div className="absolute top-0 right-0 animate-pulse size-2 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* divider */}
            <div className="w-full h-[1px] my-2 bg-white" />
            {/* item */}
            <div className="mt-4 text-white w-full ">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}>
                  {" "}
                  <div className="flex items-center justify-start text-lg px-2 py-2 hover:bg-[#13243e] cursor-pointer">
                    {item.icon ? (
                      <item.icon className="mx-2 size-4" />
                    ) : (
                      <div className="mx-2 size-4" />
                    )}
                    <span className="">{item.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        <motion.button
          onClick={toggleSidebar}
          className="absolute top-1/2 left-full transform -translate-y-1/2 text-white text-sm px-[6px] py-[60px] bg-gray-700 hover:bg-gray-600"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {wideSidebar ? <FaArrowRight /> : <FaArrowLeft />}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Sidebar;
