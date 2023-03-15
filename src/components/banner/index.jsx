import { Link } from "react-router-dom";
import Arrow from "../../assets/shared/desktop/arrow.svg";
import { useWindowSize } from "../../hooks/use-Window-Size";

const Banner = ({ bgImage, bgTablet, bgDesktop, title, content, btnText }) => {
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
                  : width > 768 <= 1024
                  ? bgTablet
                  : bgDesktop
              }
              alt="banner image"
              className="w-full object-cover h-full"
            />
          )}
        </div>

        <div className="bg-[#000000] text-[#ffffff] pl-[2.0625rem] pr-6">
          <div className="line h-[6px] w-[8rem]" />
          <article className="mt-[4.125rem]">
            <h1 className="font-bold text-[2rem] leading-[2.5rem] tracking-[3.3px] uppercase">
              {title}
            </h1>
            <p className="text-[0.9375rem] opacity-50 leading-[1.5625rem] pt-4">
              {content}
            </p>
          </article>
          <Link
            to="/"
            className="flex items-center gap-x-[1.125rem] mt-[1.4375rem]"
          >
            <div className="text-[0.75rem] leading-[15.62px] font-bold uppercase">
              {btnText}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="#ffffff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
