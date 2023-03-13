const Button = ({ style, spacing }) => {
  return (
    <button
      className={`hover:bg-[#dfdfdf] hover:text-[#000000] font-bold text-[0.9375rem] leading-[19.53px] tracking-[2.5px] text-center uppercase bg-[#000000] text-[#ffffff] w-full py-[0.875rem] ${
        style ? "md:hidden" : ""
      } ${spacing ? "hidden md:block md:w-[9.875rem] md:py-3" : ""}`}
    >
      get an invite
    </button>
  );
};

export default Button;
