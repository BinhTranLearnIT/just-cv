import React from "react";

export default function Languages({ data, ...props }) {
  if (data) {
    return (
      <section id="languages">
        <ul className="tp-section__list mt-[4px] mb-[8px] pl-[14px] list-none">
          {data.map(({ name, level }) => {
            return (
              <li className="tp-section__item mt-[8px] text-[14px] font-[400] leading-[22px] flex text-[#3f3f3f] relative capitalize">
                <p>{name}</p>

                {level ? (
                  <p>
                    &nbsp;
                    {" | "}
                    <span className="italic"> {level}</span>
                  </p>
                ) : (
                  ""
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
