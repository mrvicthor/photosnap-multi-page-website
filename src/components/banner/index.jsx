import { Link } from "react-router-dom";
import Arrow from "../../assets/shared/desktop/arrow.svg";
import { useWindowSize } from "../../hooks/use-Window-Size";
import LinkButton from "../common/linkbutton";

const Banner = ({ bgImage, bgTablet, bgDesktop, title, content }) => {
  const { width } = useWindowSize();
  return (
    <section>
      <div className="banner grid">
        <div className="md:order-last">
          {width !== undefined && (
            <img
              src={
                width <= 768
                  ? bgImage
                  : width > 768 && width <= 1024
                  ? bgTablet
                  : bgDesktop
              }
              alt="banner image"
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="bg-[#000000] text-[#ffffff] pl-[2.0625rem] pr-6 md:relative md:px-[3.375rem] md:py-[10.8125rem] lg:px-[7rem]">
          <div className="line h-[6px] w-[8rem] md:w-[19rem] md:absolute md:-left-[9.125rem] md:top-[20.5rem] md:rotate-[270deg]" />
          <article className="mt-[4.125rem] md:mt-0">
            <h1 className="font-bold text-[2rem] leading-[2.5rem] w-[19.875rem] tracking-[3.3px] uppercase md:text-[2rem] md:leading-[3rem] md:tracking-[4.17px] md:w-[23.1875rem]">
              {title}
            </h1>
            <p className="text-[0.9375rem] opacity-50 leading-[1.5625rem] pt-4  md:pt-[1.3125rem] md:w-[24.1875rem] w-[19.875rem] md:pt-12">
              {content}
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
    </section>
  );
};

export default Banner;
