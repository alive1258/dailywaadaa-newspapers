import { featuredStory, sideStories } from "@/src/utils/data/homeData";
import NewsHeroSection from "../NewsHeroSection/NewsHeroSection";
import DayBriefSection from "../DayBriefSection/DayBriefSection";
import PoliticsSection from "../PoliticsSection/PoliticsSection";
import BusinessSection from "../BusinessSection/BusinessSection";
import SportsSection from "../SportsSection/SportsSection";
import LongReadSection from "../LongReadSection/LongReadSection";
import MagazineSection from "../MagazineSection/MagazineSection";

import {
  interviewsStories,
  analysisStories,
  investigationStories,
  lifeArtsStories,
} from "@/src/utils/data/magazineData";
import WorldSection from "../WorldSection/WorldSection";

const RootTemplet = () => {
  return (
    <main>
      <NewsHeroSection
        featured={featuredStory}
        side={sideStories}
        sectionTitle="Top Stories"
      />
      <DayBriefSection />
      <PoliticsSection />
      <BusinessSection />
      <SportsSection />
      <LongReadSection />

      {/* One block with 4 columns side by side */}
      <MagazineSection
        columns={[
          {
            title: "Interviews",
            categorySlug: "interviews",
            stories: interviewsStories,
            accent: "bg-amber-50",
          },
          {
            title: "Analysis",
            categorySlug: "analysis",
            stories: analysisStories,
            accent: "bg-blue-50",
          },
          {
            title: "Investigation",
            categorySlug: "investigation",
            stories: investigationStories,
            accent: "bg-rose-50",
          },
          {
            title: "Life & Arts",
            categorySlug: "lifestyle",
            stories: lifeArtsStories,
            accent: "bg-emerald-50",
          },
        ]}
      />
      <WorldSection />
    </main>
  );
};

export default RootTemplet;
