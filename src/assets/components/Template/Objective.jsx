import React from "react";

export default function Objective({ data, objectiveClass, ...props }) {
  if (data) {
    return (
      <section id="objective">
        <div
          className={`tp-objective ${
            objectiveClass
              ? objectiveClass
              : " text-[#3f3f3fb3] lead-[24px] text-[14px]"
          }  flex flex-col space-y-2`}
        >
          <p>{typeof data === "string" ? data : "Invalid objective data."}</p>
        </div>
      </section>
    );
  }
}
