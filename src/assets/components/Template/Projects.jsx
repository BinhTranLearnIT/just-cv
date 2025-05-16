import React from "react";

export default function Projects({ data, ...props }) {
  if (data) {
    return (
      <section id="project" className="flex flex-col space-y-[16px]">
        {data.map((pj, i) => (
          <div
            className="flex flex-col text-[14px] text-[#3f3f3f] font-[600]  leading-[22px]"
            key={i}
          >
            {pj.project && (
              <div className="tp-experience__position uppercase   ">
                {pj.project}
              </div>
            )}
            {pj.link && (
              <div className="tp-experience__position  tracking-wide underline ">
                {pj.link}
              </div>
            )}

            <div className="tp-project__description  font-[400] text-[#3f3f3fB3]  pl-[16px]">
              {Array.isArray(pj.description)
                ? pj.description.map((des, i) => (
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
