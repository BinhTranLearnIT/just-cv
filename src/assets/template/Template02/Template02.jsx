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
import checkData from "../../utils/checkData";
export default function Template02({ ref, ...props }) {
  const user = useSelector((state) => state.user.userData);
  return (
    <div ref={ref} data-name="paris ">
      <div className="template__container w-[816px] mx-auto  min-h-[1056px] relative font-sans text-[#303030]">
        <div className="template__background bg-white absolute w-full h-full  z-0">
          <div className="left-[64px] right-[64px]  bg-[#bfbfbfa6] h-[32px] absolute"></div>
        </div>
        <div className="template__wrapper px-[64px] py-[32px]  z-10 relative  overflow-hidden">
          <div className="template__header mb-[32px] mt-[16px] ">
            <div className="template__column flex justify-between">
              <div className="template__column--left min-w-[220px] mr-[44px]">
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
                      contactItemIconClass={"hidden"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="template__content flex">
            {/*------ left column------ */}

            <div className="template__column--left w-[220px] min-w-[220px] mr-[44px] flex flex-col space-y-[32px]">
              {/*------ Objective------ */}
              {checkData(user.objective) && (
                <div className="template__section flex flex-col">
                  <div
                    className="template__section--title 
                   uppercase  flex items-center 
                  text-[14px]  text-[#3f3f3f] tracking-[2.3px]  font-[700] 
                  py-[6px] mb-[16px]
                  border-t-[1px] border-t-[#bfbfbf] border-b-[1px] border-b-[#bfbfbf]
                  "
                  >
                    <span className="mr-[8px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="none"
                          stroke-width="1"
                          opacity="1"
                        >
                          <g transform="translate(-72 -772)">
                            <g transform="translate(72 772)">
                              <circle
                                cx="5.522"
                                cy="5.5"
                                r="2.063"
                                fill="#bfbfbf"
                              ></circle>
                              <circle
                                cx="5.5"
                                cy="5.5"
                                r="4.822"
                                stroke="#bfbfbf"
                                stroke-width="1.356"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="tp-section__title font-lora">Objective</p>
                  </div>
                  <Objective data={user.objective} />
                </div>
              )}
              {/*------ Skills------ */}
              {checkData(user.objective) && (
                <div className="template__section flex flex-col">
                  <div
                    className="template__section--title 
                   uppercase  flex items-center 
                  text-[14px]  text-[#3f3f3f] tracking-[2.3px]  font-[700] 
                  py-[6px] mb-[16px]
                  border-t-[1px] border-t-[#bfbfbf] border-b-[1px] border-b-[#bfbfbf]
                  "
                  >
                    <span className="mr-[8px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="none"
                          stroke-width="1"
                          opacity="1"
                        >
                          <g transform="translate(-72 -772)">
                            <g transform="translate(72 772)">
                              <circle
                                cx="5.522"
                                cy="5.5"
                                r="2.063"
                                fill="#bfbfbf"
                              ></circle>
                              <circle
                                cx="5.5"
                                cy="5.5"
                                r="4.822"
                                stroke="#bfbfbf"
                                stroke-width="1.356"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="tp-section__title font-lora">Skills</p>
                  </div>
                  <Skills data={user.skills} levelClass={"hidden"} />
                </div>
              )}
              {/*------ Skills------ */}
              {checkData(user.languages) && (
                <div className="template__section flex flex-col">
                  <div
                    className="template__section--title 
                   uppercase  flex items-center 
                  text-[14px]  text-[#3f3f3f] tracking-[2.3px]  font-[700] 
                  py-[6px] mb-[16px]
                  border-t-[1px] border-t-[#bfbfbf] border-b-[1px] border-b-[#bfbfbf]
                  "
                  >
                    <span className="mr-[8px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="none"
                          stroke-width="1"
                          opacity="1"
                        >
                          <g transform="translate(-72 -772)">
                            <g transform="translate(72 772)">
                              <circle
                                cx="5.522"
                                cy="5.5"
                                r="2.063"
                                fill="#bfbfbf"
                              ></circle>
                              <circle
                                cx="5.5"
                                cy="5.5"
                                r="4.822"
                                stroke="#bfbfbf"
                                stroke-width="1.356"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="tp-section__title font-lora">Languages</p>
                  </div>
                  <Languages data={user.languages} levelClass={""} />
                </div>
              )}
            </div>
            {/*------ right column------ */}
            <div className="template__column--right w-full flex flex-col space-y-[32px]">
              {/*------ Experience------ */}
              {checkData(user.experience) && (
                <div className="template__section flex flex-col">
                  <div
                    className="template__section--title 
                   uppercase  flex items-center 
                  text-[14px]  text-[#3f3f3f] tracking-[2.3px]  font-[700] 
                  py-[6px] mb-[16px]
                  border-t-[1px] border-t-[#bfbfbf] border-b-[1px] border-b-[#bfbfbf]
                  "
                  >
                    <span className="mr-[8px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="none"
                          stroke-width="1"
                          opacity="1"
                        >
                          <g transform="translate(-72 -772)">
                            <g transform="translate(72 772)">
                              <circle
                                cx="5.522"
                                cy="5.5"
                                r="2.063"
                                fill="#bfbfbf"
                              ></circle>
                              <circle
                                cx="5.5"
                                cy="5.5"
                                r="4.822"
                                stroke="#bfbfbf"
                                stroke-width="1.356"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="tp-section__title font-lora">Experience</p>
                  </div>
                  <Experience data={user.experience} />
                </div>
              )}

              {/*------ Education ------ */}
              {checkData(user.education) && (
                <div className="template__section flex flex-col">
                  <div
                    className="template__section--title 
                   uppercase  flex items-center 
                  text-[14px]  text-[#3f3f3f] tracking-[2.3px]  font-[700] 
                  py-[6px] mb-[16px]
                  border-t-[1px] border-t-[#bfbfbf] border-b-[1px] border-b-[#bfbfbf]
                  "
                  >
                    <span className="mr-[8px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="none"
                          stroke-width="1"
                          opacity="1"
                        >
                          <g transform="translate(-72 -772)">
                            <g transform="translate(72 772)">
                              <circle
                                cx="5.522"
                                cy="5.5"
                                r="2.063"
                                fill="#bfbfbf"
                              ></circle>
                              <circle
                                cx="5.5"
                                cy="5.5"
                                r="4.822"
                                stroke="#bfbfbf"
                                stroke-width="1.356"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="tp-section__title font-lora">Education</p>
                  </div>
                  <Education data={user.education} />
                </div>
              )}

              {/*------ Projects------ */}
              {checkData(user.projects) && (
                <div className="template__section flex flex-col">
                  <div
                    className="template__section--title 
                   uppercase  flex items-center 
                  text-[14px]  text-[#3f3f3f] tracking-[2.3px]  font-[700] 
                  py-[6px] mb-[16px]
                  border-t-[1px] border-t-[#bfbfbf] border-b-[1px] border-b-[#bfbfbf]
                  "
                  >
                    <span className="mr-[8px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="none"
                          stroke-width="1"
                          opacity="1"
                        >
                          <g transform="translate(-72 -772)">
                            <g transform="translate(72 772)">
                              <circle
                                cx="5.522"
                                cy="5.5"
                                r="2.063"
                                fill="#bfbfbf"
                              ></circle>
                              <circle
                                cx="5.5"
                                cy="5.5"
                                r="4.822"
                                stroke="#bfbfbf"
                                stroke-width="1.356"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="tp-section__title font-lora">Projects</p>
                  </div>
                  <Projects data={user.projects} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
