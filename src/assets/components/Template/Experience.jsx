import React from "react";
import capitalizeFirstLetter from "../../utils/string/capitalizeFirstLetter";

export default function Experience({
  data,
  positionClass,
  dateClass,
  companyClass,
  locationClass,
  descriptionClass,

  ...props
}) {
  if (data) {
    return (
      <section id="experience" className="flex flex-col space-y-[16px]">
        {data.map((exp, i) => (
          <div
            className="flex flex-col  first:text-[#3f3f3f] text-[#3f3f3fb3] font-[500] text-[14px]  leading-[22px]"
            key={i}
          >
            <div className="flex justify-between">
              {exp.position && (
                <div
                  className={`tp-experience__position ${
                    positionClass ? positionClass : ""
                  } uppercase max-w-[50%]  `}
                >
                  {exp.position}
                </div>
              )}

              <div className="tp-experience__date flex capitalize">
                {exp.startDate && (
                  <div className={`tp-experience__date--start ${dateClass}`}>
                    {exp.startDate}
                  </div>
                )}

                {exp.endDate && (
                  <div className={`tp-experience__date--end ${dateClass}`}>
                    <span className="mx-[4px]">-</span>
                    {exp.endDate}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              {exp.company && (
                <div
                  className={`tp-experience__company capitalize ${companyClass}`}
                >
                  {exp.company}
                </div>
              )}
              {exp.location && (
                <div
                  className={`tp-experience__company capitalize ${locationClass}`}
                >
                  <span className="mx-[4px]">|</span>
                  {exp.location}
                </div>
              )}
            </div>
            <div
              className={`tp-experience__description pl-[16px] ${
                descriptionClass
                  ? descriptionClass
                  : "font-[400] text-[#3f3f3fB3]  "
              } `}
            >
              {Array.isArray(exp.description) &&
                exp.description.map((des) => {
                  if (des.trim()) {
                    return (
                      <p className={`relative mt-[8px] ${descriptionClass}`}>
                        {capitalizeFirstLetter(des)}

                        <span class="text-black text-[16px] font-[500] absolute leading-none left-[-12px] top-[3px] ">
                          -
                        </span>
                      </p>
                    );
                  }
                })}
            </div>
          </div>
        ))}
      </section>
    );
  }
}
