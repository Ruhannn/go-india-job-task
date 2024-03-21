import React from "react";
import DiscussionCard from "../Components/UI/DiscussionCard";
import { DiscussionCardData } from "../data/Card";

export default function DiscussionForum({ className }: { className?: string }) {
  const data = DiscussionCardData;
  return (
    <div
      className={`flex flex-col items-start justify-center gap-9 ${className} p-1`}>
      <h1 className="uppercase bg-[#e3e3e3] text-[#c05a64] text-xl font-bold py-1 px-2 my-2 ml-2 md:block hidden">
        Discussion Forum
      </h1>
      {data.map((cardData, index) => (
        <DiscussionCard
          key={index}
          image={cardData.image}
          title={cardData.title}
          sector={cardData.sector}
          description={cardData.description}
          reactions={cardData.reactions}
          timeAgo={cardData.timeAgo}
        />
      ))}
    </div>
  );
}
