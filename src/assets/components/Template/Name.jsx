import React from "react";

export default function Name({
  data,
  reverse,
  nameClass,
  jobTitleClass,

  ...props
}) {
  if (data) {
    return (
      <section
        id="name"
        className={`w-full flex ${reverse ? "flex-col-reverse" : "flex-col"} `}
      >
        {(data?.firstName || data?.lastName) && (
          <div className={`tp-name  ${nameClass}  `}>
            {data?.firstName && (
              <span className="tp-name__first-name">{data.firstName}</span>
            )}
            {data?.lastName && (
              <span className="tp-name__last-name">{data.lastName}</span>
            )}
          </div>
        )}
        {data?.jobTitle && (
          <div
            className={`tp-job-title 
            ${jobTitleClass}`}
          >
            <span>{data.jobTitle}</span>
          </div>
        )}
      </section>
    );
  }
}
