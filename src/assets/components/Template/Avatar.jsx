import React from "react";

export default function Avatar({ data, rounded, small, ...props }) {
  if (data) {
    return (
      <section
        id="avatar"
        className={`tp-avatar ${
          small ? "w-[150px] h-[150px]" : "w-[220px] h-[220px]"
        } ${rounded ? "rounded-full" : ""} overflow-hidden`}
      >
        <img src={data} className="w-full h-full object-fit" alt="avatar" />
      </section>
    );
  }
}
