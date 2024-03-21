import React from "react";
import Sidebar from "./Sidebar";

const SidebarLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-row justify-start">
      <Sidebar className="lg:relative absolute h-screen" />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SidebarLayout;
