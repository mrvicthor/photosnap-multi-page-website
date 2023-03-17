import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/use-Window-Size";

const Story = ({ title, author, imagePath, bgDesktop }) => {
  const { width } = useWindowSize();
  return (
    <div className="story--block h-[23.4375rem] relative text-[#ffffff] md:h-full cursor-pointer">
      {width !== undefined && (
        <img
          src={width <= 1024 ? imagePath : bgDesktop}
          alt={title}
          className="object-cover w-full h-full"
        />
      )}
      <div className="story--block-overlay absolute left-0 h-[23.4375rem] top-0 right-0 md:h-full" />
      <div className="absolute left-[2.0625rem] right-8 bottom-[2.5rem]">
        <article className="space-y-1">
          <h3 className="text-[1.125rem] font-bold capitalize leading-[1.5625rem]">
            {title}
          </h3>
          <p className="text-[0.8125rem] font-normal leading-[16.93px]">
            {author}
          </p>
        </article>
        <hr className="mt-4 bg-[#ffffff] opacity-25" />
        <Link
          to="/"
          className="flex justify-between items-center mt-[1.25rem] group"
        >
          <div className="uppercase text-[0.75rem] leading-[15.62px] tracking-[2px] font-bold">
            read story
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
      </div>
    </div>
  );
};

export default Story;
