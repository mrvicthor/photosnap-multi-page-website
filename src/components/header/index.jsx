// import Logo from "../assets/shared/desktop/logo.svg";
import { useState } from "react";
import Logo from "../../assets/shared/desktop/logo.svg";
import Menu from "../../assets/shared/mobile/menu.svg";
import Close from "../../assets/shared/mobile/close.svg";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../index";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="relative">
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="h-[37.1875rem] absolute bg-[#000000] left-0 right-0 opacity-50 top-[72px] z-10"
        />
      )}
      <nav className="flex justify-between items-center px-6 py-[1.75rem] md:px-[2.5rem] lg:mx-auto lg:max-w-[69.375rem]">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          id="mobile-nav"
          data-visible={showMenu ? true : false}
          className="mobile-nav absolute top-[71px] px-8 py-8 bg-[#ffffff] left-0 right-0 flex flex-col items-center gap-[1.25rem] h-[15.8125rem] z-10 md:static md:h-4 md:top-0 md:py-0 md:flex-row md:px-0 md:gap-[2.3125rem]"
        >
          <NavLink
            to="/stories"
            className="font-bold text-[0.9375rem] leading-[19.53px] text-[#000000] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
          >
            stories
          </NavLink>
          <NavLink
            to="/features"
            className="font-bold text-[0.9375rem] leading-[19.53px] text-[#000000] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
          >
            features
          </NavLink>
          <NavLink
            to="/prices"
            className="font-bold text-[0.9375rem] leading-[19.53px] text-[#000000] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
          >
            prices
          </NavLink>
          <hr className="bg-[#000000] h-[1px] opacity-25 w-full md:hidden" />

          <Button style />
        </div>
        <Button spacing />
        <div
          onClick={() => setShowMenu(!showMenu)}
          aria-controls="mobile-nav"
          className="md:hidden"
        >
          <button>
            <span className="sr-only" aria-expanded="false" role="menubar">
              Menu
            </span>
            <img src={showMenu ? Close : Menu} alt="hamburger-menu" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
