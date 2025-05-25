import React from "react";

export default function Projects({
  data,
  projectClass,
  linkClass,
  descriptionClass,
  ...props
}) {
  if (data) {
    return (
      <section id="project" className="flex flex-col space-y-[16px]">
        {data.map((pj, i) => (
          <div
            className="flex flex-col text-[14px] text-[#3f3f3f] font-[600]  leading-[22px]"
            key={i}
          >
            {pj.project && (
              <div
                className={`tp-experience__position uppercase ${projectClass}  `}
              >
                {pj.project}
              </div>
            )}
            {pj.link && (
              <div
                className={`tp-experience__position ${
                  linkClass ? linkClass : "tracking-wide underline"
                }   `}
              >
                {pj.link}
              </div>
            )}

            <div
              className={`tp-project__description  ${
                descriptionClass ? degreeClass : "font-[400] text-[#3f3f3fB3]"
              }  pl-[16px]`}
            >
              {Array.isArray(pj.description) &&
                pj.description.map((des) => (
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
}
