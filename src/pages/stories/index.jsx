import { Hero, Story } from "../../components";
import heroMobileImage from "../../assets/stories/mobile/moon-of-appalacia.jpg";
import heroTabletImage from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import heroDesktopImage from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import storyMountainBg from "../../assets/stories/mobile/mountains.jpg";
import storyMountainDesktopBg from "../../assets/stories/desktop/mountains.jpg";
import cityScapesBg from "../../assets/stories/mobile/cityscapes.jpg";
import cityScapesDesktopBg from "../../assets/stories/desktop/cityscapes.jpg";
import voyageBg from "../../assets/stories/mobile/18-days-voyage.jpg";
import voyageDesktopBg from "../../assets/stories/desktop/18-days-voyage.jpg";
import architectureBg from "../../assets/stories/mobile/architecturals.jpg";
import architectureDesktopBg from "../../assets/stories/desktop/architecturals.jpg";
import worldTourBg from "../../assets/stories/mobile/world-tour.jpg";
import worldTourDesktopBg from "../../assets/stories/desktop/world-tour.jpg";
import unforeseenBg from "../../assets/stories/mobile/unforeseen-corners.jpg";
import unforeseenDesktopBg from "../../assets/stories/desktop/unforeseen-corners.jpg";
import lionBg from "../../assets/stories/mobile/king-on-africa.jpg";
import lionDesktopBg from "../../assets/stories/desktop/king-on-africa.jpg";
import tripToBg from "../../assets/stories/mobile/trip-to-nowhere.jpg";
import tripToDesktopBg from "../../assets/stories/desktop/trip-to-nowhere.jpg";
import seaRageBg from "../../assets/stories/mobile/rage-of-the-sea.jpg";
import seaRageDesktopBg from "../../assets/stories/desktop/rage-of-the-sea.jpg";
import runningFreeBg from "../../assets/stories/mobile/running-free.jpg";
import runningFreeDesktopBg from "../../assets/stories/desktop/running-free.jpg";
import wavesBg from "../../assets/stories/mobile/behind-the-waves.jpg";
import wavesDesktopBg from "../../assets/stories/desktop/behind-the-waves.jpg";
import calmWatersBg from "../../assets/stories/mobile/calm-waters.jpg";
import calmWatersDesktopBg from "../../assets/stories/desktop/calm-waters.jpg";
import milkyWayBg from "../../assets/stories/mobile/milky-way.jpg";
import milkyWayDesktopBg from "../../assets/stories/desktop/milky-way.jpg";
import darkForestBg from "../../assets/stories/mobile/dark-forest.jpg";
import darkForestDesktopBg from "../../assets/stories/desktop/dark-forest.jpg";
import somwarpetBg from "../../assets/stories/mobile/somwarpet.jpg";
import somwarpettDesktopBg from "../../assets/stories/desktop/somwarpet.jpg";
import dreamLandBg from "../../assets/stories/mobile/land-of-dreams.jpg";
import dreamLandDesktopBg from "../../assets/stories/desktop/land-of-dreams.jpg";

const Stories = () => {
  return (
    <>
      <Hero
        mobileImage={heroMobileImage}
        desktopImage={heroDesktopImage}
        tabletImage={heroTabletImage}
        title="last month’s featured story"
        subtitle="hazy full moon of appalachia "
        dateCreated="March 2nd 2020"
        author="by John Appleseed"
        content='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
      />
      <section className="grid story-page md:grid-cols-2 lg:grid-cols-4">
        <Story
          imagePath={storyMountainBg}
          dateCreated="April 16th 2020"
          title="The Mountains"
          author="by John Appleseed"
          bgDesktop={storyMountainDesktopBg}
        />
        <Story
          imagePath={cityScapesBg}
          dateCreated="April 14th 2020"
          title="Sunset Cityscapes"
          author="by Benjamin Cruz"
          bgDesktop={cityScapesDesktopBg}
        />
        <Story
          imagePath={voyageBg}
          dateCreated="April 11th 2020"
          title="18 Days Voyage"
          author="by Alexei Borodin"
          bgDesktop={voyageDesktopBg}
        />
        <Story
          imagePath={architectureBg}
          dateCreated="April 9th 2020"
          title="Architecturals"
          author="by Samantha Brooke"
          bgDesktop={architectureDesktopBg}
        />
        <Story
          imagePath={worldTourBg}
          dateCreated="April 7th 2020"
          title="World Tour 2019"
          author="by Timothy Wagner"
          bgDesktop={worldTourDesktopBg}
        />
        <Story
          imagePath={unforeseenBg}
          dateCreated="April 3rd 2020"
          title="Unforeseen Corners"
          author="by William Malcolm"
          bgDesktop={unforeseenDesktopBg}
        />
        <Story
          imagePath={lionBg}
          dateCreated="March 29th 2020"
          title="King on Africa: Part II"
          author="by Tim Hillenburg"
          bgDesktop={lionDesktopBg}
        />
        <Story
          imagePath={tripToBg}
          dateCreated="March 21st 2020"
          title="The Trip to Nowhere"
          author="by Felicia Rourke"
          bgDesktop={tripToDesktopBg}
        />
        <Story
          imagePath={seaRageBg}
          dateCreated="March 19th 2020"
          title="Rage of The Sea"
          author="by Mohammed Abdul"
          bgDesktop={seaRageDesktopBg}
        />
        <Story
          imagePath={runningFreeBg}
          dateCreated="March 16th 2020"
          title="Running Free"
          author="by Michelle"
          bgDesktop={runningFreeDesktopBg}
        />
        <Story
          imagePath={wavesBg}
          dateCreated="March 11th 2020"
          title="Behind the Waves"
          author="by Lamarr Wilson"
          bgDesktop={wavesDesktopBg}
        />
        <Story
          imagePath={calmWatersBg}
          dateCreated="March 9th 2020"
          title="Calm Waters"
          author="by Samantha Brooke"
          bgDesktop={calmWatersDesktopBg}
        />
        <Story
          imagePath={milkyWayBg}
          dateCreated="March 5th 2020"
          title="The Milky Way"
          author="by Benjamin Cruz"
          bgDesktop={milkyWayDesktopBg}
        />
        <Story
          imagePath={darkForestBg}
          dateCreated="March 4th 2020"
          title="Night at The Dark Forest"
          author="by  Mohammed Abdul"
          bgDesktop={darkForestDesktopBg}
        />
        <Story
          imagePath={somwarpetBg}
          dateCreated="March 1st 2020"
          title="Somwarpet’s Beauty"
          author="by Michelle"
          bgDesktop={somwarpettDesktopBg}
        />
        <Story
          imagePath={dreamLandBg}
          dateCreated="February 25th 2020"
          title="Land of Dreams"
          author="by William Malcolm"
          bgDesktop={dreamLandDesktopBg}
        />
      </section>
    </>
  );
};
export default Stories;
