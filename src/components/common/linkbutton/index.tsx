import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({ children, btnText }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-x-[1.125rem] mt-[1.4375rem] md:mt-12 group"
    >
      <div className="text-[0.75rem] leading-[15.62px] font-bold uppercase">
        {btnText}
      </div>
      {children}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fillRule="evenodd" stroke="#ffffff">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg> */}
    </Link>
  );
};

export default LinkButton;
