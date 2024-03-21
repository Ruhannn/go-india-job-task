import MarketStoryCard from "../Components/UI/MarketStoryCard";
import { StoryData } from "../data/Stories";
export default function MarketStories({ className }: { className?: string }) {
  const data = StoryData;
  return (
    <div
      className={`flex flex-col items-start justify-center gap-2 ${className} p-2`}>
      <h1 className="uppercase bg-[#e3e3e3] text-[#c05a64] text-xl font-bold py-1 px-2 my-2 ml-2 md:block hidden">
        Market Stories
      </h1>
      {data.map((story, key) => (
        <MarketStoryCard
          key={key}
          image={story.image}
          title={story.title}
          description={story.description}
        />
      ))}
    </div>
  );
}
