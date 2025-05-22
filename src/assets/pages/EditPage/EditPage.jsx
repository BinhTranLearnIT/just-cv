import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Templates } from "../../template/templateMap";

import "./EditPage.css";

import {
  FormPersonalDetails,
  FormSkills,
  FormSummary,
  FormLanguages,
} from "../../components/Forms";
import FormExperience from "../../components/Forms/FormExperience";
import FormEducation from "../../components/Forms/FormEducation";
import FormProjects from "../../components/Forms/FormProjects";

export default function EditPage() {
  const dispatch = useDispatch();
  const userTemplate = useSelector((state) => state.user.userTemplate);
  const PreviewTemplate = Templates[userTemplate];

  return (
    <div>
      <div className="">
        <div className="jc-grid bg-[#302c42]">
          <div className="jc-form col-span-12 lg:col-span-6   flex space-y-[4px] relative  flex-col">
            <div className="jc-breadcrumb shadow-lg sticky z-10 top-0 px-[32px] py-[20px] text-[#19a1f0]  bg-white rounded-b-[4px]">
              <button className="jc-link">{`< Back`}</button>
            </div>
            <FormPersonalDetails />
            <FormSummary />
            <FormSkills />
            <FormLanguages />
            <FormExperience />
            <FormEducation />
            <FormProjects />
          </div>
          <div className="hidden lg:block lg:col-span-6  relative">
            <div className="fixed top-0 right-0 w-1/2 h-screen  z-10 overflow-hidden">
              <div className="w-full h-full  relative">
                <button className=" absolute top-[20px] right-[100px] px-[8px] py-[12px] bg-[#1a91f0] hover:bg-[#1170cd] transition-all duration-150 ease-in-out text-white text-[16px] font-[600]">
                  Download PDF
                </button>
                <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 scale-50 origin-top">
                  <PreviewTemplate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
