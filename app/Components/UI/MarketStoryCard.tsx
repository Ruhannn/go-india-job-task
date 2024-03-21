import Image from "next/image";
import React from "react";

export default function MarketStoryCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-xl rounded shadow-lg">
      <Image
        src={image}
        alt={`${title}'s image`}
        width={500}
        height={200}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{title}</div>
        <p className="text-gray-700 text-xs">{description}</p>
      </div>
    </div>
  );
}
