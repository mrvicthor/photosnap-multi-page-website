import { Banner, Feature } from "../../components";
import heroImage from "../../assets/features/mobile/hero.jpg";
import heroTabletImage from "../../assets/features/tablet/hero.jpg";
import heroDesktopImage from "../../assets/features/tablet/hero.jpg";
import responsiveIcon from "../../assets/features/desktop/responsive.svg";
import noLimitIcon from "../../assets/features/desktop/no-limit.svg";
import embedIcon from "../../assets/features/desktop/embed.svg";
import customDomainIcon from "../../assets/features/desktop/custom-domain.svg";
import boostExposureIcon from "../../assets/features/desktop/boost-exposure.svg";
import dragDropIcon from "../../assets/features/desktop/drag-drop.svg";

const Features = () => {
  return (
    <>
      <Banner
        bgImage={heroImage}
        bgTablet={heroTabletImage}
        bgDesktop={heroDesktopImage}
        notHome
        title="features"
        content="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
      />
      <section className="features bg-[#ffffff] pt-16 pb-[5.6875rem] pl-[2.0625rem] pr-8 space-y-[3.5rem] md:py-[7.5rem] md:px-[9.6875rem] lg:grid lg:space-y-0 lg:gap-x-[1.875rem] lg:max-w-[69rem] lg:mx-auto lg:px-0">
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
        <Feature
          imagePath={customDomainIcon}
          title="Custom Domain"
          description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
        />
        <Feature
          imagePath={boostExposureIcon}
          title="Boost Your Exposure"
          description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
        />
        <Feature
          imagePath={dragDropIcon}
          title="Drag & Drop Image"
          description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
        />
      </section>
    </>
  );
};

export default Features;
