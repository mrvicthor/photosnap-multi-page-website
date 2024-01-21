// import Logo from "../assets/shared/desktop/logo.svg";
import { useState } from "react";
import Logo from "../../assets/shared/desktop/logo.svg";
import Menu from "../../assets/shared/mobile/menu.svg";
import Close from "../../assets/shared/mobile/close.svg";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../index";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    if (showMenu) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setShowMenu(!showMenu);
  };

  return (
    <header className="relative bg-[#ffffff]">
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="h-[37.1875rem] absolute bg-[#000000] left-0 right-0 opacity-50 top-[72px] z-10 transition duration-500 ease-in-out"
        />
      )}
      <nav className="flex h-full justify-between items-center px-6 py-[1.75rem] md:px-[2.5rem] lg:mx-auto lg:max-w-[69rem]">
        <div>
          <Link onClick={() => setShowMenu(false)} to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          id="mobile-nav"
          data-visible={showMenu ? true : false}
          className="mobile-nav px-8 py-8 bg-[#ffffff] left-0 right-0 flex flex-col items-center gap-[1.25rem] h-[15.8125rem] z-10 md:static md:h-4 md:top-0 md:py-0 md:flex-row md:px-0 md:gap-[2.3125rem]"
        >
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/stories"
            className={({ isActive }) =>
              isActive
                ? "text-[#dfdfdf] font-bold text-[0.9375rem] leading-[19.53px] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
                : "font-bold text-[0.9375rem] leading-[19.53px] text-[#000000] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
            }
          >
            stories
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/features"
            className={({ isActive }) =>
              isActive
                ? "text-[#dfdfdf] font-bold text-[0.9375rem] leading-[19.53px] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
                : "font-bold text-[0.9375rem] leading-[19.53px] text-[#000000] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
            }
          >
            features
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-[#dfdfdf] font-bold text-[0.9375rem] leading-[19.53px] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
                : "font-bold text-[0.9375rem] leading-[19.53px] text-[#000000] tracking-[2.5px] uppercase hover:text-[#dfdfdf] md:text-[0.75rem]"
            }
          >
            pricing
          </NavLink>
          <hr className="bg-[#000000] h-[1px] opacity-25 w-full md:hidden" />

          <Button style />
        </div>
        <Button spacing />
        <div
          onClick={handleShowMenu}
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
