import React from "react";

export default function Languages({
  data,
  languageClass,
  levelClass,
  ...props
}) {
  if (data) {
    return (
      <section id="languages">
        <ul className="tp-section__list mt-[4px] mb-[8px] pl-[14px] list-none">
          {data.map(({ name, level }) => {
            return (
              <li className="tp-section__item mt-[8px] text-[14px] font-[400] leading-[22px] flex text-[#3f3f3f] relative capitalize">
                <div
                  className={`w-fit inline-block ${
                    languageClass
                      ? languageClass
                      : "text-[14px] font-[400] text-[#3f3f3f] "
                  }`}
                >
                  {name}
                </div>

                {level && (
                  <div className="border-l-2 pl-[4px] ml-[8px] h-fit">
                    <span
                      className={`${
                        levelClass
                          ? levelClass
                          : "italic text-[14px] font-[400] text-[#3f3f3f]"
                      }`}
                    >
                      {" "}
                      {level}
                    </span>
                  </div>
                )}

                <span className="text-black text-[20px] font-[600] absolute leading-none left-[-14px] top-1/2 -translate-y-1/2 ">
                  •
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
