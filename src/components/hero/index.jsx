import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/use-Window-Size";

const Hero = ({
  mobileImage,
  tabletImage,
  desktopImage,
  title,
  subtitle,
  author,
  content,
  dateCreated,
}) => {
  const { width } = useWindowSize();
  return (
    <div>
      {width !== undefined && (
        <img
          src={
            width <= 768
              ? mobileImage
              : width > 768 && width <= 1024
              ? tabletImage
              : desktopImage
          }
          alt="hero image"
          className="object-cover w-full h-full"
        />
      )}
      <article className="bg-[#000000] text-[#ffffff] py-12 pl-[1.8125rem] pr-[1.75rem]">
        <h1 className="font-bold text-[0.75rem] tracking-[2px] leading-[15.62px] uppercase">
          {title}
        </h1>
        <h2 className="mt-4 text-[2rem] font-bold leading-[2.5rem] tracking-[3.33px] uppercase w-[19.875rem]">
          {subtitle}
        </h2>
        <p className="mt-4 font-normal text-[0.8125rem] leading-[16.93px]">
          <span className="pr-[9px] opacity-75">{dateCreated}</span>
          {author}
        </p>
        <p className="text-[0.9375rem] mt-[1.5rem] font-normal leading-[25px] opacity-60">
          {content}
        </p>

        <Link
          to="/"
          className="flex gap-x-[1.125rem] items-center mt-[1.25rem] group"
        >
          <div className="uppercase text-[0.75rem] leading-[15.62px] tracking-[2px] font-bold">
            read the story
          </div>
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
        </Link>
      </article>
    </div>
  );
};

export default Hero;
