import React from "react";

export default function Experience({ data, ...props }) {
  if (data) {
    return (
      <section id="experience" className="flex flex-col space-y-[16px]">
        {data.map((exp, i) => (
          <div
            className="flex flex-col text-[14px] first:text-[#3f3f3f] text-[#3f3f3fb3] font-[500]  leading-[22px]"
            key={i}
          >
            <div className="flex justify-between">
              {exp.position && (
                <div className="tp-experience__position uppercase max-w-[50%]  ">
                  {exp.position}
                </div>
              )}

              <div className="tp-experience__date flex capitalize">
                {exp.startDate && (
                  <div className="tp-experience__date--start">
                    {exp.startDate}
                  </div>
                )}

                {exp.endDate && (
                  <div className="tp-experience__date--start">
                    <span>&nbsp;-&nbsp;</span> {exp.endDate}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              {exp.company && (
                <div className="tp-experience__company capitalize">
                  {exp.company}
                </div>
              )}
              {exp.location && (
                <div className="tp-experience__company capitalize">
                  <span>&nbsp;|&nbsp;</span>
                  {exp.location}
                </div>
              )}
            </div>
            <div className="tp-experience__description  font-[400] text-[#3f3f3fB3]  pl-[16px]">
              {Array.isArray(exp.description)
                ? exp.description.map((des, i) => (
                    <p className="relative mt-[8px]" key={i}>
                      {des}
                      {des && (
                        <span className="absolute top-[-5px] left-[-12px] font-[600] text-[20px]">
                          .
                        </span>
                      )}
                    </p>
                  ))
                : exp.description && (
                    <p className="relative mt-[8px]">
                      {exp.description}
                      {exp.description && (
                        <span className="absolute top-[-5px] left-[-12px] font-[600] text-[20px]">
                          .
                        </span>
                      )}
                    </p>
                  )}
            </div>
          </div>
        ))}
      </section>
    );
  }
}
