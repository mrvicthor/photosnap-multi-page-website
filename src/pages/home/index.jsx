import bannerImage from "../../assets/home/mobile/create-and-share.jpg";
import bgTablet from "../../assets/home/tablet/create-and-share.jpg";
import bgDesktop from "../../assets/home/desktop/create-and-share.jpg";
import { Banner } from "../../components";
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
    </>
  );
};

export default Home;
