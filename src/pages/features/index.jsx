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
import LinkButton from "../../components/common/linkbutton";
import { useWindowSize } from "../../hooks/use-Window-Size";
import betaBg from "../../assets/shared/mobile/bg-beta.jpg";
import betaTabletBg from "../../assets/shared/tablet/bg-beta.jpg";
import betaDesktopBg from "../../assets/shared/desktop/bg-beta.jpg";

const Features = () => {
  const { width } = useWindowSize();
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
      <section className="features--block bg-[#ffffff] pt-16 pb-[5.6875rem] pl-[2.0625rem] pr-8 space-y-[3.5rem] md:py-[7rem] md:justify-center md:space-y-0 md:mx-auto md:max-w-[691px] md:grid md:gap-x-[11px] md:gap-y-[4.5rem] lg:py-[10rem] lg:gap-x-[1.875rem] lg:space-y-0 lg:gap-y-[6.5rem] lg:px-0 lg:max-w-[69.375rem]">
        <Feature
          imagePath={responsiveIcon}
          title="100% Responsive"
          description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <Feature
          imagePath={noLimitIcon}
          notHome
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
      <section className="text-[#ffffff] h-[18rem] relative overflow-hidden md:h-[17.5rem]">
        {width !== undefined && (
          <img
            src={
              width <= 768
                ? betaBg
                : width > 768 && width <= 1024
                ? betaTabletBg
                : betaDesktopBg
            }
            alt="beta image"
            className="object-cover w-full h-full"
          />
        )}
        <div className="bg-transparent text-[#ffffff] pl-[2.0625rem] pb-[4.5rem] pr-6 absolute top-0 left-0 right-0">
          <div className="relative">
            <div
              className={`line h-[6px] w-[8rem]
           md:w-[17.5rem] md:-left-[10.7rem] md:top-[8.5rem]
            md:absolute  md:rotate-[270deg]`}
            />
            <div className="md:flex md:justify-between md:gap-x-[7.5625rem] md:pr-[2.5rem] lg:mx-auto lg:max-w-[69.375rem]">
              <article className="mt-[4.125rem]">
                <p className="font-bold text-[2rem] leading-[2.5rem] w-[19.875rem] tracking-[3.3px] uppercase md:text-[2rem] md:leading-[3rem] md:tracking-[4.17px] md:w-[23.1875rem]">
                  We’re in beta. Get your invite today!
                </p>
              </article>

              <LinkButton btnText="get an invite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="14"
                  className="group-hover:animate-ping"
                >
                  <g fill="none" fillRule="evenodd" stroke="#ffffff">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
