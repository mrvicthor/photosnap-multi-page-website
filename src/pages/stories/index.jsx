import { Hero } from "../../components";
import heroMobileImage from "../../assets/stories/mobile/moon-of-appalacia.jpg";
import heroTabletImage from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import heroDesktopImage from "../../assets/stories/desktop/moon-of-appalacia.jpg";
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
    </>
  );
};
export default Stories;
