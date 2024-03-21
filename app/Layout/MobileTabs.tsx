"use client";
import { useState } from "react";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";
const MobileTabs = () => {
  const [activeTab, setActiveTab] = useState("discussion");
  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <div className="min-h-screen">
      <div className="flex justify-between bg-[#13253e] text-white mb-4">
        <button
          className={`w-1/2 py-3 text-center ${
            activeTab === "discussion" ? "bg-[#1d365a]" : ""
          }`}
          onClick={() => handleTabChange("discussion")}>
          Discussion
        </button>
        <button
          className={`w-1/2 py-3 text-center ${
            activeTab === "marketStories" ? "bg-[#1d365a]" : ""
          }`}
          onClick={() => handleTabChange("marketStories")}>
          Market Stories
        </button>
      </div>

      <main className="flex justify-center gap-32 items-start flex-wrap">
        {activeTab === "discussion" && <DiscussionForum />}
        {activeTab === "marketStories" && <MarketStories />}
      </main>
    </div>
  );
};

export default MobileTabs;
