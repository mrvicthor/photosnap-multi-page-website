import { Service } from "../index";
import mobileBg from "../../assets/home/mobile/beautiful-stories.jpg";
import tabletBg from "../../assets/home/tablet/beautiful-stories.jpg";
import desktopBg from "../../assets/home/desktop/beautiful-stories.jpg";
import mobileDesignedBg from "../../assets/home/mobile/designed-for-everyone.jpg";
import tabletDesignedBg from "../../assets/home/tablet/designed-for-everyone.jpg";
import desktopDesignedBg from "../../assets/home/desktop/designed-for-everyone.jpg";
const Services = () => {
  return (
    <section className="grid services">
      <Service
        title="beautiful stories everytime"
        content="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        bgImage={mobileBg}
        tabletBg={tabletBg}
        desktopBg={desktopBg}
        btnText="view the stories"
      />
      <Service
        title="designed for everyone"
        content="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        bgImage={mobileDesignedBg}
        tabletBg={tabletDesignedBg}
        desktopBg={desktopDesignedBg}
        btnText="view the stories"
        order="services--box-even"
      />
    </section>
  );
};

export default Services;
