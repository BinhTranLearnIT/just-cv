import React from "react";

export default function Education({ data, ...props }) {
  return (
    <section id="education" className="flex flex-col space-y-[16px]">
      {data.map((edu) => (
        <div className="flex flex-col text-[14px] first:text-[#3f3f3f] text-[#3f3f3fb3] font-[500] leading-[22px]">
          <div className="flex justify-between">
            <div className="tp-education__degree uppercase max-w-[50%]  ">
              {edu.degree}
            </div>
            <div className="tp-education__date flex">
              <div className="tp-education__date--start">{edu.startDate}</div>
              <div className="tp-education__date--end">
                <span>&nbsp;-&nbsp;</span> {edu.endDate}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="tp-education__institution capitalize">
              {edu.institution}
            </div>
            <span>&nbsp;|&nbsp; </span>
            <div className="tp-education__location capitalize">
              {edu.location}
            </div>
          </div>
          <div className="tp-education__description  font-[400] text-[#3f3f3fB3]  pl-[16px]">
            {Array.isArray(edu.description) &&
              edu.description.map((des) => (
                <p className="relative mt-[8px]">
                  {des}
                  <span className="absolute top-[-5px] left-[-12px] font-[600] text-[20px]">
                    .
                  </span>
                </p>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
