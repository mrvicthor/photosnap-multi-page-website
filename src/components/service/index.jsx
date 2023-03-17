import LinkButton from "../common/linkbutton";
import { useWindowSize } from "../../hooks/use-Window-Size";
const Service = ({
  bgImage,
  tabletBg,
  desktopBg,
  title,
  content,
  btnText,
  order,
}) => {
  const { width } = useWindowSize();
  return (
    <div
      className={`${
        order ? order : "services--box"
      } grid bg-[#ffffff] text-[#000000] overflow-hidden`}
    >
      <div className="">
        {width !== undefined && (
          <img
            src={
              width <= 768
                ? bgImage
                : width > 768 && width <= 1024
                ? tabletBg
                : desktopBg
            }
            alt="service image"
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div
        className={`${
          order ? "md:order-first" : ""
        } services--box-article py-[4.5rem] pr-6 pl-[2.0625rem] md:py-[8.5rem] md:px-[3.375rem]`}
      >
        <article className="space-y-4 md:space-y-[1.3125rem]">
          <h2 className="font-bold uppercase text-[2rem] leading-[2.5rem] tracking-[3.3px] w-[19.875rem] md:text-[2.5rem] md:leading-[3rem] md:tracking-[4.17px]">
            {title}
          </h2>
          <p className="opacity-60 text-[0.9375rem] leading-[1.5625rem]">
            {content}
          </p>
        </article>
        <LinkButton btnText={btnText}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="14"
            className="group-hover:animate-ping"
          >
            <g fill="none" fillRule="evenodd" stroke="#000000">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </LinkButton>
      </div>
    </div>
  );
};

export default Service;
