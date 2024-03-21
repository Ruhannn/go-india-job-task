import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt, FaRegEye } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
export default function DiscussionCard({
  image,
  title,
  sector,
  description,
  reactions,
  timeAgo,
}: {
  image: string;
  title: string;
  sector: string;
  description: string;
  reactions: {
    likes: number;
    views: number;
    comments: number;
  };
  timeAgo: string;
}) {
  return (
    <div className="shadow-lg rounded-lg h-auto md:w-[650px] flex items-start md:gap-6 gap-2 px-5 py-2">
      <Image
        className="size-14 rounded-full object-cover object-top"
        alt={`${title}'s image`}
        src={image}
        width={500}
        height={500}
      />
      <div>
        <div className="flex items-center gap-3">
          <h1 className="font-bold">{title}</h1>
          <div className="text-xs text-white bg-[#245197] py-1 px-[10px] rounded-3xl">
            {sector}
          </div>
        </div>
        <p className=" w-auto md:w-[400px] font-medium my-2">{description}</p>
        <div className="flex items-center gap-1 justify-between">
          <div className="flex items-center gap-1 md:text-lg text-xs">
            <CiHeart />
            {reactions.likes >= 1000
              ? `${Math.floor(reactions.likes / 1000)}K`
              : reactions.likes}
          </div>
          <div className="flex items-center gap-1 md:text-lg text-xs">
            <FaRegEye />
            {reactions.views >= 1000
              ? `${Math.floor(reactions.views / 1000)}K`
              : reactions.views}
          </div>
          <div className="flex items-center gap-1 md:text-lg text-xs text-nowrap">
            <FaRegCommentAlt />
            {reactions.comments >= 1000
              ? `${Math.floor(reactions.comments / 1000)}K`
              : `${reactions.comments}`}
            Comments
          </div>
          <div className="flex items-center gap-1 md:text-lg text-xs">
            <IoShareSocialOutline />
            Share
          </div>
        </div>
      </div>
      <div className="text-[#8ea6c6] md:text-base text-xs text-nowrap">{timeAgo}</div>
    </div>
  );
}
