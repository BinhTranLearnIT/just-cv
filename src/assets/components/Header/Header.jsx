import React, { useEffect, useState } from "react";
import "./Header.css";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 w-full z-50 ${
        scrolled ? "header--scrolled" : ""
      }`}
    >
      <div
        className={`header__mobile h-[55vh] py-[20px] bg-white 
          shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]
          rounded-bl-lg rounded-br-lg
       top-[-50px] left-0 absolute  w-full flex flex-col justify-end
       transform transition duration-500 ease-out opacity-0 ${
         isNavOpen ? "slide-down" : "slide-up pointer-events-none -z-10"
       }
      `}
      >
        <button className="jc-hover py-6 jc-text-black jc-text-sm font-semibold ">
          Home
        </button>
        <button className=" jc-hover py-6 jc-text-black jc-text-sm font-semibold">
          Template
        </button>
        <button className="jc-hover py-6 jc-text-black jc-text-sm font-semibold">
          Language
        </button>
        <button className="mx-auto w-fit hover:text-white jc-text-black  jc-bg-linear font-bold jc-btn jc-text-sm">
          Sign in
        </button>
      </div>

      <div className="jc-container flex     justify-between items-center">
        <div
          className={`header__logo py-2 ${
            isNavOpen ? "jc-text-black" : "text-white"
          } transition-colors duration-300 z-10 font-bold text-xl md:text-2xl lg:text-4xl`}
        >
          JustRS
        </div>
        <div className="header__navbar hidden sm:flex space-x-10">
          <button className="jc-hover py-6 text-white jc-text-sm font-semibold ">
            Home
          </button>
          <button className=" jc-hover py-6 text-white jc-text-sm font-semibold">
            Template
          </button>
          <button className="jc-hover py-6 text-white jc-text-sm font-semibold">
            Language
          </button>
        </div>
        <div className="header__action-btn hidden sm:block ">
          <button className="text-white  hover:jc-bg-linear font-bold jc-btn jc-text-sm">
            Sign in
          </button>
        </div>
        <button
          className="header__hamburger sm:hidden block relative h-[48px] w-[48px]"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            width="30"
            height="23"
            viewBox="0 0 33 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={` absolute transition-all top-0 right-0 transform translate-y-[50%] duration-500 ${
              isNavOpen
                ? "opacity-0 scale-75 rotate-45"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <rect
              width="33"
              height="3.71429"
              rx="1.85714"
              fill="url(#paint0_linear_13_83)"
            />
            <rect
              y="22.2857"
              width="33"
              height="3.71429"
              rx="1.85714"
              fill="url(#paint1_linear_13_83)"
            />
            <rect
              x="9"
              y="11.1429"
              width="24"
              height="3.71429"
              rx="1.85714"
              fill="url(#paint2_linear_13_83)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_83"
                x1="-8.62252e-09"
                y1="3.46667"
                x2="36.0395"
                y2="3.46666"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C0B7E8" />
                <stop offset="1" stop-color="#8176AF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_13_83"
                x1="-3.90789"
                y1="26"
                x2="33"
                y2="26"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C0B7E8" />
                <stop offset="1" stop-color="#8176AF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_13_83"
                x1="5.21062"
                y1="13"
                x2="33.0001"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C0B7E8" />
                <stop offset="1" stop-color="#8176AF" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="30"
            height="24"
            viewBox="0 0 33 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={` absolute transition-all duration-500 top-0 right-0 transform translate-y-[50%] ${
              isNavOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-45"
            }`}
          >
            <rect
              x="4.16748"
              y="23.3511"
              width="33"
              height="3.71429"
              rx="1.85714"
              transform="rotate(-45 4.16748 23.3511)"
              fill="url(#paint0_linear_13_83)"
            />
            <path
              d="M5.61539 1.18975C6.34065 0.464495 7.51653 0.464495 8.24179 1.18976L28.9499 21.8979C29.6752 22.6231 29.6752 23.799 28.9499 24.5243V24.5243C28.2247 25.2495 27.0488 25.2495 26.3235 24.5243L5.61539 3.81615C4.89013 3.09089 4.89013 1.91501 5.61539 1.18975V1.18975Z"
              fill="url(#paint1_linear_13_83)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_83"
                x1="4.16748"
                y1="26.8178"
                x2="40.207"
                y2="26.8178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C0B7E8" />
                <stop offset="1" stop-color="#8176AF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_13_83"
                x1="4.49769"
                y1="1.62349"
                x2="30.5955"
                y2="27.7213"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C0B7E8" />
                <stop offset="1" stop-color="#8176AF" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </header>
  );
}
