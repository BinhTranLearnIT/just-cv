import React from "react";

export default function Skills({ data, ...props }) {
  if (data) {
    return (
      <section id="skills">
        <ul className="tp-section__list mt-[4px] mb-[8px] pl-[14px] list-none">
          {data.map((skill) => {
            return (
              <li className="tp-section__item text-[14px] mt-[8px] font-[400] leading-[22px] text-[#3f3f3f] relative capitalize">
                <p>{skill}</p>
                <span className="text-black text-[20px]  absolute leading-none font-[600] left-[-14px] top-1/2 -translate-y-1/2 ">
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
