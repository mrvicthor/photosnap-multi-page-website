import { convertCurrency } from "../../helpers/toUSDollar";

const Lists = ({ title, content, price, period, bgColor }) => {
  return (
    <article
      className={`${
        bgColor ? "bg-[#000000] text-[#ffffff]" : "bg-[#F5F5F5] text-[#000000]"
      } pt-[3.5rem] pb-[2.5rem] space-y-[2.5rem] flex flex-col items-center relative`}
    >
      {bgColor && (
        <div className="absolute price--line top-0 left-0 right-0 w-full h-[6px]" />
      )}
      <heading className="flex flex-col gap-y-[1.125rem] px-[1.375rem]">
        <h3 className="text-[1.5rem] font-bold leading-[1.5625rem] text-center capitalize">
          {title}
        </h3>
        <p className="text-center opacity-60 text-[0.9375rem] leading-[1.5625rem]">
          {content}
        </p>
      </heading>
      <div className="flex flex-col items-center">
        <p className="font-bold leading-[3rem] text-[2.5rem]">
          {convertCurrency(price)}
        </p>
        <p className="text-[0.9375rem] leading-[1.5625rem] font-normal opacity-60">
          {period}
        </p>
      </div>
      <button
        className={`${
          bgColor
            ? "bg-[#ffffff] text-[#000000]"
            : "bg-[#000000] text-[#ffffff]"
        } w-[15.3125rem] h-[2.5rem] uppercase leading-[1rem] tracking-[2px] font-bold text-[0.75rem]`}
      >
        pick plan
      </button>
    </article>
  );
};

export default Lists;
