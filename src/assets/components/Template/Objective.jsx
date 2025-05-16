import React from "react";

export default function Objective({ data, ...props }) {
  return (
    <section id="objective">
      <div className="tp-objective text-[#3f3f3fb3] lead-[24px] text-[14px]  flex flex-col space-y-2">
        <p>{data}</p>
      </div>
    </section>
  );
}
