import Layout from "./Components/Sidebar/SidebarLayout";
import DiscussionForum from "./Layout/DiscussionForum";
import MarketStories from "./Layout/MarketStories";
import MobileTabs from "./Layout/MobileTabs";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen flex justify-center md:gap-3 lg:gap-32 lg:ml-3 items-start flex-wrap">
        <div className="hidden md:block">
          <DiscussionForum />
        </div>
        <div className="hidden md:block">
          <MarketStories />
        </div>
        <div className="md:hidden w-full">
          <MobileTabs />
        </div>
      </main>
    </Layout>
  );
}
