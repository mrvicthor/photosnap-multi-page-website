import { Banner, Lists } from "../../components";
import LinkButton from "../../components/common/linkbutton";
import { useWindowSize } from "../../hooks/use-Window-Size";
import betaBg from "../../assets/shared/mobile/bg-beta.jpg";
import betaTabletBg from "../../assets/shared/tablet/bg-beta.jpg";
import betaDesktopBg from "../../assets/shared/desktop/bg-beta.jpg";
import heroBg from "../../assets/pricing/mobile/hero.jpg";
import heroTabletBg from "../../assets/pricing/tablet/hero.jpg";
import heroDesktopBg from "../../assets/pricing/desktop/hero.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const Pricing = () => {
  const { width } = useWindowSize();
  const [yearlySub, setYearlySub] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <Banner
        bgDesktop={heroDesktopBg}
        bgImage={heroBg}
        bgTablet={heroTabletBg}
        title="pricing"
        content="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        notHome
      />
      <section className="py-16 px-[1.75rem] bg-white md:py-[7rem] lg:py-[7.5rem]">
        <div className="flex justify-center gap-x-8 items-center text-[#000000]">
          <p
            className={`${
              yearlySub ? "opacity-50" : "opacity-100"
            } text-[1.125rem] font-bold leading-[1.5625rem]`}
          >
            Monthly
          </p>
          <div
            className={`${
              yearlySub
                ? "bg-[#000000] justify-end "
                : "bg-[#DFDFDF] justify-start"
            } flex items-center px-1 rounded-full w-16 h-8 cursor-pointer`}
            onClick={() => setYearlySub(!yearlySub)}
          >
            <motion.div
              className={`w-[1.5rem] h-[1.5rem] ${
                yearlySub ? "bg-white" : "bg-[#000000]"
              } rounded-full `}
              layout
              transition={spring}
            />
          </div>
          <p
            className={`${
              yearlySub ? "opacity-100" : "opacity-50"
            } text-[1.125rem] font-bold leading-[1.5625rem]`}
          >
            Yearly
          </p>
        </div>
        <div className="mt-[2.5rem] space-y-6 md:px-[2.5rem] pricing-subscription lg:space-y-0">
          <Lists
            title="basic"
            content="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={yearlySub ? 19 * 10 : 19}
            period={yearlySub ? "per year" : "per month"}
          />
          <Lists
            title="pro"
            content="More advanced features available. Recommended for photography veterans and professionals."
            price={yearlySub ? 39 * 10 : 39}
            period={yearlySub ? "per year" : "per month"}
            bgColor
          />
          <Lists
            title="business"
            content="Additional features available such as more detailed metrics. Recommended for business owners."
            price={yearlySub ? 99 * 10 : 99}
            period={yearlySub ? "per year" : "per month"}
          />
        </div>
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

export default Pricing;
