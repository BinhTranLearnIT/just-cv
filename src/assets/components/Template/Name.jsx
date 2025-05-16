import React from "react";

export default function Name({ data, reverse, ...props }) {
  if (data) {
    return (
      <section
        id="name"
        className={`w-full flex ${reverse ? "flex-col-reverse" : "flex-col"} `}
      >
        {(data?.firstName || data?.lastName) && (
          <div className="tp-name flex flex-col text-[72px] font-lora leading-[1.1] text-[#3f3f3f] capitalize">
            {data?.firstName && (
              <span className="tp-name__first-name">{data.firstName}</span>
            )}
            {data?.lastName && (
              <span className="tp-name__last-name">{data.lastName}</span>
            )}
          </div>
        )}
        {data?.jobTitle && (
          <div className="tp-job-title uppercase font-lora text-[14px] order-0 font-[500] mt-[24px] leading-none tracking-[3.22px] mb-[5px]">
            <span>{data.jobTitle}</span>
          </div>
        )}
      </section>
    );
  }
}
