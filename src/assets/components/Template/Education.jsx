import React from "react";

export default function Education({
  data,
  degreeClass,
  dateClass,
  institutionClass,
  locationClass,
  descriptionClass,
  ...props
}) {
  return (
    <section id="education" className="flex flex-col space-y-[16px]">
      {data.map((edu) => (
        <div className="flex flex-col text-[14px] first:text-[#3f3f3f] text-[#3f3f3fb3] font-[500] leading-[22px]">
          <div className="flex justify-between">
            <div
              className={`tp-education__degree uppercase max-w-[50%] ${degreeClass} `}
            >
              {edu.degree}
            </div>
            <div className="tp-education__date flex">
              <div className={`tp-education__date--start ${dateClass}`}>
                {edu.startDate}
              </div>
              <div className={`tp-education__date--end ${dateClass}`}>
                <span className="mx-[4px]"> - </span>
                {edu.endDate}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div
              className={`tp-education__institution capitalize  ${institutionClass}`}
            >
              {edu.institution}
            </div>
            <span>&nbsp;|&nbsp; </span>
            <div
              className={`tp-education__location capitalize ${locationClass}`}
            >
              {edu.location}
            </div>
          </div>
          <div className="tp-education__description  font-[400] text-[#3f3f3fB3]  pl-[16px]">
            {Array.isArray(edu.description) &&
              edu.description.map((des) => (
                <p className={`relative mt-[8px] ${descriptionClass}`}>
                  {des}

                  <span class="text-black text-[16px] font-[500] absolute leading-none left-[-12px] top-[3px] ">
                    -
                  </span>
                </p>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
