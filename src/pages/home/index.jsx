import bannerImage from "../../assets/home/mobile/create-and-share.jpg";
import bgTablet from "../../assets/home/tablet/create-and-share.jpg";
import bgDesktop from "../../assets/home/desktop/create-and-share.jpg";
import { Banner, Services, Story, Feature } from "../../components";
import storyMountainBg from "../../assets/stories/mobile/mountains.jpg";
import storyMountainDesktopBg from "../../assets/stories/desktop/mountains.jpg";
import cityScapesBg from "../../assets/stories/mobile/cityscapes.jpg";
import cityScapesDesktopBg from "../../assets/stories/desktop/cityscapes.jpg";
import voyageBg from "../../assets/stories/mobile/18-days-voyage.jpg";
import voyageDesktopBg from "../../assets/stories/desktop/18-days-voyage.jpg";
import architectureBg from "../../assets/stories/mobile/architecturals.jpg";
import architectureDesktopBg from "../../assets/stories/desktop/architecturals.jpg";
import responsiveIcon from "../../assets/features/desktop/responsive.svg";
import noLimitIcon from "../../assets/features/desktop/no-limit.svg";
import embedIcon from "../../assets/features/desktop/embed.svg";

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
      <section className="features py-[5rem] pl-[2.0625rem] pr-8 space-y-[3.5rem] md:py-[7.5rem] md:px-[9.6875rem] overflow-hidden  lg:grid lg:space-y-0 lg:gap-x-[1.875rem]">
        <Feature
          imagePath={responsiveIcon}
          title="100% Responsive"
          description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <Feature
          imagePath={noLimitIcon}
          padding
          title="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <Feature
          imagePath={embedIcon}
          title="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
      </section>
    </>
  );
};

export default Home;
