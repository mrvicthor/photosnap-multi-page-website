import { Banner } from "../../components";
import LinkButton from "../../components/common/linkbutton";
import { useWindowSize } from "../../hooks/use-Window-Size";
import betaBg from "../../assets/shared/mobile/bg-beta.jpg";
import betaTabletBg from "../../assets/shared/tablet/bg-beta.jpg";
import betaDesktopBg from "../../assets/shared/desktop/bg-beta.jpg";

const Pricing = () => {
  const { width } = useWindowSize();
  return (
    <>
      <Banner />
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
