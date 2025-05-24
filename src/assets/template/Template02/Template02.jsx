import React from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Contact,
  Languages,
  Skills,
  Objective,
  Experience,
  Education,
  Name,
  Projects,
} from "../../components/Template";
export default function Template02({ ref, ...props }) {
  const user = useSelector((state) => state.user.userData);
  return (
    <div ref={ref} data-name="zurich ">
      <div className="template__container w-[816px] mx-auto  min-h-[1056px] relative font-sans text-[#303030]">
        <div className="template__background bg-white absolute w-full h-full  z-0">
          <div className="left-[64px] right-[64px]  bg-[#bfbfbfa6] h-[32px] absolute"></div>
        </div>
        <div className="template__wrapper px-[64px] py-[32px]  z-10 relative  overflow-hidden">
          <div className="template__header mb-[32px] mt-[16px] bg-red-400">
            <div className="template__column flex">
              <div className="template__column--left w-[70%] min-w-[220px] mr-[44px]">
                {user?.name && (
                  <Name
                    data={user.name}
                    nameClass={
                      "font-sans uppercase text-[45px] font-[600] space-x-2 leading-none h-fit mb-[16px]"
                    }
                    jobTitleClass={
                      "uppercase text-[#3030308c] uppercase font-[700] tracking-[0.5px] mb-[5px]"
                    }
                  />
                )}
              </div>
              <div className="template__column-right w-auto flex flex-col items-end">
                {user?.contact && (
                  <div className="template__section">
                    <Contact
                      data={user.contact}
                      contactClass={
                        "text-[11px] font-[600] text-[#3030308c]  flex flex-col "
                      }
                      contactItemClass={"justify-end text-right "}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
