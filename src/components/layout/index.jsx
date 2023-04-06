import { Header } from "../index";
import LinkButton from "../common/linkbutton";
import { NavLink, Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="grid layout">
      <Header />
      <main className="main">{children}</main>
      <footer className="footer bg-[#000000] text-[#ffffff]">
        <div className="py-[3.5rem] pl-[2.0625rem] pr-8 md:py-16 md:px-[2.4375rem] lg:max-w-[69rem] lg:mx-auto lg:py-[4rem]">
          <div className="footer--block grid justify-items-center md:grid-cols-2 md:justify-items-start md:gap-y-8 lg:gap-x-[6.8125rem]">
            <Link to="/" className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="170" height="16">
                <defs>
                  <linearGradient
                    id="a"
                    x1="0%"
                    x2="50%"
                    y1="85.457%"
                    y2="14.543%"
                  >
                    <stop offset="0%" stopColor="#FFC593" />
                    <stop offset="51.945%" stopColor="#BC7198" />
                    <stop offset="100%" stopColor="#5A77FF" />
                  </linearGradient>
                </defs>
                <g fill="#fff" fillRule="evenodd">
                  <path
                    fill=""
                    fillRule="nonzero"
                    d="M31.108 15.568v-4.541h2.703c.836 0 1.6-.133 2.292-.4a5.19 5.19 0 001.773-1.113 5.1 5.1 0 001.146-1.676c.273-.642.41-1.344.41-2.108 0-.75-.137-1.449-.41-2.098a5.072 5.072 0 00-1.146-1.686A5.19 5.19 0 0036.103.832c-.692-.266-1.456-.4-2.292-.4H27v15.136h4.108zm2.487-8.217h-2.487V4.108h2.487c.49 0 .9.162 1.232.487.332.324.497.702.497 1.135 0 .432-.165.81-.497 1.135-.332.324-.742.486-1.232.486zm12.54 8.217V9.73h5.514v5.838h4.108V.432h-4.108v5.622h-5.514V.432h-4.108v15.136h4.108zM66.784 16a8.616 8.616 0 003.319-.638 8.401 8.401 0 002.68-1.74 8.192 8.192 0 001.785-2.552c.432-.965.648-1.989.648-3.07a7.428 7.428 0 00-.648-3.07 8.192 8.192 0 00-1.784-2.552 8.401 8.401 0 00-2.681-1.74A8.616 8.616 0 0066.783 0c-1.196 0-2.306.213-3.329.638a8.432 8.432 0 00-2.67 1.74A8.192 8.192 0 0059 4.93 7.428 7.428 0 0058.351 8c0 1.081.217 2.105.649 3.07a8.192 8.192 0 001.784 2.552 8.432 8.432 0 002.67 1.74c1.023.425 2.133.638 3.33.638zm0-3.676A4.285 4.285 0 0165.119 12a3.942 3.942 0 01-1.34-.908 4.33 4.33 0 01-.887-1.373A4.479 4.479 0 0162.568 8c0-.62.108-1.193.324-1.719a4.33 4.33 0 01.886-1.373c.375-.39.822-.692 1.34-.908a4.285 4.285 0 011.666-.324c.59 0 1.142.108 1.654.324.512.216.958.519 1.34.908.382.39.681.847.898 1.373.216.526.324 1.1.324 1.719 0 .62-.108 1.193-.324 1.719a4.236 4.236 0 01-.898 1.373c-.382.39-.828.692-1.34.908a4.206 4.206 0 01-1.654.324zm18.054 3.244V4.108h4.216V.432h-12.54v3.676h4.216v11.46h4.108zM98.784 16a8.616 8.616 0 003.319-.638 8.401 8.401 0 002.68-1.74 8.192 8.192 0 001.785-2.552c.432-.965.648-1.989.648-3.07a7.428 7.428 0 00-.648-3.07 8.192 8.192 0 00-1.784-2.552 8.401 8.401 0 00-2.681-1.74A8.616 8.616 0 0098.783 0c-1.196 0-2.306.213-3.329.638a8.432 8.432 0 00-2.67 1.74A8.192 8.192 0 0091 4.93 7.428 7.428 0 0090.351 8c0 1.081.217 2.105.649 3.07a8.192 8.192 0 001.784 2.552 8.432 8.432 0 002.67 1.74c1.023.425 2.133.638 3.33.638zm0-3.676A4.285 4.285 0 0197.119 12a3.942 3.942 0 01-1.34-.908 4.33 4.33 0 01-.887-1.373A4.479 4.479 0 0194.568 8c0-.62.108-1.193.324-1.719a4.33 4.33 0 01.886-1.373c.375-.39.822-.692 1.34-.908a4.285 4.285 0 011.666-.324c.59 0 1.142.108 1.654.324.512.216.958.519 1.34.908.382.39.681.847.898 1.373.216.526.324 1.1.324 1.719 0 .62-.108 1.193-.324 1.719a4.236 4.236 0 01-.898 1.373c-.382.39-.828.692-1.34.908a4.206 4.206 0 01-1.654.324zM114.568 16c.95 0 1.801-.133 2.55-.4.75-.267 1.385-.627 1.904-1.081.519-.454.915-.98 1.189-1.578.274-.599.41-1.236.41-1.914 0-.88-.172-1.6-.518-2.162a4.35 4.35 0 00-1.298-1.362 6.98 6.98 0 00-1.697-.822l-1.697-.562a7.533 7.533 0 01-1.297-.551c-.346-.195-.52-.465-.52-.811 0-.332.148-.63.444-.898.295-.266.688-.4 1.178-.4.375 0 .714.062 1.016.184.303.123.563.263.779.422.26.173.49.367.692.584l2.378-2.487a5.559 5.559 0 00-1.276-1.08c-.432-.275-.98-.523-1.643-.747C116.5.112 115.706 0 114.784 0c-.865 0-1.65.13-2.357.39-.706.259-1.308.605-1.805 1.037-.498.432-.883.93-1.157 1.492a3.908 3.908 0 00-.41 1.73c0 .879.172 1.6.518 2.162a4.35 4.35 0 001.297 1.362 6.98 6.98 0 001.698.822c.612.201 1.178.389 1.697.562.519.173.951.357 1.297.551.346.195.52.465.52.81 0 .433-.174.812-.52 1.136-.346.324-.821.487-1.427.487-.49 0-.933-.083-1.33-.25a5.466 5.466 0 01-1.027-.55 5.352 5.352 0 01-.886-.822l-2.378 2.486c.432.49.944.923 1.535 1.298.504.331 1.131.63 1.88.897.75.267 1.63.4 2.639.4zm12.54-.432V7.135l6.508 8.433h3.546V.432h-4.108v8.433L126.568.432H123v15.136h4.108zm16.216 0l1.081-3.244h4.973l1.081 3.244h4.433L149.162.432h-4.54l-5.73 15.136h4.432zm4.973-6.487h-2.81l1.405-4.432 1.405 4.432zm12.433 6.487v-4.541h2.702c.836 0 1.6-.133 2.292-.4a5.19 5.19 0 001.773-1.113 5.1 5.1 0 001.146-1.676c.274-.642.411-1.344.411-2.108 0-.75-.137-1.449-.41-2.098a5.072 5.072 0 00-1.147-1.686 5.19 5.19 0 00-1.773-1.114c-.692-.266-1.456-.4-2.292-.4h-6.81v15.136h4.108zm2.486-8.217h-2.486V4.108h2.486c.49 0 .901.162 1.233.487.331.324.497.702.497 1.135 0 .432-.166.81-.497 1.135-.332.324-.743.486-1.233.486z"
                  />
                  <path fill="url(#a)" d="M0 16L9.5 0 19 16z" />
                </g>
              </svg>
            </Link>
            <div className="mt-8 footer--socials flex gap-x-4 md:row-start-3 md:mt-[2.5rem] lg:mt-0">
              <a
                href="https://www.facebook.com/outtaspace1/"
                target="_blank"
                className="footer--socials-facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <defs>
                    <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#63AFDB" />
                      <stop offset="100%" stopColor="#6028F1" />
                    </linearGradient>
                  </defs>
                  <path
                    fill=""
                    d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/mrvicthor"
                target="_blank"
                className="footer--socials-youtube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                  <defs>
                    <linearGradient id="b" x1="0%" x2="100%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#D3205A" />
                      <stop offset="100%" stopColor="#FF5A5A" />
                    </linearGradient>
                  </defs>
                  <path
                    fill=""
                    d="M43.33 0c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.653.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zm-5.367-6.029l4.098 1.949-4.098 1.955V8.048z"
                    transform="translate(-33)"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/eva_skillz"
                target="_blank"
                className="footer--socials-twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
                  <defs>
                    <linearGradient
                      id="c"
                      x1="100%"
                      x2="0%"
                      y1="16.979%"
                      y2="83.021%"
                    >
                      <stop offset="0%" stopColor="#65FFEB" />
                      <stop offset="100%" stopColor="#27718A" />
                    </linearGradient>
                  </defs>
                  <path
                    fill=""
                    d="M86.66 3.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-2.995-1.296c-2.65 0-4.596 2.472-3.998 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.901 1.318 3.68 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
                    transform="translate(-66 -1)"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/mrvicthor"
                target="_blank"
                className="footer--socials-pinterest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <defs>
                    <linearGradient id="d" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#F6C683" />
                      <stop offset="100%" stopColor="#DE3838" />
                    </linearGradient>
                  </defs>
                  <path
                    fill=""
                    d="M109.99 0c-5.522 0-10 4.477-10 10 0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10s-4.477-10-10-10z"
                    transform="translate(-100)"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mrvic_thor/"
                target="_blank"
                className="footer--socials-instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                  <defs>
                    <linearGradient id="e" x1="0%" x2="50%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFC593" />
                      <stop offset="51.945%" stopColor="#BC7198" />
                      <stop offset="100%" stopColor="#5A77FF" />
                    </linearGradient>
                  </defs>
                  <path
                    fill=""
                    d="M143.32 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802c-2.716 0-3.056.012-4.123.06-3.631.167-5.65 2.182-5.816 5.817-.05 1.067-.061 1.407-.061 4.123s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122c-.163-3.629-2.18-5.65-5.816-5.817C146.377.01 146.036 0 143.32 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                    transform="translate(-133)"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-[3.0625rem] flex flex-col items-center gap-y-[1.1875rem] md:flex-row md:gap-x-[1.625rem] md:row-start-2 md:col-start-1 md:col-end-2 md:mt-0  lg:row-start-1 lg:row-end-4 lg:w-full lg:col-start-2 lg:flex-col lg:gap-y-[1.1875rem] lg:items-start lg:col-end-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "opacity-50 block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                    : "block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                }
              >
                home
              </NavLink>
              <NavLink
                to="/stories"
                className={({ isActive }) =>
                  isActive
                    ? "opacity-50 block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                    : "block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                }
              >
                stories
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive
                    ? "opacity-50 block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                    : "block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                }
              >
                features
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "opacity-50 block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                    : "block  font-bold text-[0.75rem] leading-[15.62px] tracking-[2px] uppercase cursor-pointer hover:text-[#dfdfdf]"
                }
              >
                pricing
              </NavLink>
            </div>

            <LinkButton
              btnText="get an invite"
              style="mt-[7.4375rem] md:justify-self-end md:mt-0 md:col-start-2 md:col-end-3 md:row-start-1 lg:col-start-6 lg:col-end-7"
            >
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
            </LinkButton>
            <p className="mt-[2.125rem] font-normal text-[0.9375rem] leading-[19.53px] opacity-50 md:justify-self-end md:col-start-2 md:col-end-3 md:row-start-3 lg:mt-0 lg:col-start-6 lg:col-end-7">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
