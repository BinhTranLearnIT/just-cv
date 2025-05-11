import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function JcSwiper({ children, ...props }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      <button ref={prevRef} className="jc-prev absolute top-1/3 -left-3 z-10 ">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31" cy="31" r="31" fill="#0E0E0E" fill-opacity="0.32" />
          <circle cx="31" cy="31" r="22" fill="url(#paint0_linear_0_1)" />
          <path
            d="M35.1666 38.9166L27.25 31L35.1666 23.0833"
            stroke="#433D60"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="54.2571"
              y1="32.5714"
              x2="9"
              y2="34.4571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C0B7E8" />
              <stop offset="1" stop-color="#8176AF" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <button ref={nextRef} className="jc-next absolute top-1/3 -right-3 z-10">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31" cy="31" r="31" fill="#0E0E0E" fill-opacity="0.32" />
          <circle cx="31" cy="31" r="22" fill="url(#paint0_linear_0_1)" />
          <path
            d="M28.8334 38.9166L36.75 31L28.8334 23.0833"
            stroke="#433D60"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="54.2571"
              y1="32.5714"
              x2="9"
              y2="34.4571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C0B7E8" />
              <stop offset="1" stop-color="#8176AF" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <Swiper
        navigation={{
          nextEl: ".jc-next",
          prevEl: ".jc-prev",
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          // Gắn thủ công khi Swiper init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        {...props}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
