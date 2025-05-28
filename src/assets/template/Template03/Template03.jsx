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
export default function Template03({ ref, ...props }) {
  const user = useSelector((state) => state.user.userData);
  return (
    <div ref={ref} data-name="london ">
      <div className="template__container w-[816px] mx-auto  min-h-[1056px] relative font-sans">
        <div className="template__background bg-white absolute w-full h-full  z-0"></div>
        <div className="template__wrapper p-[72px]  z-10 relative  overflow-hidden">
          <div className="template__header">
            <div className="template__column flex justify-between mb-[32px]">
              <div className=" w-auto flex flex-col">
                {user?.name && (
                  <Name
                    data={user.name}
                    reverse={true}
                    nameClass={
                      "font-lora flex flex-col text-[48px]  leading-[1.1] text-[#3d4042] uppercase"
                    }
                    jobTitleClass={`uppercase font-sans text-[15px] text-[#3d4042]
                        order-0 font-[500]  leading-none tracking-[3.22px] mb-[5px] font-[400]`}
                  />
                )}
              </div>
              <div className="w-[194px] h-[194px] flex justify-end">
                {user?.avatar && <Avatar data={user.avatar} small />}
              </div>
            </div>
          </div>
          <div className="template__content">
            <div className="template__column flex border-t-[2px] border-[#3d404233]">
              {/*------ left column------ */}
              <div
                className="template__column--left  w-[250px] min-w-[250px] mr-[35px]
             
              "
              >
                <div className="flex flex-col relative ">
                  {/* --- contact --- */}
                  {checkData(user.contact) && (
                    <div className="template__section mt-[32px] pb-[24px] border-b-[2px] border-[#3d404233]">
                      <Contact
                        data={user.contact}
                        showIcon={true}
                        contactClass={
                          "text-[14px] font-[600]   flex flex-col space-y-[8px] text-[#3d4042] "
                        }
                        contactItemClass={" "}
                        contactItemIconClass={"pt-[1px] "}
                        contactItemNameClass={"font-[400]"}
                      />
                    </div>
                  )}
                  {/* --- Skills --- */}
                  {checkData(user.skills) && (
                    <div className="mt-[24px] pb-[24px] border-b-[2px] border-[#3d404233]">
                      <div className="template__section--title w-fit uppercase text-[14px] text-[#3d4042] font-[700] tracking-[2px]  mb-[16px] py-[6px] ">
                        <p className="tp-section__title ">Skills</p>
                      </div>
                      <Skills
                        data={user.skills}
                        levelClass={"text-[#3d4042] text-[14px] italic"}
                        skillClass={"text-[#3d4042] text-[14px]"}
                      />
                    </div>
                  )}

                  {/* --- Languages --- */}
                  {checkData(user.languages) && (
                    <div className="mt-[24px] pb-[24px] border-b-[2px] border-[#3d404233]">
                      <div className="template__section--title w-fit uppercase text-[14px] text-[#3d4042] font-[700] tracking-[2px]  mb-[16px] py-[6px] ">
                        <p className="tp-section__title ">Languages</p>
                      </div>
                      <Languages
                        data={user.languages}
                        levelClass={"text-[#3d4042] text-[14px] italic"}
                        languageClass={"text-[#3d4042] text-[14px]"}
                      />
                    </div>
                  )}
                  <div className="absolute h-[5px] w-full bg-white left-0 bottom-[-1px]"></div>
                </div>
              </div>
              {/*------ right column------ */}
              <div
                className="template__column--right w-auto pl-[35px] 
              
               border-l-[2px] border-[#3d404233]"
              >
                <div className="flex flex-col relative">
                  {/* --- objective --- */}
                  {checkData(user.objective) && (
                    <div className="mt-[32px] pb-[24px] border-b-[2px] border-[#3d404233]">
                      <div className="template__section--title w-fit uppercase text-[14px] text-[#3d4042] font-[700] tracking-[2px]  mb-[16px] py-[6px] ">
                        <p className="tp-section__title ">Objective</p>
                      </div>
                      <Objective
                        data={user.objective}
                        objectiveClass={"text-[#3d4042] text-[14px]"}
                      />
                    </div>
                  )}

                  {/* --- Experience --- */}
                  {checkData(user.experience) && (
                    <div className="mt-[24px] pb-[24px] border-b-[2px] border-[#3d404233]">
                      <div className="template__section--title w-fit uppercase text-[14px] text-[#3d4042] font-[700] tracking-[2px]  mb-[16px] py-[6px] ">
                        <p className="tp-section__title ">Experience</p>
                      </div>
                      <Experience
                        data={user.experience}
                        positionClass={"text-[14px]  mb-[8px] font-[500]"}
                        dateClass={"text-[14px]   font-[500]"}
                        companyClass={"text-[14px]   font-[500]"}
                        locationClass={"text-[14px]   font-[500]"}
                        descriptionClass={"text-[14px] text-[#3d40428c]"}
                      />
                    </div>
                  )}

                  {/* --- Education --- */}
                  {checkData(user.education) && (
                    <div className="mt-[24px] pb-[24px] border-b-[2px] border-[#3d404233]">
                      <div className="template__section--title w-fit uppercase text-[14px] text-[#3d4042] font-[700] tracking-[2px]  mb-[16px] py-[6px] ">
                        <p className="tp-section__title ">Education</p>
                      </div>
                      <Education
                        data={user.education}
                        degreeClass={"text-[14px] mb-[8px] font-[500]"}
                        dateClass={"text-[14px]  font-[500]"}
                        institutionClass={"text-[14px]  font-[500]"}
                        locationClass={"text-[14px]  font-[500]"}
                        descriptionClass={"text-[14px] text-[#3d40428c]"}
                      />
                    </div>
                  )}

                  {/* --- Project --- */}
                  {checkData(user.projects) && (
                    <div className="mt-[24px] pb-[24px] border-b-[2px] border-[#3d404233]">
                      <div className="template__section--title w-fit uppercase text-[14px] text-[#3d4042] font-[700] tracking-[2px]  mb-[16px] py-[6px] ">
                        <p className="tp-section__title ">Projects</p>
                      </div>
                      <Projects data={user.projects} />
                    </div>
                  )}
                  <div className="absolute h-[5px] w-full bg-white left-0 bottom-[-1px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
