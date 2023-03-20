import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({ children, btnText, style }) => {
  return (
    <Link
      to="/"
      className={`flex items-center gap-x-[1.125rem] ${
        style ? style : "mt-[1.4375rem]"
      } md:mt-12 group`}
    >
      <div className="text-[0.75rem] leading-[15.62px] font-bold uppercase hover:border-b hover:border-[#000000]">
        {btnText}
      </div>
      {children}
    </Link>
  );
};

export default LinkButton;
