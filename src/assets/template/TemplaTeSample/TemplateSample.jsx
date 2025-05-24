import React from "react";
import { useSelector } from "react-redux";

export default function TemplateSample({ ref, ...props }) {
  const user = useSelector((state) => state.user.userData);
  return (
    <div ref={ref}>
      <div className="template__container w-[816px] mx-auto  min-h-[1056px] relative font-sans">
        <div className="template__background bg-white absolute w-full h-full  z-0"></div>
        <div className="template__wrapper p-[72px]  z-10 relative  overflow-hidden">
          <div className="template__content">
            <div className="template__column flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
