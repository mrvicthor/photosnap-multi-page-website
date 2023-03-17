import bannerImage from "../../assets/home/mobile/create-and-share.jpg";
import bgTablet from "../../assets/home/tablet/create-and-share.jpg";
import bgDesktop from "../../assets/home/desktop/create-and-share.jpg";
import { Banner, Services, Story } from "../../components";
import storyMountainBg from "../../assets/stories/mobile/mountains.jpg";
import storyMountainDesktopBg from "../../assets/stories/desktop/mountains.jpg";
import cityScapesBg from "../../assets/stories/mobile/cityscapes.jpg";
import cityScapesDesktopBg from "../../assets/stories/desktop/cityscapes.jpg";
import voyageBg from "../../assets/stories/mobile/18-days-voyage.jpg";
import voyageDesktopBg from "../../assets/stories/desktop/18-days-voyage.jpg";
import architectureBg from "../../assets/stories/mobile/architecturals.jpg";
import architectureDesktopBg from "../../assets/stories/desktop/architecturals.jpg";

const Home = () => {
  return (
    <>
      <Banner
        bgImage={bannerImage}
        title="create and share your photo stories."
        content="Photosnap is a platform for photographers and visual storytellers. We make it 
        easy to share photos, tell stories and connect with others."
        btnText="get an invite"
        bgTablet={bgTablet}
        bgDesktop={bgDesktop}
      />
      <Services />
      <section className="grid md:grid-cols-2 story lg:grid-cols-4">
        <Story
          imagePath={storyMountainBg}
          title="the mountains"
          author="by John Appleseed"
          bgDesktop={storyMountainDesktopBg}
        />
        <Story
          imagePath={cityScapesBg}
          title="sunset cityscapes"
          author="by Benjamin Cruz"
          bgDesktop={cityScapesDesktopBg}
        />
        <Story
          imagePath={voyageBg}
          title="18 days voyage"
          author="by Alexei Borodin"
          bgDesktop={voyageDesktopBg}
        />
        <Story
          imagePath={architectureBg}
          title="architecturals"
          author="by Samantha Brooke"
          bgDesktop={architectureDesktopBg}
        />
      </section>
    </>
  );
};

export default Home;
